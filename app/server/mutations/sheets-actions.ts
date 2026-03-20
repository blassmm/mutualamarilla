"use server";

import { google } from "googleapis";
import { REPARTICION_LABELS } from "@/data/repartition";
import { XMLParser } from "fast-xml-parser";
import { calcCuil } from "@/app/utils/calc-cuil";

interface FormData {
  nombreApellido: string;
  sexo: string;
  dni: string;
  localidad: string;
  telefonoCelular: string;
  email: string;
  reparticion: string;
  montoSolicitar: string;
  mensaje: string;
}

function getGoogleCredentials() {
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replaceAll(
    "\\n",
    "\n",
  );
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

  if (!clientEmail || !privateKey || !spreadsheetId) {
    throw new Error(
      "Faltan variables de entorno: GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL, GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY, GOOGLE_SHEETS_SPREADSHEET_ID",
    );
  }

  return {
    clientEmail,
    privateKey,
    spreadsheetId,
  };
}

export async function appendToGoogleSheet(data: FormData) {
  try {
    const { clientEmail, privateKey, spreadsheetId } = getGoogleCredentials();

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const sheetName = data.reparticion;
    const reparticionLabel =
      REPARTICION_LABELS[data.reparticion] ?? data.reparticion;

    const affiliateCUIL = calcCuil(data.dni, data.sexo);

    const now = new Date().toISOString();
    const dateStr = `=(DATEVALUE(LEFT("${now}",10)) + TIMEVALUE(MID("${now}",12,8))) + (-3/24)`; // this calc is to show date instead plain timestampz
    // also, the format of the cell should be date

    const { affiliate } = await getAffiliation(affiliateCUIL);

    const rowValues = [
      data.telefonoCelular, // phone
      data.dni, // dni
      data.nombreApellido, // nombre_apellido
      data.email, // email
      data.reparticion, // reparticion_id
      reparticionLabel, // reparticion_label
      dateStr, // created_at
      "", // message_id
      data.mensaje, // consulta
      data.montoSolicitar, // monto
      affiliate,
    ];

    const result = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `'${sheetName}'!A:K`,
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [rowValues],
      },
    });

    console.log(data);

    if (result.status !== 200) {
      console.error(
        "[Sheets] Respuesta inesperada:",
        result.status,
        result.data,
      );
      return { success: false, error: "No se pudo guardar en la planilla" };
    }

    return { success: true };
  } catch (error) {
    console.error("Error appendiendo a Google Sheet:", error);
    return { success: false, error: "No se pudo guardar en la planilla" };
  }
}

async function getAffiliation(cuil: string) {
  const AMAT_KEY = process.env.AMAT_KEY;
  const AMAT_USER = process.env.AMAT_USER;

  if (!AMAT_KEY || !AMAT_USER) {
    throw new Error("Faltan variables de entorno: AMAT_KEY o AMAT_USER");
  }

  const url = `https://mutualamat.com.ar/MutualConsultaXMLAMAT.php?USUARIO=${AMAT_USER}&CLAVE=${AMAT_KEY}&CUIL=${cuil}`;

  try {
    const res = await fetch(url);
    const xml = await res.text();

    console.log("AMAT RAW RESPONSE:", xml);

    const parser = new XMLParser({
      ignoreAttributes: false,
      trimValues: true,
    });

    const json = parser.parse(xml);

    // docs
    // https://mutualamat.com.ar/DocumentacionAPIConsultaCuilAmat.php
    const state = json?.afiliados?.estado?.EstadoConsulta;

    if (state === "Clave Incorrecta o Usuario inexistente") {
      console.error("Credenciales incorrectas");
      return {
        found: false,
        affiliate: false,
      };
    }

    if (state === "CUIL NO ENCONTRADO") {
      return { found: false, affiliate: false };
    }

    if (state !== "OK") {
      return {
        found: false,
        affiliate: false,
      };
    }

    const affiliateRaw = json?.afiliados?.persona?.amatAfiliado;
    const affiliate = Number(affiliateRaw) > 0;

    return {
      found: true,
      affiliate,
    };
  } catch (err: any) {
    if (err.name === "AbortError") {
      console.error("AMAT TIMEOUT");
    } else {
      console.error("AMAT FETCH ERROR", err);
    }

    throw err;
  }
}

"use server";

import { google } from "googleapis";
import { REPARTICION_LABELS } from "@/data/repartition";

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
    "\n"
  );
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

  if (!clientEmail || !privateKey || !spreadsheetId) {
    throw new Error(
      "Faltan variables de entorno: GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL, GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY, GOOGLE_SHEETS_SPREADSHEET_ID"
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

    // consulta = monto + mensaje opcional
    const consulta = data.mensaje
      ? `Monto: ${data.montoSolicitar} - ${data.mensaje}`
      : `Monto: ${data.montoSolicitar}`;

    const rowValues = [
      data.telefonoCelular, // phone
      data.dni, // dni
      data.nombreApellido, // nombre_apellido
      data.email, // email
      data.reparticion, // reparticion_id
      reparticionLabel, // reparticion_label
      new Date().toISOString(), // created_at
      "", // message_id
      consulta, // consulta
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `'${sheetName}'!A:I`,
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [rowValues],
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Error appendiendo a Google Sheet:", error);
    return { success: false, error: "No se pudo guardar en la planilla" };
  }
}

"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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

export async function sendAyudaEconomicaEmail(data: FormData) {
  try {
    const response = await resend.emails.send({
      from: "Formulario AMAT <onboarding@resend.dev>",
      to: "debitos.amat@gmail.com",
      subject: `Nueva solicitud de Ayuda Económica - ${data.nombreApellido}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background: #f5f5f5;">
          <div style="max-width: 600px; margin: auto; background: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #333; margin: 0;">Nueva Solicitud de Ayuda Económica</h1>
              <p style="color: #666; margin-top: 8px;">AMAT - Mutual Amarilla de Trabajadores</p>
            </div>
            
            <div style="background: #EDF000; padding: 15px; border-radius: 6px; margin-bottom: 20px;">
              <h2 style="margin: 0; color: #333; font-size: 18px;">Monto Solicitado: ${
                data.montoSolicitar
              }</h2>
            </div>
            
            <h3 style="color: #333; border-bottom: 2px solid #EDF000; padding-bottom: 8px;">Datos Personales</h3>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0; color: #666; width: 40%;"><strong>Nombre y Apellido:</strong></td>
                <td style="padding: 8px 0; color: #333;">${
                  data.nombreApellido
                }</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666;"><strong>Sexo:</strong></td>
                <td style="padding: 8px 0; color: #333;">${data.sexo}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666;"><strong>DNI:</strong></td>
                <td style="padding: 8px 0; color: #333;">${data.dni}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666;"><strong>Localidad:</strong></td>
                <td style="padding: 8px 0; color: #333;">${data.localidad}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666;"><strong>Teléfono:</strong></td>
                <td style="padding: 8px 0; color: #333;">${
                  data.telefonoCelular
                }</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666;"><strong>Email:</strong></td>
                <td style="padding: 8px 0; color: #333;">${data.email}</td>
              </tr>
            </table>
            
            <h3 style="color: #333; border-bottom: 2px solid #EDF000; padding-bottom: 8px;">Datos Laborales</h3>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0; color: #666; width: 40%;"><strong>Repartición:</strong></td>
                <td style="padding: 8px 0; color: #333;">${
                  data.reparticion
                }</td>
              </tr>
            </table>
            
            ${
              data.mensaje
                ? `
            <h3 style="color: #333; border-bottom: 2px solid #EDF000; padding-bottom: 8px;">Mensaje</h3>
            <p style="color: #333; background: #f9f9f9; padding: 15px; border-radius: 6px; white-space: pre-wrap;">${data.mensaje}</p>
            `
                : ""
            }
            
            <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;" />
            <p style="color: #999; font-size: 12px; text-align: center;">
              Este mensaje fue enviado desde el formulario de Ayuda Económica de la web de AMAT.
            </p>
          </div>
        </div>
      `,
    });
    return { success: true, data: response };
  } catch (error) {
    console.error("Error enviando email:", error);
    return { success: false, error: "No se pudo enviar el formulario" };
  }
}

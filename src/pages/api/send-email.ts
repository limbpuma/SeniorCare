import type { APIRoute } from "astro";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  const headers = new Headers();
  headers.set("Access-Control-Allow-Origin", "*");
  headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  headers.set("Access-Control-Allow-Headers", "Content-Type");

  
  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers,
    });
  }

  
  try {
    const data = await request.formData();
    const name = data.get("name");
    const email = data.get("email");
    const phone = data.get("phone");
    const subject = data.get("subject");
    const message = data.get("message");

    const logoUrl = "https://pflegedienst-integra.de/assets/logo/logo_integra.webp";
    const websiteUrl = "https://pflegedienst-integra.de/";

    const plainText = `
    Neue Kontaktformular-Einreichung

    Name: ${name}
    E-Mail: ${email}
    Telefon: ${phone}
    Betreff: ${subject}
    Nachricht: ${message}

    © 2024 Integra GmbH. Alle Rechte vorbehalten.
    Website: ${websiteUrl}
    Adresse: Flughafenstraße 404, 44328 Dortmund
    Öffnungszeiten: Mo-Fr 9:00-15:00 Uhr
    Kontakt: 0231 9125000
    `.trim();

    const { data: emailData, error } = await resend.emails.send({
      from: "info@mail.pflegedienst-integra.de",
      to: ["limbpuma_de@hotmail.com"],
      subject: `New contact form submission: ${subject}`,
      text: plainText,
      html: `
        <!DOCTYPE html>
        <html lang="de">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Neue Kontaktformular-Einreichung</title>
          <style>
            body {
              font-family: 'Montserrat', sans-serif;
              line-height: 1.6;
              color: #161616;
              background-color: #ffffff;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #F2B98A;
              border-radius: 1rem;
              box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
            }
            .header {
              text-align: center;
              padding: 20px 0;
              background-color: #ffffff;
              border-top-left-radius: 1rem;
              border-top-right-radius: 1rem;
            }
            .logo {
              max-width: 150px;
              height: auto;
            }
            h1 {
              font-size: 24px;
              font-weight: 700;
              margin-bottom: 20px;
              color: #084487;
            }
            .content {
              background-color: #ffffff;
              padding: 20px;
              border-radius: 0.5rem;
              margin-top: 20px;
            }
            .field {
              margin-bottom: 15px;
            }
            .label {
              font-weight: 600;
              color: #5a8bba;
            }
            .value {
              margin-top: 5px;
            }
            .footer {
              text-align: center;
              margin-top: 20px;
              font-size: 14px;
              color: #084487;
            }
            a {
              color: #084487;
              text-decoration: none;
            }
            a:hover {
              text-decoration: underline;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <a href="${websiteUrl}" target="_blank">
                <img src="${logoUrl}" alt="Integra GmbH Logo" class="logo">
              </a>
            </div>
            <div class="content">
              <h1>Neue Kontaktformular-Einreichung</h1>
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">E-Mail:</div>
                <div class="value">${email}</div>
              </div>
              <div class="field">
                <div class="label">Telefon:</div>
                <div class="value">${phone}</div>
              </div>
              <div class="field">
                <div class="label">Betreff:</div>
                <div class="value">${subject}</div>
              </div>
              <div class="field">
                <div class="label">Nachricht:</div>
                <div class="value">${message}</div>
              </div>
            </div>
            <div class="footer">
              <p>&copy; 2023 <a href="${websiteUrl}" target="_blank">Integra GmbH</a>. Alle Rechte vorbehalten.</p>
              <p>Adresse: Musterstraße 123, 12345 Musterstadt</p>
              <p>Öffnungszeiten: Mo-Fr 9:00-18:00 Uhr</p>
              <p>Kontakt: <a href="tel:+491234567890">+49 123 456 7890</a></p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 400,
        headers,
      });
    }

    return new Response(JSON.stringify({ success: true, emailData }), {
      status: 200,
      headers,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "An unexpected error occurred" }), {
      status: 500,
      headers,
    });
  }
};

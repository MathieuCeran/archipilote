import nodemailer from "nodemailer";

/* ============================================================
   Envoi d'e-mails via le SMTP de la boîte Hostinger.

   Variables d'environnement (Vercel) :
     SMTP_HOST  smtp.hostinger.com
     SMTP_PORT  465 (SSL) ou 587 (STARTTLS)
     SMTP_USER  contact@archipiloterenovation.com
     SMTP_PASS  mot de passe de la boîte
     LEAD_TO    destinataire des demandes (défaut : SMTP_USER)
   ============================================================ */

export function isMailConfigured() {
  return Boolean(process.env.SMTP_USER && process.env.SMTP_PASS);
}

function transporter() {
  const port = Number(process.env.SMTP_PORT ?? 465);
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "smtp.hostinger.com",
    port,
    secure: port === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });
}

const escape = (s: string) => s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

/** Envoie une demande sous forme de tableau libellé → valeur. */
export async function sendLeadMail(opts: { subject: string; replyTo?: string; rows: [string, string][] }) {
  const user = process.env.SMTP_USER!;
  const to = process.env.LEAD_TO ?? user;

  const text = opts.rows.map(([k, v]) => `${k} : ${v}`).join("\n");
  const html = `<table cellpadding="6" style="font-family:sans-serif;font-size:14px;border-collapse:collapse">${opts.rows
    .map(
      ([k, v]) =>
        `<tr><td style="color:#777;vertical-align:top;white-space:nowrap">${k}</td><td style="white-space:pre-wrap">${escape(v)}</td></tr>`,
    )
    .join("")}</table>`;

  await transporter().sendMail({
    from: { name: "Archi Pilote Rénovation — Site web", address: user },
    to,
    replyTo: opts.replyTo,
    subject: opts.subject,
    text,
    html,
  });
}

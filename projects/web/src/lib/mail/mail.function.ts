import "server-only";

import nodemailer from "nodemailer";

const SMTP_HOST = process.env.SMTP_HOST || "localhost";
const SMTP_PORT = parseInt(process.env.SMTP_PORT || "465", 10);
const SMTP_SECURE = SMTP_PORT === 465;
const SMTP_USERNAME = process.env.SMTP_USERNAME || "";
const SMTP_PASSWORD = process.env.SMTP_PASSWORD || "";
const SMTP_FROM = process.env.SMTP_FROM || '"DLRG Gießen" <24@dlrg-giessen.de>';

const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_SECURE, // true for port 465, false for other ports
    auth: {
        user: SMTP_USERNAME,
        pass: SMTP_PASSWORD,
    }
});

export default async function mail(recepient: string, html: string) {
    return await transporter.sendMail({
        from: SMTP_FROM,
        to: recepient,
        subject: "Ihre Anmeldung zum Gießener 24 Stunden Schwimmen der DLRG",
        html: html,
    });
}
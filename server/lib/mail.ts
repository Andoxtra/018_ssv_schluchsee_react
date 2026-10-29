import {createTransport} from "nodemailer";
import type {MailConfig, Mailer, Message} from "../types.ts";

export const buildContactEmail = (message: Message): {subject: string; text: string} => ({
    subject: `Neue Kontaktanfrage: ${message.subject}`,
    text: [
        "Neue Nachricht über das Kontaktformular.",
        "",
        `Name: ${message.name}`,
        `E-Mail: ${message.email}`,
        `Betreff: ${message.subject}`,
        `Eingegangen: ${new Date(message.createdAt).toLocaleString("de-DE")}`,
        "",
        "Nachricht:",
        message.message,
    ].join("\n"),
});

export const createMailer = (config: MailConfig | undefined): Mailer | undefined => {
    if (!config) return undefined;
    const transport = createTransport({
        host: config.smtp.host,
        port: config.smtp.port,
        secure: config.smtp.secure,
        auth: {user: config.smtp.user, pass: config.smtp.pass},
    });
    return {
        notify: async (message: Message) => {
            const {subject, text} = buildContactEmail(message);
            await transport.sendMail({from: config.from, to: config.to, subject, text});
        },
    };
};

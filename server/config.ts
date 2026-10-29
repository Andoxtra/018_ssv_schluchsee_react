import {resolve} from "node:path";
import type {AppConfig} from "./types.ts";
import {readCredentials} from "./lib/credentials.ts";

export const loadCredentials = readCredentials;

export const loadConfig = (env: NodeJS.ProcessEnv): AppConfig => {
    const dataDir = resolve(env.DATA_DIR ?? "var");
    const origin = env.SITE_ORIGIN ?? "http://localhost:5173";
    const smtpHost = env.SMTP_HOST;
    const smtpUser = env.SMTP_USER;
    const mail = smtpHost && smtpUser ? {
        from: env.MAIL_FROM ?? "info@ssv-schluchsee.de",
        to: env.MAIL_TO ?? "info@ssv-schluchsee.de",
        smtp: {
            host: smtpHost,
            port: Number(env.SMTP_PORT ?? 465),
            secure: (env.SMTP_SECURE ?? "true") !== "false",
            user: smtpUser,
            pass: env.SMTP_PASS ?? "",
        },
    } : undefined;
    return {
        dataDir,
        origin,
        port: Number(env.PORT ?? 3001),
        host: env.HOST ?? "127.0.0.1",
        credentials: loadCredentials(dataDir),
        trustProxy: env.TRUST_PROXY === "1",
        secureCookies: origin.startsWith("https://"),
        localDevelopment: env.NODE_ENV !== "production",
        distDir: resolve("dist"),
        seedDir: resolve("src/data/news"),
        mail,
    };
};

import {existsSync, readFileSync} from "node:fs";
import {resolve} from "node:path";
import type {AppConfig, Credentials} from "./types.ts";

export const loadCredentials = (dataDir: string): Credentials | undefined => {
    const file = resolve(dataDir, "admin.json");
    if (!existsSync(file)) return undefined;
    return JSON.parse(readFileSync(file, "utf8")) as Credentials;
};

export const loadConfig = (env: NodeJS.ProcessEnv): AppConfig => {
    const dataDir = resolve(env.DATA_DIR ?? "var");
    const origin = env.SITE_ORIGIN ?? "http://localhost:5173";
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
    };
};

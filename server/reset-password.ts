import {createInterface} from "node:readline/promises";
import {resolve} from "node:path";
import {resetCredentials} from "./lib/credentials.ts";
import {createDatabase} from "./lib/db.ts";

const dataDir = resolve(process.env.DATA_DIR ?? "var");
const rl = createInterface({input: process.stdin, output: process.stdout});
const password = process.env.ADMIN_PASSWORD ?? await rl.question("New administrator password: ");
rl.close();
if (!password || password.length < 12) throw new Error("Set ADMIN_PASSWORD to a password of at least 12 characters before running reset.");
resetCredentials(dataDir, password);
const db = createDatabase(dataDir);
db.revokeAllSessions();
db.close();
console.log("Password updated and all sessions revoked. Restart the server to apply.");

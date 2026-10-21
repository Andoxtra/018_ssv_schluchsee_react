import {resolve} from "node:path";
import {createDatabase} from "./lib/db.ts";

const db = createDatabase(resolve(process.env.DATA_DIR ?? "var"));
db.revokeAllSessions();
db.close();
console.log("All administrator sessions revoked.");

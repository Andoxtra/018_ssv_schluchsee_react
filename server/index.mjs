import {resolve} from 'node:path';
import {existsSync, readFileSync} from 'node:fs';
import {createApp} from './app.mjs';
const dataDir=resolve(process.env.DATA_DIR ?? 'var');
const authFile=resolve(dataDir,'admin.json');
const origin=process.env.SITE_ORIGIN ?? 'http://localhost:5173';
const app=createApp({dataDir, origin, localDevelopment:process.env.NODE_ENV !== "production", distDir:resolve('dist'), seedDir:resolve('src/data/news'), credentials:existsSync(authFile)?JSON.parse(readFileSync(authFile,'utf8')):undefined, trustProxy:process.env.TRUST_PROXY === "1", secureCookies:origin.startsWith('https://')});
app.listen(Number(process.env.PORT ?? 3001),process.env.HOST ?? '127.0.0.1',()=>console.log('SSV server listening on port '+(process.env.PORT ?? 3001)));

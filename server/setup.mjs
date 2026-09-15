import {createInterface} from 'node:readline/promises';
import {mkdirSync, writeFileSync, existsSync} from 'node:fs';
import {resolve} from 'node:path';
import {passwordRecord} from './app.mjs';
const dataDir=resolve(process.env.DATA_DIR ?? 'var');
const file=resolve(dataDir,'admin.json');
if (existsSync(file)) throw new Error('Administrator already configured. See the README for password reset instructions.');
const rl=createInterface({input:process.stdin,output:process.stdout});
const username=(process.env.ADMIN_USERNAME ?? await rl.question('Administrator username: ')).trim();
// Supply the password through the environment to avoid terminal echo and shell arguments.
const password=process.env.ADMIN_PASSWORD;
rl.close();
if(!username || !password || password.length<12) throw new Error('Set ADMIN_PASSWORD to a password of at least 12 characters before running setup.');
mkdirSync(dataDir,{recursive:true,mode:0o700});
writeFileSync(file,JSON.stringify({username,...passwordRecord(password)}),{mode:0o600,flag:'wx'});
console.log('Administrator configured. Restart the server to enable login.');

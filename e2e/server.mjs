import {mkdtempSync, rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join, resolve} from 'node:path';
import {createApp, passwordRecord} from '../server/app.mjs';
const dataDir=mkdtempSync(join(tmpdir(),'ssv-browser-test-'));
const server=createApp({dataDir,origin:'http://127.0.0.1:3002',distDir:resolve('dist'),seedDir:resolve('src/data/news'),credentials:{username:'browser-test',...passwordRecord('browser-test-password-only')}});
server.listen(3002,'127.0.0.1');
const stop=()=>server.close(()=>{rmSync(dataDir,{recursive:true,force:true});process.exit(0);});
process.on('SIGTERM',stop);process.on('SIGINT',stop);

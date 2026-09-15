import {DatabaseSync} from 'node:sqlite';
import {resolve} from 'node:path';
const db=new DatabaseSync(resolve(process.env.DATA_DIR ?? 'var','club.sqlite'));
db.exec('DELETE FROM sessions');
db.close();
console.log('All administrator sessions revoked.');

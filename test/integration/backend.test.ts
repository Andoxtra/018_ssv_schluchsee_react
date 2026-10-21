import {afterEach, beforeEach, describe, expect, test} from 'vitest';
import {mkdtempSync, rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join, resolve} from 'node:path';
import type {Server} from 'node:http';
import {createApp} from '../../server/app.ts';
import {passwordRecord} from '../../server/lib/auth.ts';

let server: Server;
let dataDir: string;
let base: string;
let cookie: string;
const origin = 'http://localhost:5173';
const credentials = {username: 'test-admin', ...passwordRecord('test-password-only-123')};
const start = async (options: {localDevelopment?: boolean; origin?: string} = {}) => {
    server = createApp({dataDir, origin, credentials, seedDir: resolve('src/data/news'), ...options});
    await new Promise<void>(resolve => server.listen(0, '127.0.0.1', resolve));
    const address = server.address();
    if (!address || typeof address === 'string') throw new Error('No test port');
    base = `http://127.0.0.1:${address.port}`;
};
const stop = () => new Promise<void>((resolve, reject) => server.close(error => error ? reject(error) : resolve()));
const request = (path: string, method = 'GET', body?: unknown, authenticated = true, requestOrigin = origin) => fetch(base + path, {
    method, headers: {'Content-Type':'application/json', Origin:requestOrigin, ...(authenticated && cookie ? {Cookie:cookie} : {})}, body: body === undefined ? undefined : JSON.stringify(body),
});
const draft = {title:'Testnachricht', date:'2026-09-15', author:'Test', preview:'Kurzbeschreibung', content:'## Test\n\nInhalt', published:false, reviewNote:'', eventDates:[]};
const login = async () => {const response = await request('/api/login','POST',{username:credentials.username,password:'test-password-only-123'},false); expect(response.status).toBe(200); cookie=response.headers.get('set-cookie')!.split(';')[0];};
beforeEach(async () => {dataDir=mkdtempSync(join(tmpdir(),'ssv-api-test-')); cookie=''; await start();});
afterEach(async () => {await stop(); rmSync(dataDir,{recursive:true,force:true});});

describe('persistent club API', () => {
    test('imports the eight Markdown articles once and preserves their IDs', async () => {
        const news = await (await request('/api/news')).json();
        expect(news).toHaveLength(8); expect(new Set(news.map((item: {id:string})=>item.id)).size).toBe(8);
        expect(news.find((item: {id:string})=>item.id==='173').eventDates).toEqual(['2026-07-03','2026-07-04']);
        await stop(); await start(); expect(await (await request('/api/news')).json()).toHaveLength(8);
    });
    test('requires authentication and same-origin mutations', async () => {
        expect((await request('/api/admin/news')).status).toBe(401);
        expect((await request('/api/login','POST',{username:'test-admin',password:'wrong'})).status).toBe(401);
        await login();
        expect((await request('/api/admin/news','POST',draft,true,'https://unrelated.example')).status).toBe(403);
        await request('/api/logout','POST'); expect((await request('/api/admin/messages')).status).toBe(401);
    });
    test('accepts configured local development aliases and the backend address', async () => {
        await stop(); await start({localDevelopment:true});
        for (const address of ['http://localhost:5173', 'http://127.0.0.1:5173', 'http://[::1]:5173', base]) {
            const response = await request('/api/login','POST',{username:credentials.username,password:'test-password-only-123'},false,address);
            expect(response.status, address).toBe(200);
        }
        for (const address of ['http://localhost:9000', 'http://localhost.evil.example:5173', 'https://unrelated.example', 'null']) {
            expect((await request('/api/login','POST',{},false,address)).status).toBe(403);
        }
    });
    test('keeps production restricted to its configured origin', async () => {
        const response=await request('/api/login','POST',{},false,'http://127.0.0.1:5173');
        expect(response.status).toBe(403);
        expect((await response.json()).error).toContain(origin);
        await stop(); await start({origin:'https://club.example.org',localDevelopment:true});
        expect((await request('/api/login','POST',{},false,origin)).status).toBe(403);
    });
    test('uses a trusted Referer only when Origin is absent', async () => {
        const body=JSON.stringify({username:credentials.username,password:'test-password-only-123'});
        const send=(headers: Record<string,string>)=>fetch(base+'/api/login',{method:'POST',headers:{'Content-Type':'application/json',...headers},body});
        expect((await send({Referer:origin+'/admin'})).status).toBe(200);
        expect((await send({Referer:'https://unrelated.example/admin'})).status).toBe(403);
        expect((await send({Origin:'https://unrelated.example',Referer:origin+'/admin'})).status).toBe(403);
        expect((await send({Origin:'null',Referer:origin+'/admin'})).status).toBe(403);
        expect((await send({})).status).toBe(403);
    });
    test('keeps drafts private, publishes, persists edits and rejects stale versions', async () => {
        await login(); const created = await (await request('/api/admin/news','POST',draft)).json();
        expect(created.version).toBe(1);
        expect((await (await request('/api/news')).json()).some((item: {id:string})=>item.id===created.id)).toBe(false);
        expect((await request(`/api/admin/news/${created.id}`,'PUT',{...created,published:true})).status).toBe(200);
        expect((await request(`/api/admin/news/${created.id}`,'PUT',created)).status).toBe(409);
        await stop(); await start();
        expect((await (await request('/api/news')).json()).find((item: {id:string})=>item.id===created.id).content).toBe(draft.content);
        const published = await (await request('/api/admin/news')).json();
        const current = published.find((item: {id:string})=>item.id===created.id);
        await request(`/api/admin/news/${created.id}`,'PUT',{...current,published:false});
        expect((await (await request('/api/news')).json()).some((item: {id:string})=>item.id===created.id)).toBe(false);
    });
    test('deletes articles and rejects unknown ids', async () => {
        await login();
        const created = await (await request('/api/admin/news','POST',draft)).json();
        expect((await request(`/api/admin/news/${created.id}`,'DELETE')).status).toBe(200);
        expect((await request(`/api/admin/news/${created.id}`,'DELETE')).status).toBe(404);
        expect((await (await request('/api/admin/news')).json()).some((item: {id:string})=>item.id===created.id)).toBe(false);
    });
    test('validates article dates, body sizes, and malformed input', async () => {
        await login();
        expect((await request('/api/admin/news','POST',{...draft,date:'2026-02-30'})).status).toBe(400);
        expect((await request('/api/admin/news','POST',null)).status).toBe(400);
        expect((await request('/api/admin/news','POST',{...draft,content:'x'.repeat(160000)})).status).toBe(413);
    });
    test('stores messages privately, persists read state and supports deletion', async () => {
        const body={name:'Test',email:'test@example.com',subject:'Besuch',message:'Testanfrage',consent:true};
        expect((await request('/api/contact','POST',{...body,consent:false},false)).status).toBe(400);
        const response=await request('/api/contact','POST',body,false); expect(response.status).toBe(201);
        const {id}=await response.json(); expect((await request('/api/admin/messages','GET',undefined,false)).status).toBe(401);
        await login(); await request(`/api/admin/messages/${id}`,'PATCH',{read:true});
        await stop(); await start();
        expect((await (await request('/api/admin/messages')).json())[0]).toMatchObject({id,read:true,message:'Testanfrage'});
        expect((await request(`/api/admin/messages/${id}`,'DELETE')).status).toBe(200);
        expect(await (await request('/api/admin/messages')).json()).toEqual([]);
    });
    test('requires authentication for uploads and rejects executable formats', async () => {
        const svg=Buffer.from('<svg onload="alert(1)"></svg>').toString('base64');
        expect((await request('/api/admin/uploads','POST',{data:svg},false)).status).toBe(401);
        await login(); expect((await request('/api/admin/uploads','POST',{data:svg})).status).toBe(415);
        const png='iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+jB1kAAAAASUVORK5CYII=';
        const response=await request('/api/admin/uploads','POST',{data:png}); expect(response.status).toBe(201);
        const {url}=await response.json(); const image=await request(url); expect(image.headers.get('content-type')).toBe('image/png');
        expect(Buffer.from(await image.arrayBuffer()).toString('base64')).toBe(png);
    });
    test('rate limits repeated login failures', async () => {
        for(let i=0;i<10;i++) await request('/api/login','POST',{username:'test-admin',password:'wrong'},false);
        expect((await request('/api/login','POST',{username:'test-admin',password:'wrong'},false)).status).toBe(429);
    });
});

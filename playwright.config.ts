import {defineConfig} from '@playwright/test';
export default defineConfig({
    testDir:'./e2e',
    fullyParallel:false,
    workers:1,
    use:{baseURL:'http://127.0.0.1:3002',trace:'retain-on-failure'},
    webServer:{command:'node e2e/server.mjs',url:'http://127.0.0.1:3002/api/news',reuseExistingServer:false},
});

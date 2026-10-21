import {createApp} from "./app.ts";
import {loadConfig} from "./config.ts";

const config = loadConfig(process.env);
const app = createApp(config);
app.listen(config.port, config.host, () => console.log(`SSV server listening on port ${config.port}`));

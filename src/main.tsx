import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import Router from "./sites/Router.tsx";
import {ConfigProvider} from "antd";
import BaseTheme from "./style/general/BaseTheme.ts";
import {antdLocales} from "./config/translations/antdLocales.ts";
import "./index.css";

createRoot(document.getElementById('root')!).render(
    <ConfigProvider theme={BaseTheme} locale={antdLocales}>
    <StrictMode>
        <Router/>
    </StrictMode>
    </ConfigProvider>
);

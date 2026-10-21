import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import Router from "./sites/Router.tsx";
import {ConfigProvider} from "antd";
import BaseTheme from "./style/general/BaseTheme.ts";
import {antdLocals} from "./config/translations/antdLocals.ts";
import "./index.css";

createRoot(document.getElementById('root')!).render(
    <ConfigProvider theme={BaseTheme} locale={antdLocals}>
    <StrictMode>
        <Router/>
    </StrictMode>
    </ConfigProvider>
);

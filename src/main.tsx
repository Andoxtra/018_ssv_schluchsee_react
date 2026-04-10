import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import Router from "./sites/Router.tsx";
import {ConfigProvider} from "antd";
import BaseTheme from "./style/general/BaseTheme.ts";

createRoot(document.getElementById('root')!).render(
    <ConfigProvider theme={BaseTheme}>
    <StrictMode>
        <Router/>
    </StrictMode>
    </ConfigProvider>
);

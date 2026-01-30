import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import Router from "./sites/Router.tsx";

import "./style/index.ts";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Router/>
    </StrictMode>
);

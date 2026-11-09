import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import Router from "./sites/Router.tsx";
import {antdLocales} from "./config/translations/antdLocales.ts";
import {themeStylesheet} from "./config/palette.ts";
import ThemeProvider from "./logic/theme/ThemeProvider.tsx";
import "./index.css";

// Light and dark colour variables, generated from the palette (the single source).
const themeStyle = document.createElement("style");
themeStyle.id = "theme-variables";
themeStyle.textContent = themeStylesheet();
document.head.prepend(themeStyle);

createRoot(document.getElementById('root')!).render(
    <ThemeProvider locale={antdLocales}>
    <StrictMode>
        <Router/>
    </StrictMode>
    </ThemeProvider>
);

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import Router from "./sites/Router.tsx";

const {
    BaseStyleS,
    BaseStyleM,
    BaseStyleL,
    BaseStyleE
} = BaseStyle;

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Router style={getDynamicStyling(BaseStyleS, BaseStyleM, BaseStyleL, BaseStyleE)}/>
    </StrictMode>
);

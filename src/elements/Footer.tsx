import type {ReactNode} from "react";

import getDynamicStyle from "../logic/dynamicStyling/getDynamicStyle.ts";

import FooterStyle from "../style/elements/footer/FooterStyle.ts";


const {
    FooterS,
    FooterM,
    FooterL,
    FooterE
} = FooterStyle;

const Footer = () : ReactNode => {
    return (
        <footer style={getDynamicStyle(FooterS, FooterM, FooterL, FooterE)}>

        </footer>
    );
};

export default Footer;

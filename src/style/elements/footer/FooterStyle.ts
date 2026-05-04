import type {CSSProperties} from "react";
import colorConfig from "../../../config/colorConfig.ts";

const FooterGeneral: CSSProperties = {
    background: "linear-gradient(180deg, #0d2215 0%, #143620 100%)",
    color: colorConfig.white,
    padding: "48px 24px 24px",
    marginTop: 60,
};

const FooterS: CSSProperties = {
    ...FooterGeneral,
    padding: "32px 16px 20px",
    marginTop: 40,
};

const FooterM: CSSProperties = {
    ...FooterGeneral,
    padding: "40px 20px 24px",
}

const FooterL: CSSProperties = {
    ...FooterGeneral,
    padding: "48px 28px 24px",
}

const FooterE: CSSProperties = {
    ...FooterGeneral,
    padding: "60px 32px 24px",
}

const FooterStyle = {FooterS, FooterM, FooterL, FooterE};

export default FooterStyle;
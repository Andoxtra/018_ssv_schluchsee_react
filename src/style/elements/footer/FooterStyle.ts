import type {CSSProperties} from "react";
import BaseStyle from "../../general/BaseStyle.ts";


const FooterS: CSSProperties = {
    ...BaseStyle.BaseStyleS
};

const FooterM: CSSProperties = {
    ...BaseStyle.BaseStyleM
}

const FooterL: CSSProperties = {
    ...BaseStyle.BaseStyleL
}

const FooterE: CSSProperties = {
    ...BaseStyle.BaseStyleE
}

const FooterStyle = {FooterS, FooterM, FooterL, FooterE};

export default FooterStyle;
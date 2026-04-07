import type {CSSProperties} from "react";
import BaseStyle from "../../general/BaseStyle.ts";


const BodyS: CSSProperties = {
    ...BaseStyle.BaseStyleS
};

const BodyM: CSSProperties = {
    ...BaseStyle.BaseStyleM
}

const BodyL: CSSProperties = {
    ...BaseStyle.BaseStyleL
}

const BodyE: CSSProperties = {
    ...BaseStyle.BaseStyleE
}

const BodyStyle = {BodyS, BodyM, BodyL, BodyE};

export default BodyStyle;
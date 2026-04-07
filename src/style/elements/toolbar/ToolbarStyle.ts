import type {CSSProperties} from "react";
import BaseStyle from "../../general/BaseStyle.ts";


const ToolbarS: CSSProperties = {
    ...BaseStyle.BaseStyleS
};

const ToolbarM: CSSProperties = {
    ...BaseStyle.BaseStyleM
}

const ToolbarL: CSSProperties = {
    ...BaseStyle.BaseStyleL
}

const ToolbarE: CSSProperties = {
    ...BaseStyle.BaseStyleE
}

const ToolbarStyle = {ToolbarS, ToolbarM, ToolbarL, ToolbarE};

export default ToolbarStyle;
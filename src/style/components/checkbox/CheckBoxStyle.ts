import type {CSSProperties} from "react";
import colorConfig from "../../../config/colorConfig.ts";

const CheckBoxGeneralStyle: CSSProperties = {
    fontSize: 14,
    color: colorConfig.primary,
    margin: 4,
};

const CheckBoxStyleS: CSSProperties = {
    ...CheckBoxGeneralStyle,
    fontSize: 12,
};

const CheckBoxStyleM: CSSProperties = {
    ...CheckBoxGeneralStyle,
    fontSize: 13,
};

const CheckBoxStyleL: CSSProperties = {
    ...CheckBoxGeneralStyle,
    fontSize: 14,
};

const CheckBoxStyleE: CSSProperties = {
    ...CheckBoxGeneralStyle,
    fontSize: 15,
};

const CheckBoxStyle = {CheckBoxStyleS, CheckBoxStyleM, CheckBoxStyleL, CheckBoxStyleE};

export default CheckBoxStyle;


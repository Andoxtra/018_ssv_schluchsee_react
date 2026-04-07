import type {CSSProperties} from "react";
import colorConfig from "../../../config/colorConfig.ts";

const RadioGroupGeneralStyle: CSSProperties = {
    fontSize: 14,
    color: colorConfig.primary,
    display: "flex",
    gap: 16,
    flexWrap: "wrap",
};

const RadioGroupStyleS: CSSProperties = {
    ...RadioGroupGeneralStyle,
    fontSize: 12,
    gap: 12,
};

const RadioGroupStyleM: CSSProperties = {
    ...RadioGroupGeneralStyle,
    fontSize: 13,
    gap: 14,
};

const RadioGroupStyleL: CSSProperties = {
    ...RadioGroupGeneralStyle,
    fontSize: 14,
    gap: 16,
};

const RadioGroupStyleE: CSSProperties = {
    ...RadioGroupGeneralStyle,
    fontSize: 15,
    gap: 18,
};

const RadioGroupStyle = {RadioGroupStyleS, RadioGroupStyleM, RadioGroupStyleL, RadioGroupStyleE};

export default RadioGroupStyle;


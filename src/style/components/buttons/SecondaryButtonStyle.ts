import type {CSSProperties} from "react";
import GeneralButtonStyle from "./GeneralButtonStyle.ts";
import colorConfig from "../../../config/colorConfig.ts";

const GeneralSecondaryButtonStyle: CSSProperties = {
    ...GeneralButtonStyle,
    backgroundColor: colorConfig.tertiary,
    color: colorConfig.primary
};

const SecondaryButtonStyleS: CSSProperties = {
    ...GeneralSecondaryButtonStyle,
};

const SecondaryButtonStyleM: CSSProperties = {
    ...GeneralSecondaryButtonStyle,
};

const SecondaryButtonStyleL: CSSProperties = {
    ...GeneralSecondaryButtonStyle,
};

const SecondaryButtonStyleE: CSSProperties = {
    ...GeneralSecondaryButtonStyle,
};

const SecondaryButtonStyle = {SecondaryButtonStyleS, SecondaryButtonStyleM, SecondaryButtonStyleL, SecondaryButtonStyleE};

export default SecondaryButtonStyle;

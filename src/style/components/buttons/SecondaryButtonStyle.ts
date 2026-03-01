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
    height: 40,
    paddingInline: 14
};

const SecondaryButtonStyleM: CSSProperties = {
    ...GeneralSecondaryButtonStyle,
    height: 44,
    paddingInline: 18
};

const SecondaryButtonStyleL: CSSProperties = {
    ...GeneralSecondaryButtonStyle,
    height: 48,
    paddingInline: 22
};

const SecondaryButtonStyleE: CSSProperties = {
    ...GeneralSecondaryButtonStyle,
    height: 52,
    paddingInline: 26
};

const SecondaryButtonStyle = {SecondaryButtonStyleS, SecondaryButtonStyleM, SecondaryButtonStyleL, SecondaryButtonStyleE};

export default SecondaryButtonStyle;

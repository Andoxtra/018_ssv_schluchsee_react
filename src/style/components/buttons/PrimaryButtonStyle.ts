import type {CSSProperties} from "react";
import GeneralButtonStyle from "./GeneralButtonStyle.ts";
import colorConfig from "../../../config/colorConfig.ts";

const GeneralPrimaryButtonStyle: CSSProperties = {
    ...GeneralButtonStyle,
    backgroundColor: colorConfig.primary,
    color: colorConfig.secondary,
};

const PrimaryButtonStyleS: CSSProperties = {
    ...GeneralPrimaryButtonStyle,
    height: 40,
    paddingInline: 14
};

const PrimaryButtonStyleM: CSSProperties = {
    ...GeneralPrimaryButtonStyle,
    height: 44,
    paddingInline: 18
};

const PrimaryButtonStyleL: CSSProperties = {
    ...GeneralPrimaryButtonStyle,
    height: 48,
    paddingInline: 22
};

const PrimaryButtonStyleE: CSSProperties = {
    ...GeneralPrimaryButtonStyle,
    height: 52,
    paddingInline: 26
};

const PrimaryButtonStyle = {PrimaryButtonStyleS, PrimaryButtonStyleM, PrimaryButtonStyleL, PrimaryButtonStyleE};

export default PrimaryButtonStyle;
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
};

const PrimaryButtonStyleM: CSSProperties = {
    ...GeneralPrimaryButtonStyle,
};

const PrimaryButtonStyleL: CSSProperties = {
    ...GeneralPrimaryButtonStyle,
};

const PrimaryButtonStyleE: CSSProperties = {
    ...GeneralPrimaryButtonStyle,
};

const PrimaryButtonStyle = {PrimaryButtonStyleS, PrimaryButtonStyleM, PrimaryButtonStyleL, PrimaryButtonStyleE};

export default PrimaryButtonStyle;
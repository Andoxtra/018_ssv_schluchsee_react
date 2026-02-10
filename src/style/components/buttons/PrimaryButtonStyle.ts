import type {CSSProperties} from "react";
import GeneralButtonStyle from "./GeneralButtonStyle.ts";
import colorConfig from "../../../config/colorConfig.ts";

const PrimaryButtonStyle: CSSProperties = {
    ...GeneralButtonStyle,
    backgroundColor: colorConfig.primary,
    color: colorConfig.secondary,
};


export default PrimaryButtonStyle;
import type {CSSProperties} from "react";
import GeneralButtonStyle from "./GeneralButtonStyle.ts";
import colorConfig from "../../../config/colorConfig.ts";

const SecondaryButtonStyle: CSSProperties = {
    ...GeneralButtonStyle,
    backgroundColor: colorConfig.tertiary,
    color: colorConfig.primary,
};


export default SecondaryButtonStyle;
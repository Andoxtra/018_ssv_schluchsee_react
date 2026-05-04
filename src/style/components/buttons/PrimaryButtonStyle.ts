import type {CSSProperties} from "react";
import GeneralButtonStyle from "./GeneralButtonStyle.ts";
import colorConfig from "../../../config/colorConfig.ts";

const GeneralPrimaryButtonStyle: CSSProperties = {
    ...GeneralButtonStyle,
    backgroundColor: colorConfig.primary,
    color: colorConfig.white,
    borderRadius: 6,
    fontWeight: 600,
    transition: "all 0.3s ease",
};

const PrimaryButtonStyleS: CSSProperties = {
    ...GeneralPrimaryButtonStyle,
    height: 36,
    paddingInline: 14
};

const PrimaryButtonStyleM: CSSProperties = {
    ...GeneralPrimaryButtonStyle,
    height: 40,
    paddingInline: 18
};

const PrimaryButtonStyleL: CSSProperties = {
    ...GeneralPrimaryButtonStyle,
    height: 44,
    paddingInline: 22
};

const PrimaryButtonStyleE: CSSProperties = {
    ...GeneralPrimaryButtonStyle,
    height: 48,
    paddingInline: 26
};

const PrimaryButtonStyle = {PrimaryButtonStyleS, PrimaryButtonStyleM, PrimaryButtonStyleL, PrimaryButtonStyleE};

export default PrimaryButtonStyle;
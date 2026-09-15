import type {CSSProperties} from "react";
import GeneralButtonStyle from "./GeneralButtonStyle.ts";

const GeneralSecondaryButtonStyle: CSSProperties = {
    ...GeneralButtonStyle,
    borderRadius: 6,
    fontWeight: 500,
    transition: "all 0.3s ease",
};

const SecondaryButtonStyleS: CSSProperties = {
    ...GeneralSecondaryButtonStyle,
    height: 36,
    paddingInline: 14,
    fontSize: 12,
};

const SecondaryButtonStyleM: CSSProperties = {
    ...GeneralSecondaryButtonStyle,
    height: 40,
    paddingInline: 18,
    fontSize: 13,
};

const SecondaryButtonStyleL: CSSProperties = {
    ...GeneralSecondaryButtonStyle,
    height: 44,
    paddingInline: 22,
    fontSize: 14,
};

const SecondaryButtonStyleE: CSSProperties = {
    ...GeneralSecondaryButtonStyle,
    height: 48,
    paddingInline: 26,
    fontSize: 15,
};

const SecondaryButtonStyle = {SecondaryButtonStyleS, SecondaryButtonStyleM, SecondaryButtonStyleL, SecondaryButtonStyleE};

export default SecondaryButtonStyle;
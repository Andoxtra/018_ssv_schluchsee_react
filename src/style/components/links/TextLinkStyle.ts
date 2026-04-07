import type {CSSProperties} from "react";
import colorConfig from "../../../config/colorConfig.ts";

const TextLinkGeneralStyle: CSSProperties = {
    fontSize: 14,
    color: colorConfig.primary,
    textDecoration: "none",
    fontWeight: 500,
    transition: "all 0.3s ease",
    cursor: "pointer",
    borderBottom: `2px solid transparent`,
    paddingBottom: 2,
};

const TextLinkStyleS: CSSProperties = {
    ...TextLinkGeneralStyle,
    fontSize: 12,
};

const TextLinkStyleM: CSSProperties = {
    ...TextLinkGeneralStyle,
    fontSize: 13,
};

const TextLinkStyleL: CSSProperties = {
    ...TextLinkGeneralStyle,
    fontSize: 14,
};

const TextLinkStyleE: CSSProperties = {
    ...TextLinkGeneralStyle,
    fontSize: 15,
};

const TextLinkStyle = {TextLinkStyleS, TextLinkStyleM, TextLinkStyleL, TextLinkStyleE};

export default TextLinkStyle;


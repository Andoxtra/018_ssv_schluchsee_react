import type {CSSProperties} from "react";
import colorConfig from "../../../config/colorConfig.ts";

const HeadingGeneralStyle: CSSProperties = {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: colorConfig.primary,
    fontWeight: 600,
    marginTop: 16,
    marginBottom: 12,
    lineHeight: 1.35,
};

const H1Style: CSSProperties = {
    ...HeadingGeneralStyle,
    fontSize: 32,
    fontWeight: 700,
    marginTop: 24,
    marginBottom: 16,
};

const H2Style: CSSProperties = {
    ...HeadingGeneralStyle,
    fontSize: 28,
    fontWeight: 700,
};

const H3Style: CSSProperties = {
    ...HeadingGeneralStyle,
    fontSize: 24,
    fontWeight: 600,
};

const H4Style: CSSProperties = {
    ...HeadingGeneralStyle,
    fontSize: 20,
    fontWeight: 600,
};

const H5Style: CSSProperties = {
    ...HeadingGeneralStyle,
    fontSize: 16,
    fontWeight: 600,
};

const H6Style: CSSProperties = {
    ...HeadingGeneralStyle,
    fontSize: 14,
    fontWeight: 600,
};

const HeadingStyle = {H1Style, H2Style, H3Style, H4Style, H5Style, H6Style};

export default HeadingStyle;


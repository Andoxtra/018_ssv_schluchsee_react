import type {CSSProperties} from "react";
import colorConfig from "../../../config/colorConfig.ts";

const ParagraphGeneralStyle: CSSProperties = {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    fontSize: 14,
    color: colorConfig.primary,
    lineHeight: 1.6,
    marginBottom: 12,
    marginTop: 4,
};

const ParagraphStyleS: CSSProperties = {
    ...ParagraphGeneralStyle,
    fontSize: 12,
};

const ParagraphStyleM: CSSProperties = {
    ...ParagraphGeneralStyle,
    fontSize: 13,
};

const ParagraphStyleL: CSSProperties = {
    ...ParagraphGeneralStyle,
    fontSize: 14,
};

const ParagraphStyleE: CSSProperties = {
    ...ParagraphGeneralStyle,
    fontSize: 15,
};

const ParagraphStyle = {ParagraphStyleS, ParagraphStyleM, ParagraphStyleL, ParagraphStyleE};

export default ParagraphStyle;


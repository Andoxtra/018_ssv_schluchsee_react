import type {CSSProperties} from "react";
import colorConfig from "../../../config/colorConfig.ts";

const GeneralInputStyle: CSSProperties = {
    fontSize: 14,
    borderRadius: 6,
    border: `1px solid ${colorConfig.primary}`,
    padding: "8px 12px",
    transition: "all 0.3s ease",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
};

const BaseInputStyleS: CSSProperties = {
    ...GeneralInputStyle,
    height: 32,
    fontSize: 12,
};

const BaseInputStyleM: CSSProperties = {
    ...GeneralInputStyle,
    height: 36,
    fontSize: 13,
};

const BaseInputStyleL: CSSProperties = {
    ...GeneralInputStyle,
    height: 40,
    fontSize: 14,
};

const BaseInputStyleE: CSSProperties = {
    ...GeneralInputStyle,
    height: 44,
    fontSize: 15,
};

const BaseInputStyle = {BaseInputStyleS, BaseInputStyleM, BaseInputStyleL, BaseInputStyleE};

export default BaseInputStyle;


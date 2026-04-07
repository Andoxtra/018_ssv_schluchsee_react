import type {CSSProperties} from "react";
import colorConfig from "../../../config/colorConfig.ts";

const DropdownGeneralStyle: CSSProperties = {
    fontSize: 14,
    color: colorConfig.primary,
    borderRadius: 6,
    border: `2px solid ${colorConfig.tertiary}`,
    transition: "all 0.3s ease",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
};

const DropdownStyleS: CSSProperties = {
    ...DropdownGeneralStyle,
    height: 32,
    fontSize: 12,
};

const DropdownStyleM: CSSProperties = {
    ...DropdownGeneralStyle,
    height: 36,
    fontSize: 13,
};

const DropdownStyleL: CSSProperties = {
    ...DropdownGeneralStyle,
    height: 40,
    fontSize: 14,
};

const DropdownStyleE: CSSProperties = {
    ...DropdownGeneralStyle,
    height: 44,
    fontSize: 15,
};

const DropdownStyle = {DropdownStyleS, DropdownStyleM, DropdownStyleL, DropdownStyleE};

export default DropdownStyle;


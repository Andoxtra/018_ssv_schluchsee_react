import type { CSSProperties } from "react";
import colorConfig from "../../../config/colorConfig";

const TableGeneralStyle: CSSProperties = {
    fontSize: 14,
    color: colorConfig.primary,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 12,
};

// Size variants
const TableStyleS: CSSProperties = {
    ...TableGeneralStyle,
    fontSize: 12,
    gap: 10,
};

const TableStyleM: CSSProperties = {
    ...TableGeneralStyle,
    fontSize: 13,
    gap: 12,
};

const TableStyleL: CSSProperties = {
    ...TableGeneralStyle,
    fontSize: 14,
    gap: 14,
};

const TableStyleE: CSSProperties = {
    ...TableGeneralStyle,
    fontSize: 15,
    gap: 16,
};

const TableStyle = {
    TableStyleS,
    TableStyleM,
    TableStyleL,
    TableStyleE
};

export default TableStyle;

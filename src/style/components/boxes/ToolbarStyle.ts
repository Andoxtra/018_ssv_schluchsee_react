import type {CSSProperties} from "react";
import colorConfig from "../../../config/colorConfig.ts";

const ToolbarGeneral: CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    background: "rgba(255, 255, 255, 0.97)",
    backdropFilter: "blur(12px)",
    borderBottom: `1px solid ${colorConfig.border}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 32px",
    height: 68,
    boxShadow: "0 1px 4px rgba(0, 0, 0, 0.04)",
};

const ToolbarS: CSSProperties = {
    ...ToolbarGeneral,
    padding: "0 16px",
    height: 64,
};

const ToolbarM: CSSProperties = {
    ...ToolbarGeneral,
    padding: "0 20px",
    height: 64,
}

const ToolbarL: CSSProperties = {
    ...ToolbarGeneral,
    padding: "0 28px",
}

const ToolbarE: CSSProperties = {
    ...ToolbarGeneral,
    padding: "0 32px",
}

const ToolbarStyle = {ToolbarS, ToolbarM, ToolbarL, ToolbarE};

export default ToolbarStyle;
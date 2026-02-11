import  {type ReactNode} from "react";

import getDynamicStyle from "../../logic/dynamicStyling/getDynamicStyle.ts";

import ToolbarStyle from "../../style/elements/toolbar/ToolbarStyle.ts";


type ToolbarProps = {
    children: ReactNode;
};

const {
    ToolbarS,
    ToolbarM,
    ToolbarL,
    ToolbarE
} = ToolbarStyle;

export const Toolbar = ({ children } : ToolbarProps) : ReactNode => {
    return (
        <div style={getDynamicStyle(ToolbarS, ToolbarM, ToolbarL, ToolbarE)}>
            { children }
        </div>
    );
};

export default Toolbar;
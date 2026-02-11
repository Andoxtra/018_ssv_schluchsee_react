import type {ReactNode} from "react";

import getDynamicStyle from "../logic/dynamicStyling/getDynamicStyle.ts";

import BodyStyle from "../style/elements/body/BodyStyle.ts";


type BodyProps = {
    children: ReactNode;
};

const {
    BodyS,
    BodyM,
    BodyL,
    BodyE
} = BodyStyle;

const Body = ({children} : BodyProps) : ReactNode => {
    return (
        <div style={getDynamicStyle(BodyS, BodyM, BodyL, BodyE)}>
            {children}
        </div>
    );
};

export default Body;

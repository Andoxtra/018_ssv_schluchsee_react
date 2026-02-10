import type {CSSProperties} from "react";
import GeneralIconStyle from "./GeneralIconStyle.ts";

const SmallIconS: CSSProperties = {
    ...GeneralIconStyle,
    width: "16px",
    height: "16px"
};

const SmallIconM: CSSProperties = {
    ...GeneralIconStyle,
    width: "20px",
    height: "20px"
}

const SmallIconL: CSSProperties = {
    ...GeneralIconStyle,
    width: "24px",
    height: "24px",
}

const SmallIconE: CSSProperties = {
    ...GeneralIconStyle,
    width: "28px",
    height: "28px"
}

const SmallIconStyle = {SmallIconS, SmallIconM, SmallIconL, SmallIconE};

export default SmallIconStyle;
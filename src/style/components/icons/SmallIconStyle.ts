import type {CSSProperties} from "react";
import GeneralIconStyle from "./GeneralIconStyle.ts";

const smallIconS: CSSProperties = {
    ...GeneralIconStyle,
    width: "16px",
    height: "16px"
};

const smallIconM: CSSProperties = {
    ...GeneralIconStyle,
    width: "20px",
    height: "20px"
}

const smallIconL: CSSProperties = {
    ...GeneralIconStyle,
    width: "24px",
    height: "24px",
}

const smallIconE: CSSProperties = {
    ...GeneralIconStyle,
    width: "28px",
    height: "28px"
}

const SmallIconStyle = {smallIconS, smallIconM, smallIconL, smallIconE};

export default SmallIconStyle;
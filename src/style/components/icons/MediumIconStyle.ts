import type {CSSProperties} from "react";
import GeneralIconStyle from "./GeneralIconStyle.ts";

const mediumIconS: CSSProperties = {
    ...GeneralIconStyle,
    width: "24px",
    height: "24px"
};

const mediumIconM: CSSProperties = {
    ...GeneralIconStyle,
    width: "28px",
    height: "28px"
}

const mediumIconL: CSSProperties = {
    ...GeneralIconStyle,
    width: "32px",
    height: "32px",
}

const mediumIconE: CSSProperties = {
    ...GeneralIconStyle,
    width: "36px",
    height: "36px"
}

const MediumIconStyle = {mediumIconS, mediumIconM, mediumIconL, mediumIconE};

export default MediumIconStyle;
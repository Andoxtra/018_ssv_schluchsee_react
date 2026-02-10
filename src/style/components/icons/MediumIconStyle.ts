import type {CSSProperties} from "react";
import GeneralIconStyle from "./GeneralIconStyle.ts";

const MediumIconS: CSSProperties = {
    ...GeneralIconStyle,
    width: "24px",
    height: "24px"
};

const MediumIconM: CSSProperties = {
    ...GeneralIconStyle,
    width: "28px",
    height: "28px"
}

const MediumIconL: CSSProperties = {
    ...GeneralIconStyle,
    width: "32px",
    height: "32px",
}

const MediumIconE: CSSProperties = {
    ...GeneralIconStyle,
    width: "36px",
    height: "36px"
}

const MediumIconStyle = {MediumIconS, MediumIconM, MediumIconL, MediumIconE};

export default MediumIconStyle;
import type {CSSProperties} from "react";
import GeneralIconStyle from "./GeneralIconStyle.ts";

const LargeIconS: CSSProperties = {
    ...GeneralIconStyle,
    width: "32px",
    height: "32px"
};

const LargeIconM: CSSProperties = {
    ...GeneralIconStyle,
    width: "40px",
    height: "40px"
}

const LargeIconL: CSSProperties = {
    ...GeneralIconStyle,
    width: "48px",
    height: "48px",
}

const LargeIconE: CSSProperties = {
    ...GeneralIconStyle,
    width: "56px",
    height: "56px"
}

const LargeIconStyle = {LargeIconS, LargeIconM, LargeIconL, LargeIconE};

export default LargeIconStyle;
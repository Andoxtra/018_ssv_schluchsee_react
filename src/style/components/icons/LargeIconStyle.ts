import type {CSSProperties} from "react";
import GeneralIconStyle from "./GeneralIconStyle.ts";

const largeIconS: CSSProperties = {
    ...GeneralIconStyle,
    width: "32px",
    height: "32px"
};

const largeIconM: CSSProperties = {
    ...GeneralIconStyle,
    width: "40px",
    height: "40px"
}

const largeIconL: CSSProperties = {
    ...GeneralIconStyle,
    width: "48px",
    height: "48px",
}

const largeIconE: CSSProperties = {
    ...GeneralIconStyle,
    width: "56px",
    height: "56px"
}

const LargeIconStyle = {largeIconS, largeIconM, largeIconL, largeIconE};

export default LargeIconStyle;
import type {CSSProperties} from "react";
import GeneralImageStyle from "./GeneralImageStyle.ts";

const MediumImageS: CSSProperties = {
    ...GeneralImageStyle,
    maxWidth: 320,
    minWidth: 320,
    aspectRatio: "4 / 3"
};

const MediumImageM: CSSProperties = {
    ...GeneralImageStyle,
    maxWidth: 400,
    minWidth: 400,
    aspectRatio: "4 / 3"
}

const MediumImageL: CSSProperties = {
    ...GeneralImageStyle,
    maxWidth: 480,
    minWidth: 480,
    aspectRatio: "4 / 3"
}

const MediumImageE: CSSProperties = {
    ...GeneralImageStyle,
    maxWidth: 560,
    minWidth: 560,
    aspectRatio: "4 / 3"
}

const MediumImageStyle = {MediumImageS, MediumImageM, MediumImageL, MediumImageE};

export default MediumImageStyle;
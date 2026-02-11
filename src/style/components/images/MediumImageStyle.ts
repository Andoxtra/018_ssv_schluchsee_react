import type {CSSProperties} from "react";
import GeneralImageStyle from "./GeneralImageStyle.ts";

const MediumImageS: CSSProperties = {
    ...GeneralImageStyle,
    maxWidth: 320,
    aspectRatio: "4 / 3"
};

const MediumImageM: CSSProperties = {
    ...GeneralImageStyle,
    maxWidth: 400,
    aspectRatio: "4 / 3"
}

const MediumImageL: CSSProperties = {
    ...GeneralImageStyle,
    maxWidth: 480,
    aspectRatio: "4 / 3"
}

const MediumImageE: CSSProperties = {
    ...GeneralImageStyle,
    maxWidth: 560,
    aspectRatio: "4 / 3"
}

const MediumImageStyle = {MediumImageS, MediumImageM, MediumImageL, MediumImageE};

export default MediumImageStyle;
import type {CSSProperties} from "react";
import GeneralImageStyle from "./GeneralImageStyle.ts";

const SmallImageS: CSSProperties = {
    ...GeneralImageStyle,
    maxWidth: 96,
    minWidth: 96,
    aspectRatio: "1 / 1"
};

const SmallImageM: CSSProperties = {
    ...GeneralImageStyle,
    maxWidth: 112,
    minWidth: 112,
    aspectRatio: "1 / 1"
}

const SmallImageL: CSSProperties = {
    ...GeneralImageStyle,
    maxWidth: 128,
    minWidth: 128,
    aspectRatio: "1 / 1"
}

const SmallImageE: CSSProperties = {
    ...GeneralImageStyle,
    maxWidth: 144,
    minWidth: 144,
    aspectRatio: "1 / 1"
}

const SmallImageStyle = {SmallImageS, SmallImageM, SmallImageL, SmallImageE};

export default SmallImageStyle;
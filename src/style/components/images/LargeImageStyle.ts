import type {CSSProperties} from "react";

import GeneralImageStyle from "./GeneralImageStyle.ts";


const LargeImageS: CSSProperties = {
    ...GeneralImageStyle,
    maxWidth: "100%",
    minWidth: "100%",
    aspectRatio: "16 / 9",
};

const LargeImageM: CSSProperties = {
    ...GeneralImageStyle,
    maxWidth: 720,
    minWidth: 720,
    aspectRatio: "16 / 9",
}

const LargeImageL: CSSProperties = {
    ...GeneralImageStyle,
    maxWidth: 960,
    minWidth: 960,
    aspectRatio: "16 / 9"
}

const LargeImageE: CSSProperties = {
    ...GeneralImageStyle,
    maxWidth: 1200,
    minWidth: 1200,
    aspectRatio: "16 / 9",
}

const LargeImageStyle = {LargeImageS, LargeImageM, LargeImageL, LargeImageE};

export default LargeImageStyle;
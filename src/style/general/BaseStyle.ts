import type {CSSProperties} from "react";

const GeneralBaseStyle: CSSProperties = {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
};

const BaseStyleS: CSSProperties = {
    ...GeneralBaseStyle,
};

const BaseStyleM: CSSProperties = {
    ...GeneralBaseStyle,
}

const BaseStyleL: CSSProperties = {
    ...GeneralBaseStyle,
}

const BaseStyleE: CSSProperties = {
    ...GeneralBaseStyle,
}

const BaseStyle = {BaseStyleS, BaseStyleM, BaseStyleL, BaseStyleE};

export default BaseStyle;
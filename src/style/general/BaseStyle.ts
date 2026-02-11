import type {CSSProperties} from "react";

const GeneralBaseStyle: CSSProperties = {

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
import type {CSSProperties} from "react";

const BodyGeneral: CSSProperties = {
    paddingTop: 92,
    minHeight: "80vh",
};

const BodyS: CSSProperties = {
    ...BodyGeneral,
    padding: "76px 12px 32px",
};

const BodyM: CSSProperties = {
    ...BodyGeneral,
    padding: "80px 16px 36px",
    maxWidth: 720,
    marginLeft: "auto",
    marginRight: "auto",
}

const BodyL: CSSProperties = {
    ...BodyGeneral,
    padding: "84px 24px 40px",
    maxWidth: 960,
    marginLeft: "auto",
    marginRight: "auto",
}

const BodyE: CSSProperties = {
    ...BodyGeneral,
    padding: "92px 32px 48px",
    maxWidth: 1200,
    marginLeft: "auto",
    marginRight: "auto",
}

const BodyStyle = {BodyS, BodyM, BodyL, BodyE};

export default BodyStyle;
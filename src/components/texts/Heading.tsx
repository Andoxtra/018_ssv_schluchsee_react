import type {ReactNode} from "react";
import TextStyle from "../../style/components/texts/TextStyle.ts";
import {Typography} from "antd";

type HeadingProps = {
    level: 1 | 2 | 3 | 4 | 5;
    children: ReactNode;
};

const {
    TextGeneralStyle
} = TextStyle;

const Heading = ({level, children}: HeadingProps): ReactNode => {

    return (
        <Typography.Title level={level} style={TextGeneralStyle}>
            {children}
        </Typography.Title>
    );
};

export default Heading;



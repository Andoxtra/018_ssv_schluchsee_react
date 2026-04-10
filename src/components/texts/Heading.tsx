import type {ReactNode} from "react";
import HeadingStyle from "../../style/components/texts/HeadingStyle.ts";
import {Typography} from "antd";

type HeadingProps = {
    level: 1 | 2 | 3 | 4 | 5;
    children: ReactNode;
};

const {
    HeadingGeneralStyle
} = HeadingStyle;

const Heading = ({level, children}: HeadingProps): ReactNode => {

    return (
        <Typography.Title level={level} style={HeadingGeneralStyle}>
            {children}
        </Typography.Title>
    );
};

export default Heading;



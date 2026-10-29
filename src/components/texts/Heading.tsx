import type {ReactNode} from "react";
type HeadingProps = {level: 1 | 2 | 3 | 4 | 5 | 6; children: ReactNode; id?: string; tabIndex?: number};
const Heading = ({level, children, id, tabIndex}: HeadingProps): ReactNode => {
    const Tag = `h${level}` as const;
    return <Tag className="site-heading" id={id} tabIndex={tabIndex}>{children}</Tag>;
};
export default Heading;

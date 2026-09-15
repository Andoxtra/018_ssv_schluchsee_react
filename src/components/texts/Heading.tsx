import type {ReactNode} from "react";
type HeadingProps = {level: 1 | 2 | 3 | 4 | 5 | 6; children: ReactNode};
const Heading = ({level, children}: HeadingProps): ReactNode => {
    const Tag = `h${level}` as const;
    return <Tag className="site-heading">{children}</Tag>;
};
export default Heading;

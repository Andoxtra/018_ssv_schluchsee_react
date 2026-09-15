import type {CSSProperties, ReactNode} from "react";
type Fraction = 1 | 2 | 4 | 8 | 16;
export type SizingBoxProps = {children: ReactNode; width?: Fraction; height?: Fraction; style?: CSSProperties};
const SizingBox = ({children, width = 1, height, style}: SizingBoxProps) => (
    <div style={{width: `${100 / width}%`, height: height ? `${100 / height}%` : undefined, minWidth: 0, ...style}}>{children}</div>
);
export default SizingBox;

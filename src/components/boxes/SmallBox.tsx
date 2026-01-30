import type {ReactNode} from "react";

type SmallBoxProps = {
    children: ReactNode;
}

const SmallBox = ({children} : SmallBoxProps) : ReactNode => {
    return (
        <div className="smallBox">
            {children}
        </div>
    );
};

export default SmallBox;

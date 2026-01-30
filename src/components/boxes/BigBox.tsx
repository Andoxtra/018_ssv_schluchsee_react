import type {ReactNode} from "react";

type BigBoxProps = {
    children: ReactNode;
}

const BigBox = ({children} : BigBoxProps) : ReactNode => {
    return (
        <div className="bigBox">
            {children}
        </div>
    );
};

export default BigBox;

import type {ReactNode} from "react";

type MediumBoxProps = {
    children: ReactNode;
}

const MediumBox = ({children} : MediumBoxProps) : ReactNode => {
    return (
        <div className="mediumBox">
            {children}
        </div>
    );
};

export default MediumBox;

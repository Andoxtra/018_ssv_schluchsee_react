import type {ReactNode} from "react";

type MediumBoxProps = {
    children: ReactNode;
    className?: string;
}

const MediumBox = ({children, className} : MediumBoxProps) : ReactNode => {
    return (
        <div className={className ? `mediumBox ${className}` : "mediumBox"}>
            {children}
        </div>
    );
};

export default MediumBox;

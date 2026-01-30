import  {type ReactNode} from "react";

type ToolbarProps = {
    children: ReactNode;
};

export const Toolbar = ({ children } : ToolbarProps) : ReactNode => {
    return (
        <div className="toolbar">
            { children }
        </div>
    );
};

export default Toolbar;
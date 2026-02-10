import { Menu } from "antd";
import {Link} from "react-router-dom";

type SmallIconProps = {
    linkToIcon: string;
    alternativeText? : string;
    linkTo: string;
    text?: string;
}

const SmallIcon = ({linkToIcon, alternativeText,linkTo, text}: SmallIconProps) => {

    return (
        <Menu.Item>
            <img className="ant-menu-item" src={linkToIcon} alt={alternativeText} />
            <span>{text}</span>
            <Link to={linkTo}/>
        </Menu.Item>
    );
};

export default SmallIcon;

import LinkBox from "../boxes/LinkBox.tsx";
import SizeStyling from "../../style/components/general/SizeStyling.ts";
import type {CSSProperties} from "react";

type BaseIconProps = {
    style: CSSProperties;
    linkToIcon: string;
    alternativeText? : string;
    linkTo: string;
}
const {
    fillParent
} = SizeStyling;

const BaseIcon = ({style, linkToIcon, alternativeText, linkTo}: BaseIconProps) => {

    return (
        <LinkBox linkTo={linkTo} style={style}>
            <img src={linkToIcon} alt={alternativeText} style={fillParent}/>
        </LinkBox>
    );
};

export default BaseIcon;

import LinkBox from "../boxes/LinkBox.tsx";
import SizeStyling from "../../style/components/SizeStyling.ts";
import type {CSSProperties} from "react";

type SmallIconProps = {
    sizeStyling: CSSProperties;
    linkToIcon: string;
    alternativeText? : string;
    linkTo: string;
}
const {
    fillParent
} = SizeStyling;

const BaseIcon = ({sizeStyling, linkToIcon, alternativeText, linkTo}: SmallIconProps) => {

    return (
        <LinkBox linkTo={linkTo} style={sizeStyling}>
            <img src={linkToIcon} alt={alternativeText} style={fillParent}/>
        </LinkBox>
    );
};

export default BaseIcon;

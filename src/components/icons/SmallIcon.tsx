import getDynamicStyle from "../../logic/dynamicStyling/getDynamicStyle.ts";
import SmallIconStyle from "../../style/components/SmallIconStyle.ts";
import BaseIcon from "./BaseIcon.tsx";

type SmallIconProps = {
    linkToIcon: string;
    alternativeText?: string;
    linkTo: string;
}

const {
    smallIconS,
    smallIconM,
    smallIconL,
    smallIconE
} = SmallIconStyle;

const SmallIcon = ({linkToIcon, alternativeText, linkTo}: SmallIconProps) => {

    return (
        <BaseIcon
            sizeStyling={getDynamicStyle(smallIconS, smallIconM, smallIconL, smallIconE)}
            linkToIcon={linkToIcon}
            linkTo={linkTo}
            alternativeText={alternativeText}>
        </BaseIcon>
    );
};

export default SmallIcon;

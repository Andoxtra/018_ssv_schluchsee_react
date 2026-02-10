import getDynamicStyle from "../../logic/dynamicStyling/getDynamicStyle.ts";
import BaseIcon from "./BaseIcon.tsx";
import MediumIconStyle from "../../style/components/icons/MediumIconStyle.ts";

type MediumIconProps = {
    linkToIcon: string;
    alternativeText?: string;
    linkTo: string;
}

const {
    mediumIconS,
    mediumIconM,
    mediumIconL,
    mediumIconE
} = MediumIconStyle;

const MediumIcon = ({linkToIcon, alternativeText, linkTo}: MediumIconProps) => {

    return (
        <BaseIcon
            sizeStyling={getDynamicStyle(mediumIconS, mediumIconM, mediumIconL, mediumIconE)}
            linkToIcon={linkToIcon}
            linkTo={linkTo}
            alternativeText={alternativeText}>
        </BaseIcon>
    );
};

export default MediumIcon;

import getDynamicStyle from "../../logic/dynamicStyling/getDynamicStyle.ts";
import BaseIcon from "./BaseIcon.tsx";
import MediumIconStyle from "../../style/components/icons/MediumIconStyle.ts";

type MediumIconProps = {
    linkToIcon: string;
    alternativeText?: string;
    linkTo: string;
}

const {
    MediumIconS,
    MediumIconM,
    MediumIconL,
    MediumIconE
} = MediumIconStyle;

const MediumIcon = ({linkToIcon, alternativeText, linkTo}: MediumIconProps) => {

    return (
        <BaseIcon
            style={getDynamicStyle(MediumIconS, MediumIconM, MediumIconL, MediumIconE)}
            linkToIcon={linkToIcon}
            linkTo={linkTo}
            alternativeText={alternativeText}>
        </BaseIcon>
    );
};

export default MediumIcon;

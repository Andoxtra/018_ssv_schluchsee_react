import getDynamicStyle from "../../logic/dynamicStyling/getDynamicStyle.ts";
import BaseIcon from "./BaseIcon.tsx";
import LargeIconStyle from "../../style/components/icons/LargeIconStyle.ts";

type LargeIconProps = {
    linkToIcon: string;
    alternativeText?: string;
    linkTo: string;
}

const {
    LargeIconS,
    LargeIconM,
    LargeIconL,
    LargeIconE
} = LargeIconStyle;

const LargeIcon = ({linkToIcon, alternativeText, linkTo}: LargeIconProps) => {

    return (
        <BaseIcon
            sizeStyling={getDynamicStyle(LargeIconS, LargeIconM, LargeIconL, LargeIconE)}
            linkToIcon={linkToIcon}
            linkTo={linkTo}
            alternativeText={alternativeText}>
        </BaseIcon>
    );
};

export default LargeIcon;

import getDynamicStyle from "../../logic/dynamicStyling/getDynamicStyle.ts";
import BaseIcon from "./BaseIcon.tsx";

import SmallIconStyle from "../../style/components/icons/SmallIconStyle.ts";

type SmallIconProps = {
    linkToIcon: string;
    alternativeText?: string;
    linkTo: string;
}

const {
    SmallIconS,
    SmallIconM,
    SmallIconL,
    SmallIconE
} = SmallIconStyle;

const SmallIcon = ({linkToIcon, alternativeText, linkTo}: SmallIconProps) => {

    return (
        <BaseIcon
            style={getDynamicStyle(SmallIconS, SmallIconM, SmallIconL, SmallIconE)}
            linkToIcon={linkToIcon}
            linkTo={linkTo}
            alternativeText={alternativeText}>
        </BaseIcon>
    );
};

export default SmallIcon;

import MediumBox from "../../components/boxes/MediumBox.tsx";
import Heading from "../../components/texts/Heading.tsx";
import NormalText from "../../components/texts/NormalText.tsx";
import type {NewsItemProps} from "./props/NewsItemProps.ts";

const NewsItemPreview = ({title, creationDate, author, previewText}: NewsItemProps) => {
    return (
        <MediumBox>
            <Heading level={2}>{title}</Heading>
            <Heading level={3}>{creationDate.getGermanDate()}</Heading>
            <Heading level={3}>{author}</Heading>
            <NormalText>{previewText}</NormalText>
        </MediumBox>
    )
}

export default NewsItemPreview;
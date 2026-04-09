import Heading from "../../components/texts/Heading.tsx";
import BigBox from "../../components/boxes/BigBox.tsx";
import type {NewsItemProps} from "./props/NewsItemProps.ts";
import markdownit from "markdown-it";
import HtmlRenderer from "../../components/boxes/HtmlRenderer.tsx";

const NewsItemFullView = ({title, creationDate, author, contentAsMarkdown}: NewsItemProps) => {
    return (
        <BigBox>
            <Heading level={2}>{title}</Heading>
            <Heading level={3}>{creationDate.getGermanDate()}</Heading>
            <Heading level={3}>{author}</Heading>
            <HtmlRenderer htmlAsString={markdownit({
                html: true,
                linkify: true,
                typographer: true
            }).render(contentAsMarkdown)}/>
        </BigBox>
    )
}

export default NewsItemFullView;
import HtmlRenderer from "./HtmlRenderer.tsx";
import {renderMarkdown} from "../../logic/news/renderMarkdown.ts";
const Markdown = ({children}: {children: string}) => <HtmlRenderer htmlAsString={renderMarkdown(children)}/>;
export default Markdown;

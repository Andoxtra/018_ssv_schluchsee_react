import {Markup} from "interweave";

type HtmlRendererProps = {htmlAsString: string};
const HtmlRenderer = ({htmlAsString}: HtmlRendererProps) => (
    <Markup tagName="div" className="markdown-content" content={htmlAsString}/>
);
export default HtmlRenderer;

import {Markup} from "interweave";

type HtmlRendererProps = {
    htmlAsString: string;
}

const HtmlRenderer = ({htmlAsString}: HtmlRendererProps) => {
    return (
        <>
            <Markup content={htmlAsString}/>
        </>
    );
}

export default HtmlRenderer;
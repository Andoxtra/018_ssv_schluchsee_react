import Heading from "../../components/texts/Heading.tsx";
import BigBox from "../../components/boxes/BigBox.tsx";
import MediumBox from "../../components/boxes/MediumBox.tsx";
import type {NewsItemProps} from "./props/NewsItemProps.ts";
import markdownit from "markdown-it";
import HtmlRenderer from "../../components/boxes/HtmlRenderer.tsx";
import {Link} from "react-router-dom";
import webPaths from "../../config/webPaths.ts";

const NewsItemFullView = ({title, creationDate, author, contentAsMarkdown}: NewsItemProps) => {
    return (
        <>
            <BigBox>
                <div style={{maxWidth: 800, margin: "0 auto"}}>
                    <Heading level={1}>{title}</Heading>
                    <div style={{display: "flex", gap: 20, flexWrap: "wrap", marginBottom: 20, color: "rgba(255,255,255,0.8)", fontSize: "0.9375rem"}}>
                        <span>{creationDate.getGermanDate()}</span>
                        <span>von {author}</span>
                    </div>
                </div>
            </BigBox>

            <MediumBox>
                <div style={{maxWidth: 800}}>
                    <HtmlRenderer htmlAsString={markdownit({
                        html: true,
                        linkify: true,
                        typographer: true
                    }).render(contentAsMarkdown)}/>
                </div>
            </MediumBox>

            <div style={{marginTop: 16}}>
                <Link
                    to={webPaths.newsSite}
                    style={{
                        color: "#143620",
                        fontWeight: 500,
                        fontSize: "0.9375rem",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                    }}
                >
                    ← Zurück zu den Neuigkeiten
                </Link>
            </div>
        </>
    )
}

export default NewsItemFullView;
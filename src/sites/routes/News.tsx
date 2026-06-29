import type {ReactNode} from "react";
import Heading from "../../components/texts/Heading.tsx";
import BigBox from "../../components/boxes/BigBox.tsx";
import MediumBox from "../../components/boxes/MediumBox.tsx";
import NewsItemPreview from "../../elements/NewsItem/NewsItemPreview.tsx";
import {newsItems} from "../../data/newsData.ts";

const News = (): ReactNode => {
    return (
        <>
            <BigBox>
                <Heading level={1}>Aktuelles</Heading>
                <div style={{color: "rgba(255,255,255,0.85)", fontSize: "1rem", marginTop: 8}}>
                    Neuigkeiten und Updates aus dem Vereinsleben
                </div>
            </BigBox>

            <MediumBox>
                <Heading level={2}>Neueste Beiträge</Heading>
            </MediumBox>

            {newsItems.map((item) => (
                <NewsItemPreview
                    key={item.uuid}
                    uuid={item.uuid}
                    title={item.title}
                    creationDate={item.creationDate}
                    author={item.author}
                    previewText={item.previewText}
                    contentAsMarkdown={item.contentAsMarkdown}
                />
            ))}
        </>
    )
};

export default News;
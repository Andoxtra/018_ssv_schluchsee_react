import type {ReactNode} from "react";
import {useParams} from "react-router-dom";
import NewsItemFullView from "../../elements/NewsItem/NewsItemFullView.tsx";
import {newsItems} from "../../data/newsData.ts";
import Heading from "../../components/texts/Heading.tsx";
import BigBox from "../../components/boxes/BigBox.tsx";

const NewsDetail = (): ReactNode => {
    const {id} = useParams<{id: string}>();

    const newsItem = newsItems.find((item) => item.uuid === id);

    if (!newsItem) {
        return (
            <>
                <BigBox>
                    <Heading level={1}>Beitrag nicht gefunden</Heading>
                </BigBox>
            </>
        );
    }

    return <NewsItemFullView {...newsItem} />;
};

export default NewsDetail;
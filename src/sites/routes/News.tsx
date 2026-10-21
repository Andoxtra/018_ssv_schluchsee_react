import Heading from "../../components/texts/Heading.tsx";
import BigBox from "../../components/boxes/BigBox.tsx";
import NewsItemPreview from "../../elements/NewsItem/NewsItemPreview.tsx";
import {toNewsItem} from "../../data/newsData.ts";
import {useNews} from "../../logic/news/useNews.ts";
const News = () => {
    const {articles, loading, error} = useNews();
    return <><BigBox><Heading level={1}>Aktuelles & Vereinsarchiv</Heading><p>Neuigkeiten und Berichte, nach Veröffentlichungsdatum sortiert.</p></BigBox>
        {loading && <p role="status">Beiträge werden geladen …</p>}{error && <p role="alert">{error} Bitte versuchen Sie es später erneut.</p>}
        {!loading && !error && !articles.length && <p>Zurzeit sind keine Beiträge veröffentlicht.</p>}
        {articles.map(article => <NewsItemPreview key={article.id} {...toNewsItem(article)}/>)}</>;
};
export default News;

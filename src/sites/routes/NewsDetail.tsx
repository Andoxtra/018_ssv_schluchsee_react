import {useParams} from "react-router-dom";
import NewsItemFullView from "../../elements/NewsItem/NewsItemFullView.tsx";
import {toNewsItem} from "../../data/newsData.ts";
import {useNews} from "../../logic/news/useNews.ts";
import NotFound from "./NotFound.tsx";
const NewsDetail = () => {
    const {id} = useParams();
    const {articles, loading, error} = useNews();
    if (loading) return <p role="status">Beitrag wird geladen …</p>;
    if (error) return <p role="alert">{error}</p>;
    const article = articles.find(item => item.id === id);
    return article ? <NewsItemFullView {...toNewsItem(article)}/> : <NotFound article/>;
};
export default NewsDetail;

import {useParams} from "react-router-dom";
import NewsItemFullView from "../../elements/NewsItem/NewsItemFullView.tsx";
import {toNewsItem} from "../../data/newsData.ts";
import {useNews} from "../../logic/news/useNews.ts";
import {usePageMeta} from "../../logic/seo/usePageMeta.ts";
import {articleMeta} from "../../config/seo.ts";
import type {Article} from "../../logic/news/newsSource.ts";
import NotFound from "./NotFound.tsx";

const NewsDetailContent = ({article}: {article: Article}) => {
    const meta = articleMeta(article.title, article.preview);
    usePageMeta({
        title: meta.title,
        description: meta.description,
        ogType: "article",
        ogImage: "/og-image.png",
    });
    return <NewsItemFullView {...toNewsItem(article)}/>;
};

const NewsDetail = () => {
    const {id} = useParams();
    const {articles, loading, error} = useNews();
    if (loading) return <p role="status">Beitrag wird geladen …</p>;
    if (error) return <p role="alert">{error}</p>;
    const article = articles.find(item => item.id === id);
    return article ? <NewsDetailContent article={article}/> : <NotFound article/>;
};
export default NewsDetail;

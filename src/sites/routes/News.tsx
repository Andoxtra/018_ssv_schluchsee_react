import {Pagination} from "antd";
import {useSearchParams} from "react-router-dom";
import Heading from "../../components/texts/Heading.tsx";
import BigBox from "../../components/boxes/BigBox.tsx";
import NewsItemPreview from "../../elements/NewsItem/NewsItemPreview.tsx";
import {toNewsItem} from "../../data/newsData.ts";
import {useNews} from "../../logic/news/useNews.ts";

const PAGE_SIZE = 5;

const News = () => {
    const {articles, loading, error} = useNews();
    const [searchParams, setSearchParams] = useSearchParams();
    const requested = Number(searchParams.get("page")) || 1;
    const pageCount = Math.max(1, Math.ceil(articles.length / PAGE_SIZE));
    const current = Math.min(Math.max(1, requested), pageCount);
    const visible = articles.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE);
    const onPageChange = (page: number) => {
        setSearchParams(page > 1 ? {page: String(page)} : {});
        window.scrollTo({top: 0, behavior: "smooth"});
    };
    return <><BigBox><Heading level={1}>Aktuelles & Vereinsarchiv</Heading><p>Neuigkeiten und Berichte, nach Veröffentlichungsdatum sortiert.</p></BigBox>
        {loading && <p role="status">Beiträge werden geladen …</p>}{error && <p role="alert">{error} Bitte versuchen Sie es später erneut.</p>}
        {!loading && !error && !articles.length && <p>Zurzeit sind keine Beiträge veröffentlicht.</p>}
        {visible.map(article => <NewsItemPreview key={article.id} {...toNewsItem(article)}/>)}
        {!loading && !error && articles.length > PAGE_SIZE && <div style={{display: "flex", justifyContent: "center"}}><Pagination current={current} pageSize={PAGE_SIZE} total={articles.length} showSizeChanger={false} onChange={onPageChange}/></div>}
    </>;
};
export default News;

import {Select} from "antd";
import MediumBox from "../../components/boxes/MediumBox.tsx";
import Heading from "../../components/texts/Heading.tsx";
import {emptyArticle} from "../../logic/admin/article.ts";
import type {Article} from "../../logic/news/newsSource.ts";

type ArticleSelectorProps = {
    articles: Article[];
    selectedId: string;
    dirty: boolean;
    busy: boolean;
    uploading: boolean;
    onSelect: (article: Article) => void;
    onNew: () => void;
    onDiscard: () => void;
    onDelete: () => void;
};

const ArticleSelector = ({articles, selectedId, dirty, busy, uploading, onSelect, onNew, onDiscard, onDelete}: ArticleSelectorProps) => (
    <MediumBox>
        <Heading level={2}>Beiträge</Heading>
        <div className="article-select-row">
            <Select
                className="article-select"
                showSearch
                value={selectedId || undefined}
                placeholder="Beitrag suchen …"
                disabled={dirty || busy || uploading}
                options={articles.map(item => ({value: item.id, label: `${item.title}${item.published ? " (veröffentlicht)" : " (Entwurf)"}`}))}
                filterOption={(input, option) => String(option?.label ?? "").toLowerCase().includes(input.toLowerCase())}
                onChange={value => onSelect(articles.find(item => item.id === value) ?? emptyArticle())}
            />
            <button type="button" className="site-button primarybutton" disabled={dirty || busy || uploading} onClick={onNew}>Neuer Beitrag</button>
        </div>
        <div className="action-row">
            {dirty && <button disabled={busy || uploading} onClick={onDiscard}>Änderungen verwerfen</button>}
            {selectedId && <button disabled={busy || uploading} onClick={onDelete}>Beitrag löschen …</button>}
        </div>
    </MediumBox>
);

export default ArticleSelector;

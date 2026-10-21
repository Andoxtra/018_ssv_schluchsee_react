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
    onDiscard: () => void;
};

const ArticleSelector = ({articles, selectedId, dirty, busy, uploading, onSelect, onDiscard}: ArticleSelectorProps) => (
    <MediumBox>
        <Heading level={2}>Beiträge</Heading>
        <label>Beitrag auswählen
            <select disabled={dirty || busy || uploading} value={selectedId} onChange={event => onSelect(articles.find(item => item.id === event.target.value) ?? emptyArticle())}>
                <option value="">Neuer Beitrag</option>
                {articles.map(item => <option key={item.id} value={item.id}>{item.title} {item.published ? "(veröffentlicht)" : "(Entwurf)"}</option>)}
            </select>
        </label>
        {dirty && <button disabled={busy || uploading} onClick={onDiscard}>Änderungen verwerfen</button>}
    </MediumBox>
);

export default ArticleSelector;

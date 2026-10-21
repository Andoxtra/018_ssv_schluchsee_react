import {useState} from "react";
import type {ChangeEvent, FormEvent, RefObject} from "react";
import {Link} from "react-router-dom";
import MediumBox from "../../components/boxes/MediumBox.tsx";
import Markdown from "../../components/boxes/Markdown.tsx";
import Heading from "../../components/texts/Heading.tsx";
import {localDate} from "../../logic/news/newsSource.ts";
import type {Article} from "../../logic/news/newsSource.ts";

const NEW_AUTHOR = "__new__";

type ArticleEditorProps = {
    article: Article;
    authors: string[];
    busy: boolean;
    uploading: boolean;
    textEditor: RefObject<HTMLTextAreaElement | null>;
    onUpdate: <K extends keyof Article>(key: K, value: Article[K]) => void;
    onFormat: (before: string, after?: string) => void;
    onUpload: (file?: File) => void;
    onSave: (event: FormEvent<HTMLFormElement>) => void;
};

const ArticleEditor = ({article, authors, busy, uploading, textEditor, onUpdate, onFormat, onUpload, onSave}: ArticleEditorProps) => {
    const [addingAuthor, setAddingAuthor] = useState(false);
    const handleAuthorChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        if (value === NEW_AUTHOR) {
            setAddingAuthor(true);
            onUpdate("author", "");
        } else {
            setAddingAuthor(false);
            onUpdate("author", value);
        }
    };
    return (
        <div className="editor-grid">
            <MediumBox>
                <form onSubmit={onSave} className="site-form">
                    <fieldset disabled={busy || uploading} className="form-fields">
                        <Heading level={2}>Beitrag bearbeiten</Heading>
                        <label>Titel<input required maxLength={200} value={article.title} onChange={event => onUpdate("title", event.target.value)}/></label>
                        <label>Autor/in
                            <select required aria-label="Autor/in" value={addingAuthor ? NEW_AUTHOR : article.author} onChange={handleAuthorChange}>
                                <option value="">Bitte wählen</option>
                                {authors.map(author => <option key={author} value={author}>{author}</option>)}
                                <option value={NEW_AUTHOR}>Neuer Autor …</option>
                            </select>
                        </label>
                        {addingAuthor && <label>Neuer Autor<input required maxLength={100} autoFocus value={article.author} onChange={event => onUpdate("author", event.target.value)}/></label>}
                        <label>Veröffentlichungsdatum<input type="date" required value={article.date} onChange={event => onUpdate("date", event.target.value)}/></label>
                        <label>Kurzbeschreibung<textarea required maxLength={600} value={article.preview} onChange={event => onUpdate("preview", event.target.value)}/></label>
                        <div className="action-row" role="group" aria-label="Text formatieren">
                            <button type="button" onClick={() => onFormat("**", "**")}>Fett</button>
                            <button type="button" onClick={() => onFormat("\n\n## ")}>Überschrift</button>
                            <button type="button" onClick={() => onFormat("\n- ")}>Liste</button>
                            <button type="button" onClick={() => onFormat("[", "](https://)")}>Link</button>
                        </div>
                        <label>Text<textarea ref={textEditor} required rows={15} maxLength={100000} value={article.content} onChange={event => onUpdate("content", event.target.value)}/></label>
                        <p>Absätze durch Leerzeilen trennen. Für Überschriften „## Überschrift“, für Listen „- Eintrag“ verwenden. Die Vorschau zeigt das Ergebnis.</p>
                        <label>Bild hinzufügen (PNG, JPEG, WebP, bis 5 MB)<input type="file" accept="image/png,image/jpeg,image/webp" disabled={uploading || busy} onChange={event => { void onUpload(event.target.files?.[0]); event.target.value = ""; }}/></label>
                        <fieldset>
                            <legend>Veranstaltungstage (optional)</legend>
                            {article.eventDates.map((date, index) => (
                                <div className="action-row" key={index}>
                                    <label>Tag {index + 1}<input type="date" required value={date} onChange={event => onUpdate("eventDates", article.eventDates.map((value, i) => i === index ? event.target.value : value))}/></label>
                                    <button type="button" onClick={() => onUpdate("eventDates", article.eventDates.filter((_, i) => i !== index))}>Tag {index + 1} entfernen</button>
                                </div>
                            ))}
                            <button type="button" disabled={article.eventDates.length >= 20} onClick={() => onUpdate("eventDates", [...article.eventDates, localDate()])}>Veranstaltungstag hinzufügen</button>
                        </fieldset>
                        <label>Redaktioneller Hinweis (optional)<textarea maxLength={600} value={article.reviewNote} onChange={event => onUpdate("reviewNote", event.target.value)}/></label>
                        <label className="checkbox-label"><input type="checkbox" checked={article.published} onChange={event => onUpdate("published", event.target.checked)}/>Öffentlich anzeigen</label>
                        <button disabled={busy || uploading}>{busy ? "Wird gespeichert …" : article.published ? "Speichern & veröffentlichen" : "Entwurf speichern"}</button>
                        {article.id && article.published && <Link to={`/neuigkeiten/${article.id}`} target="_blank" rel="noopener noreferrer">Veröffentlichten Beitrag öffnen →</Link>}
                    </fieldset>
                </form>
            </MediumBox>
            <MediumBox>
                <Heading level={2}>Live-Vorschau</Heading>
                <h3>{article.title || "Titel des Beitrags"}</h3>
                {article.reviewNote && <p className="review-note">{article.reviewNote}</p>}
                <Markdown>{article.content || "Hier erscheint Ihr Beitrag."}</Markdown>
            </MediumBox>
        </div>
    );
};

export default ArticleEditor;

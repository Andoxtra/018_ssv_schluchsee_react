import {useEffect, useRef, useState} from "react";
import type {FormEvent} from "react";
import {Link, useBlocker} from "react-router-dom";
import BigBox from "../../components/boxes/BigBox.tsx";
import MediumBox from "../../components/boxes/MediumBox.tsx";
import Heading from "../../components/texts/Heading.tsx";
import Markdown from "../../components/boxes/Markdown.tsx";
import {api} from "../../logic/api/client.ts";
import type {Article} from "../../logic/news/newsSource.ts";

type Message = {
    id: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    createdAt: string;
    read: boolean
};
const emptyArticle = (): Article => ({
    id: "",
    title: "",
    author: "",
    date: new Date().toISOString().slice(0, 10),
    preview: "",
    content: "",
    published: false,
    reviewNote: "",
    eventDates: [],
    version: 0
});
const Admin = () => {
    const [authenticated, setAuthenticated] = useState(false);
    const [checking, setChecking] = useState(true);
    const [articles, setArticles] = useState<Article[]>([]);
    const [messages, setMessages] = useState<Message[]>([]);
    const [article, setArticle] = useState<Article>(emptyArticle);
    const [dirty, setDirty] = useState(false);
    const [busy, setBusy] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [status, setStatus] = useState("");
    const [error, setError] = useState("");
    const [deleteMessage, setDeleteMessage] = useState<Message | null>(null);
    const blocker = useBlocker(dirty);
    const textEditor = useRef<HTMLTextAreaElement>(null);
    const navigationConfirmation = useRef<HTMLDialogElement>(null);
    const confirmation = useRef<HTMLDialogElement>(null);
    const load = async () => {
        const [items, inbox] = await Promise.all([api<Article[]>("/api/admin/news"), api<Message[]>("/api/admin/messages")]);
        setArticles(items);
        setMessages(inbox);
    };
    useEffect(() => {
        let active = true;
        api<{ authenticated: boolean }>("/api/session").then(async session => {
            if (!active) return;
            setAuthenticated(session.authenticated);
            if (session.authenticated) await load();
        }).catch(error => {
            if (active) setError(error.message);
        }).finally(() => {
            if (active) setChecking(false);
        });
        return () => {
            active = false;
        };
    }, []);
    useEffect(() => {
        if (!dirty) return;
        const prevent = (event: BeforeUnloadEvent) => {
            event.preventDefault();
        };
        window.addEventListener("beforeunload", prevent);
        return () => window.removeEventListener("beforeunload", prevent);
    }, [dirty]);
    useEffect(() => {
        if (deleteMessage) confirmation.current?.showModal();
        else confirmation.current?.close();
    }, [deleteMessage]);
    useEffect(() => {
        const dialog = navigationConfirmation.current;
        if (blocker.state === "blocked" && !dialog?.open) dialog?.showModal();
        else if (blocker.state !== "blocked") dialog?.close();
    }, [blocker.state]);
    const format = (before: string, after = "") => {
        const input = textEditor.current;
        if (!input) return;
        const start = input.selectionStart, end = input.selectionEnd;
        const selection = article.content.slice(start, end) || "Text";
        setArticle(current => ({
            ...current,
            content: current.content.slice(0, start) + before + selection + after + current.content.slice(end)
        }));
        setDirty(true);
        requestAnimationFrame(() => {
            input.focus();
            input.setSelectionRange(start + before.length, start + before.length + selection.length);
        });
    };
    const run = async (action: () => Promise<void>) => {
        setBusy(true);
        setError("");
        setStatus("");
        try {
            await action();
        } catch (error) {
            setError(error instanceof Error ? error.message : "Die Aktion ist fehlgeschlagen.");
        } finally {
            setBusy(false);
        }
    };
    const login = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = Object.fromEntries(new FormData(event.currentTarget));
        void run(async () => {
            await api("/api/login", {method: "POST", body: JSON.stringify(data)});
            setAuthenticated(true);
            await load();
        });
    };
    const save = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        void run(async () => {
            const saved = await api<Article>(`/api/admin/news${article.id ? `/${article.id}` : ""}`, {
                method: article.id ? "PUT" : "POST",
                body: JSON.stringify(article)
            });
            setArticle(saved);
            setDirty(false);
            await load();
            setStatus(saved.published ? "Der Beitrag ist veröffentlicht." : "Der Entwurf wurde gespeichert.");
        });
    };
    const update = <K extends keyof Article>(key: K, value: Article[K]) => {
        setArticle(current => ({...current, [key]: value}));
        setDirty(true);
    };
    const upload = async (file?: File) => {
        if (!file) return;
        if (file.size > 5 * 1024 * 1024 || !["image/png", "image/jpeg", "image/webp"].includes(file.type)) {
            setError("Bitte wählen Sie PNG, JPEG oder WebP bis 5 MB.");
            return;
        }
        setUploading(true);
        setError("");
        try {
            const data = await new Promise<string>((resolve, reject) => {
                const reader = new FileReader();
                reader.onerror = () => reject(new Error("Das Bild konnte nicht gelesen werden."));
                reader.onload = () => resolve(String(reader.result).split(",")[1]);
                reader.readAsDataURL(file);
            });
            const image = await api<{ url: string }>("/api/admin/uploads", {
                method: "POST",
                body: JSON.stringify({data})
            });
            setArticle(current => ({
                ...current,
                content: `${current.content}\n\n![Bildbeschreibung ergänzen](${image.url})`
            }));
            setDirty(true);
            setStatus("Bild eingefügt. Bitte ergänzen Sie die Bildbeschreibung und speichern Sie den Beitrag.");
        } catch (error) {
            setError(error instanceof Error ? error.message : "Der Upload ist fehlgeschlagen.");
        } finally {
            setUploading(false);
        }
    };
    if (checking) return <p role="status">Verwaltung wird geladen …</p>;
    return <div className="page-stack"><BigBox><Heading level={1}>Vereinsverwaltung</Heading><p>Beiträge bearbeiten und
        Nachrichten lesen.</p></BigBox>
        {error && <p className="review-note" role="alert">{error}</p>}{status && <p role="status">{status}</p>}
        {!authenticated ? <MediumBox>
            <form onSubmit={login} className="site-form"><Heading level={2}>Anmelden</Heading><label>Benutzername<input
                name="username" required autoComplete="username"/></label><label>Passwort<input name="password"
                                                                                                type="password" required
                                                                                                autoComplete="current-password"/></label>
                <button disabled={busy}>Anmelden</button>
            </form>
        </MediumBox> : <>
            <div className="action-row">
                <button disabled={busy || dirty || uploading} onClick={() => void run(async () => {
                    await api("/api/logout", {method: "POST"});
                    setAuthenticated(false);
                    setMessages([]);
                    setArticles([]);
                })}>Abmelden
                </button>
                <span>{dirty ? "Ungespeicherte Änderungen – bitte speichern oder verwerfen." : "Alle Änderungen gespeichert."}</span>
            </div>
            <MediumBox><Heading level={2}>Beiträge</Heading><label>Beitrag auswählen<select
                disabled={dirty || busy || uploading} value={article.id} onChange={event => {
                setArticle(articles.find(item => item.id === event.target.value) ?? emptyArticle());
                setStatus("");
            }}>
                <option value="">Neuer Beitrag</option>
                {articles.map(item => <option key={item.id}
                                              value={item.id}>{item.title} {item.published ? "(veröffentlicht)" : "(Entwurf)"}</option>)}
            </select></label>
                {dirty && <button disabled={busy || uploading} onClick={() => {
                    setArticle(articles.find(item => item.id === article.id) ?? emptyArticle());
                    setDirty(false);
                    setStatus("Änderungen verworfen.");
                }}>Änderungen verwerfen</button>}
            </MediumBox>
            <div className="editor-grid"><MediumBox>
                <form onSubmit={save} className="site-form">
                    <fieldset disabled={busy || uploading} className="form-fields"><Heading level={2}>Beitrag
                        bearbeiten</Heading>
                        <label>Titel<input required maxLength={200} value={article.title}
                                           onChange={event => update("title", event.target.value)}/></label>
                        <label>Autor/in<input required maxLength={100} value={article.author}
                                              onChange={event => update("author", event.target.value)}/></label>
                        <label>Veröffentlichungsdatum<input type="date" required value={article.date}
                                                            onChange={event => update("date", event.target.value)}/></label>
                        <label>Kurzbeschreibung<textarea required maxLength={600} value={article.preview}
                                                         onChange={event => update("preview", event.target.value)}/></label>
                        <div className="action-row" role="group" aria-label="Text formatieren">
                            <button type="button" onClick={() => format("**", "**")}>Fett</button>
                            <button type="button" onClick={() => format("\n\n## ")}>Überschrift</button>
                            <button type="button" onClick={() => format("\n- ")}>Liste</button>
                            <button type="button" onClick={() => format("[", "](https://)")}>Link</button>
                        </div>
                        <label>Text<textarea ref={textEditor} required rows={15} maxLength={100000}
                                             value={article.content}
                                             onChange={event => update("content", event.target.value)}/></label>
                        <p>Absätze durch Leerzeilen trennen. Für Überschriften „## Überschrift“, für Listen „- Eintrag“
                            verwenden. Die Vorschau zeigt das Ergebnis.</p>
                        <label>Bild hinzufügen (PNG, JPEG, WebP, bis 5 MB)<input type="file"
                                                                                 accept="image/png,image/jpeg,image/webp"
                                                                                 disabled={uploading || busy}
                                                                                 onChange={event => {
                                                                                     void upload(event.target.files?.[0]);
                                                                                     event.target.value = "";
                                                                                 }}/></label>
                        <fieldset>
                            <legend>Veranstaltungstage (optional)</legend>
                            {article.eventDates.map((date, index) => <div className="action-row" key={index}>
                                <label>Tag {index + 1}<input type="date" required value={date}
                                                             onChange={event => update("eventDates", article.eventDates.map((value, i) => i === index ? event.target.value : value))}/></label>
                                <button type="button"
                                        onClick={() => update("eventDates", article.eventDates.filter((_, i) => i !== index))}>Tag {index + 1} entfernen
                                </button>
                            </div>)}
                            <button type="button" disabled={article.eventDates.length >= 20}
                                    onClick={() => update("eventDates", [...article.eventDates, new Date().toISOString().slice(0, 10)])}>Veranstaltungstag
                                hinzufügen
                            </button>
                        </fieldset>
                        <label>Redaktioneller Hinweis (optional)<textarea maxLength={600} value={article.reviewNote}
                                                                          onChange={event => update("reviewNote", event.target.value)}/></label>
                        <label className="checkbox-label"><input type="checkbox" checked={article.published}
                                                                 onChange={event => update("published", event.target.checked)}/>Öffentlich
                            anzeigen</label>
                        <button
                            disabled={busy || uploading}>{busy ? "Wird gespeichert …" : article.published ? "Speichern & veröffentlichen" : "Entwurf speichern"}</button>
                        {article.id && article.published &&
                            <Link to={`/neuigkeiten/${article.id}`} target="_blank" rel="noopener noreferrer">Veröffentlichten
                                Beitrag öffnen →</Link>}
                    </fieldset>
                </form>
            </MediumBox><MediumBox><Heading level={2}>Live-Vorschau</Heading>
                <h3>{article.title || "Titel des Beitrags"}</h3>{article.reviewNote &&
                    <p className="review-note">{article.reviewNote}</p>}<Markdown>{article.content || "Hier erscheint Ihr Beitrag."}</Markdown></MediumBox>
            </div>
            <MediumBox><Heading level={2}>Posteingang
                ({messages.filter(message => !message.read).length} ungelesen)</Heading><p>Nachrichten werden hier
                gespeichert. Bitte antworten Sie über Ihr E-Mail-Programm und löschen Sie erledigte Nachrichten, sobald
                sie nicht mehr benötigt werden.</p>
                {!messages.length && <p>Keine Nachrichten vorhanden.</p>}{messages.map(message => <details
                    key={message.id} className="faq-item">
                    <summary>{message.read ? "Gelesen" : "Neu"}: {message.subject} · {message.name}</summary>
                    <div><p>{new Date(message.createdAt).toLocaleString("de-DE")}</p><a
                        href={`mailto:${message.email}`}>{message.email}</a><p
                        style={{whiteSpace: "pre-wrap"}}>{message.message}</p>
                        <div className="action-row">
                            <button disabled={busy} onClick={() => void run(async () => {
                                await api(`/api/admin/messages/${message.id}`, {
                                    method: "PATCH",
                                    body: JSON.stringify({read: !message.read})
                                });
                                await load();
                            })}>{message.read ? "Als ungelesen markieren" : "Als gelesen markieren"}</button>
                            <button onClick={() => setDeleteMessage(message)}>Löschen …</button>
                        </div>
                    </div>
                </details>)}
            </MediumBox>
            <dialog ref={navigationConfirmation} onCancel={() => blocker.reset?.()} aria-labelledby="unsaved-title"><h2
                id="unsaved-title">Ungespeicherte Änderungen</h2><p>Möchten Sie Ihre Änderungen verwerfen und die Seite
                verlassen?</p>
                <div className="action-row">
                    <button autoFocus onClick={() => blocker.reset?.()}>Auf Seite bleiben</button>
                    <button onClick={() => blocker.proceed?.()}>Verwerfen & weiter</button>
                </div>
            </dialog>
            <dialog ref={confirmation} onCancel={() => setDeleteMessage(null)} aria-labelledby="delete-message-title">
                <h2 id="delete-message-title">Nachricht löschen?</h2><p>„{deleteMessage?.subject}“ wird dauerhaft aus
                dem Posteingang entfernt.</p>
                <div className="action-row">
                    <button autoFocus onClick={() => setDeleteMessage(null)}>Abbrechen</button>
                    <button disabled={busy} onClick={() => void run(async () => {
                        await api(`/api/admin/messages/${deleteMessage!.id}`, {method: "DELETE"});
                        setDeleteMessage(null);
                        await load();
                    })}>Nachricht löschen
                    </button>
                </div>
            </dialog>
        </>}
    </div>;
};
export default Admin;

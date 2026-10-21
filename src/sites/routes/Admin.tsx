import {useCallback, useEffect, useState} from "react";
import type {FormEvent} from "react";
import {useBlocker} from "react-router-dom";
import BigBox from "../../components/boxes/BigBox.tsx";
import Heading from "../../components/texts/Heading.tsx";
import ConfirmDeleteDialog from "../../elements/admin/ConfirmDeleteDialog.tsx";
import ArticleEditor from "../../elements/admin/ArticleEditor.tsx";
import ArticleSelector from "../../elements/admin/ArticleSelector.tsx";
import Inbox from "../../elements/admin/Inbox.tsx";
import LoginForm from "../../elements/admin/LoginForm.tsx";
import UnsavedChangesDialog from "../../elements/admin/UnsavedChangesDialog.tsx";
import {emptyArticle} from "../../logic/admin/article.ts";
import type {Message} from "../../logic/admin/types.ts";
import {useAdminArticles} from "../../logic/admin/useAdminArticles.ts";
import {useAdminInbox} from "../../logic/admin/useAdminInbox.ts";
import {useAdminSession} from "../../logic/admin/useAdminSession.ts";
import {useArticleEditor} from "../../logic/admin/useArticleEditor.ts";
import {useAsyncAction} from "../../logic/admin/useAsyncAction.ts";

const Admin = () => {
    const {busy, error, status, run, setStatus, setError} = useAsyncAction();
    const {authenticated, checking, login, logout} = useAdminSession(run, setError);
    const {articles, load: loadArticles, save: saveArticle, clear: clearArticles} = useAdminArticles();
    const {messages, load: loadInbox, markRead, remove, clear: clearInbox} = useAdminInbox();
    const editor = useArticleEditor({setError, setStatus});
    const [deleteMessage, setDeleteMessage] = useState<Message | null>(null);
    const blocker = useBlocker(editor.dirty);

    const load = useCallback(async () => {
        await Promise.all([loadArticles(), loadInbox()]);
    }, [loadArticles, loadInbox]);

    useEffect(() => {
        if (authenticated) void load();
        else {
            clearArticles();
            clearInbox();
        }
    }, [authenticated, load, clearArticles, clearInbox]);

    useEffect(() => {
        if (!editor.dirty) return;
        const prevent = (event: BeforeUnloadEvent) => {
            event.preventDefault();
        };
        window.addEventListener("beforeunload", prevent);
        return () => window.removeEventListener("beforeunload", prevent);
    }, [editor.dirty]);

    const handleSave = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        void run(async () => {
            const saved = await saveArticle(editor.article);
            editor.markSaved(saved);
            await load();
            setStatus(saved.published ? "Der Beitrag ist veröffentlicht." : "Der Entwurf wurde gespeichert.");
        });
    };
    const handleDiscard = () => {
        editor.discard(articles.find(item => item.id === editor.article.id) ?? emptyArticle());
    };
    const handleToggleRead = (message: Message) => {
        void run(async () => {
            await markRead(message.id, !message.read);
        });
    };
    const handleConfirmDelete = () => {
        void run(async () => {
            await remove(deleteMessage!.id);
            setDeleteMessage(null);
        });
    };

    if (checking) return <p role="status">Verwaltung wird geladen …</p>;
    return <div className="page-stack">
        <BigBox><Heading level={1}>Vereinsverwaltung</Heading><p>Beiträge bearbeiten und Nachrichten lesen.</p></BigBox>
        {error && <p className="review-note" role="alert">{error}</p>}
        {status && <p role="status">{status}</p>}
        {!authenticated ? <LoginForm busy={busy} onLogin={login}/> : <>
            <div className="action-row">
                <button disabled={busy || editor.dirty || editor.uploading} onClick={logout}>Abmelden</button>
                <span>{editor.dirty ? "Ungespeicherte Änderungen – bitte speichern oder verwerfen." : "Alle Änderungen gespeichert."}</span>
            </div>
            <ArticleSelector articles={articles} selectedId={editor.article.id} dirty={editor.dirty} busy={busy} uploading={editor.uploading} onSelect={editor.select} onDiscard={handleDiscard}/>
            <ArticleEditor article={editor.article} busy={busy} uploading={editor.uploading} textEditor={editor.textEditor} onUpdate={editor.update} onFormat={editor.format} onUpload={editor.insertImage} onSave={handleSave}/>
            <Inbox messages={messages} busy={busy} onToggleRead={handleToggleRead} onDeleteRequest={setDeleteMessage}/>
            <UnsavedChangesDialog blocker={blocker}/>
            <ConfirmDeleteDialog message={deleteMessage} busy={busy} onCancel={() => setDeleteMessage(null)} onConfirm={handleConfirmDelete}/>
        </>}
    </div>;
};
export default Admin;

import {useRef, useState} from "react";
import {api} from "../api/client.ts";
import type {Article} from "../news/newsSource.ts";
import {emptyArticle} from "./article.ts";
import {applyMarkdownFormat} from "./markdownFormat.ts";

type EditorFeedback = {
    setError: (message: string) => void;
    setStatus: (message: string) => void;
};

export const useArticleEditor = ({setError, setStatus}: EditorFeedback) => {
    const [article, setArticle] = useState<Article>(emptyArticle);
    const [dirty, setDirty] = useState(false);
    const [uploading, setUploading] = useState(false);
    const textEditor = useRef<HTMLTextAreaElement>(null);

    const update = <K extends keyof Article>(key: K, value: Article[K]) => {
        setArticle(current => ({...current, [key]: value}));
        setDirty(true);
    };
    const select = (next: Article) => {
        setArticle(next);
        setStatus("");
    };
    const discard = (saved: Article) => {
        setArticle(saved);
        setDirty(false);
        setStatus("Änderungen verworfen.");
    };
    const markSaved = (saved: Article) => {
        setArticle(saved);
        setDirty(false);
    };
    const format = (before: string, after = "") => {
        const input = textEditor.current;
        if (!input) return;
        const result = applyMarkdownFormat(article.content, {start: input.selectionStart, end: input.selectionEnd}, before, after);
        setArticle(current => ({...current, content: result.content}));
        setDirty(true);
        requestAnimationFrame(() => {
            input.focus();
            input.setSelectionRange(result.selectionStart, result.selectionEnd);
        });
    };
    const insertImage = async (file?: File) => {
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
            const image = await api<{url: string}>("/api/admin/uploads", {method: "POST", body: JSON.stringify({data})});
            setArticle(current => ({...current, content: `${current.content}\n\n![Bildbeschreibung ergänzen](${image.url})`}));
            setDirty(true);
            setStatus("Bild eingefügt. Bitte ergänzen Sie die Bildbeschreibung und speichern Sie den Beitrag.");
        } catch (error) {
            setError(error instanceof Error ? error.message : "Der Upload ist fehlgeschlagen.");
        } finally {
            setUploading(false);
        }
    };
    return {article, dirty, uploading, textEditor, update, select, discard, markSaved, format, insertImage};
};

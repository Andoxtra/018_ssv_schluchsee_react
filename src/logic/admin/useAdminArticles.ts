import {useCallback, useState} from "react";
import {api} from "../api/client.ts";
import type {Article} from "../news/newsSource.ts";

export const useAdminArticles = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const load = useCallback(async () => {
        setArticles(await api<Article[]>("/api/admin/news"));
    }, []);
    const save = async (article: Article): Promise<Article> => api<Article>(
        `/api/admin/news${article.id ? `/${article.id}` : ""}`,
        {method: article.id ? "PUT" : "POST", body: JSON.stringify(article)},
    );
    const clear = useCallback(() => setArticles([]), []);
    return {articles, load, save, clear};
};

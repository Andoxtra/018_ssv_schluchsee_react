import {useEffect, useState} from "react";
import {api} from "../api/client.ts";
import {sortArticles} from "./newsSource.ts";
import type {Article} from "./newsSource.ts";
export function useNews() {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    useEffect(() => {
        const controller = new AbortController();
        api<Article[]>("/api/news", {signal: controller.signal}).then(items => setArticles(sortArticles(items))).catch(error => {
            if (!controller.signal.aborted) setError(error.message);
        }).finally(() => {if (!controller.signal.aborted) setLoading(false);});
        return () => controller.abort();
    }, []);
    return {articles, loading, error};
}

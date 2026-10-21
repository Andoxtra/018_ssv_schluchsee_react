import type {Article} from "../news/newsSource.ts";

export const uniqueAuthors = (articles: Article[]): string[] => {
    const authors = new Set<string>();
    for (const article of articles) {
        const author = article.author.trim();
        if (author) authors.add(author);
    }
    return [...authors].sort((a, b) => a.localeCompare(b));
};

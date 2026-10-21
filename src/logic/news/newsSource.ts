export type Article = {
    id: string;
    title: string;
    date: string;
    author: string;
    preview: string;
    content: string;
    published: boolean;
    reviewNote: string;
    eventDates: string[];
    version: number;
};

export function parseNewsFile(path: string, source: string): Article {
    const id = path.split('/').pop()?.match(/^(\d+)-/)?.[1];
    const match = source.replace(/\r\n/g, '\n').match(/^# (.+)\n\s*---\n([\s\S]+?)\n---\n([\s\S]*)$/);
    if (!id || !match) throw new Error(`Invalid news source: ${path}`);
    const metadata = Object.fromEntries(match[2].split('\n').map(line => {
        const colon = line.indexOf(':');
        if (colon < 1) throw new Error(`Invalid news metadata: ${path}`);
        return [line.slice(0, colon), line.slice(colon + 1).trim()];
    }));
    if (!metadata.author || !metadata.preview || !/^\d{4}-\d{2}-\d{2}$/.test(metadata.date) || Number.isNaN(Date.parse(metadata.date))) {
        throw new Error(`Missing news metadata: ${path}`);
    }
    return {id, title: match[1], date: metadata.date, author: metadata.author,
        preview: metadata.preview, content: match[3].trim(), published: true,
        reviewNote: metadata.reviewNote ?? '', eventDates: metadata.eventDates?.split(',').map(value => value.trim()) ?? [], version: 1};
}

const compareIds = (a: string, b: string): number => {
    const numA = Number(a);
    const numB = Number(b);
    if (Number.isInteger(numA) && Number.isInteger(numB)) return numB - numA;
    return b.localeCompare(a);
};

export const sortArticles = (articles: Article[]): Article[] => [...articles].sort((a, b) => b.date.localeCompare(a.date) || compareIds(a.id, b.id));
export const isPastEvent = (article: Article, today: string): boolean => article.eventDates.length > 0 && article.eventDates.every(date => date < today);

export const localDate = (date = new Date()): string => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

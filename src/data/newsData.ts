import {DateClass} from "../logic/date/DateClass.ts";
import {parseNewsFile, sortArticles} from "../logic/news/newsSource.ts";
import type {Article} from "../logic/news/newsSource.ts";
import type {NewsItemProps} from "../elements/NewsItem/props/NewsItemProps.ts";
const sources = import.meta.glob<string>("./news/*.md", {query: "?raw", import: "default", eager: true});
export const toNewsItem = (article: Article): NewsItemProps => ({
    uuid: article.id, title: article.title, creationDate: new DateClass(article.date), author: article.author,
    previewText: article.preview, contentAsMarkdown: article.content, reviewNote: article.reviewNote,
    eventDates: article.eventDates,
});
export const seedArticles = sortArticles(Object.entries(sources).map(([path, source]) => parseNewsFile(path, source)));
export const newsItems = seedArticles.map(toNewsItem);

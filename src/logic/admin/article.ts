import type {Article} from "../news/newsSource.ts";
import {localDate} from "../news/newsSource.ts";

export const emptyArticle = (): Article => ({
    id: "",
    title: "",
    author: "",
    date: localDate(),
    preview: "",
    content: "",
    published: false,
    reviewNote: "",
    eventDates: [],
    version: 0,
});

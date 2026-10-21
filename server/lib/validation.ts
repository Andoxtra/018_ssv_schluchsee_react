import {HttpError} from "./http.ts";
import type {ArticleInput} from "../types.ts";

export const LIMITS = {
    title: 200,
    author: 100,
    preview: 600,
    content: 100000,
    reviewNote: 600,
    name: 100,
    email: 254,
    subject: 200,
    message: 10000,
    maxEventDates: 20,
} as const;

export const text = (value: unknown, max: number, required = true): string => {
    if (typeof value !== "string" || value.length > max || (required && !value.trim())) throw new HttpError(400, "Bitte prüfen Sie die Eingaben.");
    return value.trim();
};

export const validDate = (value: unknown): boolean => typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(value)) && new Date(value).toISOString().slice(0, 10) === value;

export const articleInput = (body: Record<string, unknown>): ArticleInput => {
    const date = text(body.date, 10);
    if (!validDate(date) || typeof body.published !== "boolean" || !Array.isArray(body.eventDates) || body.eventDates.length > LIMITS.maxEventDates || !body.eventDates.every(d => typeof d === "string" && validDate(d))) throw new HttpError(400, "Datum oder Veröffentlichungsstatus ist ungültig.");
    return {
        title: text(body.title, LIMITS.title),
        date,
        author: text(body.author, LIMITS.author),
        preview: text(body.preview, LIMITS.preview),
        content: text(body.content, LIMITS.content),
        published: body.published,
        reviewNote: text(body.reviewNote ?? "", LIMITS.reviewNote, false),
        eventDates: body.eventDates as string[],
    };
};

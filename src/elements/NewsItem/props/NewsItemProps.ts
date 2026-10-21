import type {DateClass} from "../../../logic/date/DateClass.ts";

export type NewsItemProps = {
    reviewNote?: string;
    eventDates?: string[];
    uuid: string;
    title: string;
    creationDate: DateClass;
    author: string;
    previewText: string;
    contentAsMarkdown: string;
}

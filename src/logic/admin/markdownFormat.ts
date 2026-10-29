export type TextSelection = {
    start: number;
    end: number;
};

export type MarkdownFormatResult = {
    content: string;
    selectionStart: number;
    selectionEnd: number;
};

export const applyMarkdownFormat = (
    content: string,
    selection: TextSelection,
    before: string,
    after = "",
): MarkdownFormatResult => {
    const {start, end} = selection;
    const selected = content.slice(start, end) || "Text";
    return {
        content: content.slice(0, start) + before + selected + after + content.slice(end),
        selectionStart: start + before.length,
        selectionEnd: start + before.length + selected.length,
    };
};

export const applyLinkFormat = (content: string, selection: TextSelection): MarkdownFormatResult => {
    const {start, end} = selection;
    const selected = content.slice(start, end) || "Text";
    const url = "https://";
    const prefix = `[${selected}](${url}`;
    const urlStart = start + selected.length + 3;
    return {
        content: content.slice(0, start) + prefix + ")" + content.slice(end),
        selectionStart: urlStart,
        selectionEnd: urlStart + url.length,
    };
};

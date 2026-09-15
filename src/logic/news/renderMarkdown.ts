import markdownit from "markdown-it";

const renderer = markdownit({html: false, linkify: true, typographer: true});
export const renderMarkdown = (markdown: string): string => renderer.render(markdown)
    .replace(/(<\/?(?:table|thead|tbody|tr|th|td)\b[^>]*>)\s+(?=<)/g, "$1");

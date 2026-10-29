import type {Handler} from "../types.ts";
import {routeMeta} from "../../src/config/seo.ts";

const escapeXml = (value: string): string => value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

export const sitemap: Handler = ({res, db, origin}) => {
    const urls = Object.keys(routeMeta).map(path => `${origin}${path}`);
    for (const article of db.listArticles()) {
        if (article.published) urls.push(`${origin}/neuigkeiten/${article.id}`);
    }
    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(url => `  <url><loc>${escapeXml(url)}</loc></url>`).join("\n")}\n</urlset>\n`;
    res.writeHead(200, {"Content-Type": "application/xml; charset=utf-8"});
    res.end(xml);
};

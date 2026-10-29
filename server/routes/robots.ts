import type {Handler} from "../types.ts";

export const robots: Handler = ({res, origin}) => {
    const body = `User-agent: *\nDisallow: /admin\nDisallow: /api/\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`;
    res.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
    res.end(body);
};

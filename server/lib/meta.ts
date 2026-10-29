import {SITE_DESCRIPTION, SITE_NAME, staticMeta} from "../../src/config/seo.ts";
import {organizationJsonLd} from "../../src/logic/seo/jsonLd.ts";

const esc = (value: string): string => value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export type ArticleMeta = {title: string; description: string};

export const injectHead = (html: string, path: string, origin: string, article?: ArticleMeta): string => {
    const meta = article ?? staticMeta(path);
    const title = meta?.title ?? SITE_NAME;
    const description = meta?.description ?? SITE_DESCRIPTION;
    const url = origin + path;
    const noindex = path.startsWith("/admin") || path.startsWith("/testing");
    const tags = [
        `<title>${esc(title)}</title>`,
        `<meta name="description" content="${esc(description)}">`,
        `<meta name="robots" content="${noindex ? "noindex, nofollow" : "index, follow"}">`,
        `<link rel="canonical" href="${esc(url)}">`,
        `<meta property="og:title" content="${esc(title)}">`,
        `<meta property="og:description" content="${esc(description)}">`,
        `<meta property="og:type" content="${article ? "article" : "website"}">`,
        `<meta property="og:url" content="${esc(url)}">`,
        `<meta property="og:image" content="${esc(origin + "/og-image.png")}">`,
        `<meta property="og:site_name" content="${esc(SITE_NAME)}">`,
        `<meta name="twitter:card" content="summary">`,
        `<meta name="twitter:title" content="${esc(title)}">`,
        `<meta name="twitter:description" content="${esc(description)}">`,
    ];
    if (path === "/") tags.push(`<script type="application/ld+json" id="seo-organization">${JSON.stringify(organizationJsonLd(origin))}</script>`);
    const stripped = html
        .replace(/<title>[^<]*<\/title>/, "")
        .replace(/<meta\s+name="description"[^>]*>/g, "")
        .replace(/<meta\s+name="robots"[^>]*>/g, "")
        .replace(/<link\s+rel="canonical"[^>]*>/g, "")
        .replace(/<meta\s+property="og:[^>]*>/g, "")
        .replace(/<meta\s+name="twitter:[^>]*>/g, "")
        .replace(/<script\s+type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/g, "");
    return stripped.replace("</head>", `${tags.join("\n")}\n</head>`);
};

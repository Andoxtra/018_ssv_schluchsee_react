import {useEffect} from "react";
import {SITE_NAME} from "../../config/seo.ts";

export type PageMetaOptions = {
    title: string;
    description: string;
    path?: string;
    noindex?: boolean;
    ogType?: string;
    ogImage?: string;
};

const upsertMeta = (attr: "name" | "property", key: string, content: string): void => {
    let element = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
    if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attr, key);
        document.head.appendChild(element);
    }
    element.setAttribute("content", content);
};

const upsertCanonical = (href: string): void => {
    let element = document.head.querySelector<HTMLLinkElement>("link[rel='canonical']");
    if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", "canonical");
        document.head.appendChild(element);
    }
    element.setAttribute("href", href);
};

export const usePageMeta = ({title, description, path, noindex = false, ogType = "website", ogImage}: PageMetaOptions): void => {
    useEffect(() => {
        const origin = window.location.origin;
        const url = origin + (path ?? window.location.pathname);
        document.title = title;
        upsertMeta("name", "description", description);
        upsertMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow");
        upsertMeta("property", "og:title", title);
        upsertMeta("property", "og:description", description);
        upsertMeta("property", "og:type", ogType);
        upsertMeta("property", "og:url", url);
        upsertMeta("property", "og:site_name", SITE_NAME);
        if (ogImage) upsertMeta("property", "og:image", origin + ogImage);
        upsertMeta("name", "twitter:card", ogImage ? "summary_large_image" : "summary");
        upsertMeta("name", "twitter:title", title);
        upsertMeta("name", "twitter:description", description);
        upsertCanonical(url);
    }, [title, description, path, noindex, ogType, ogImage]);
};

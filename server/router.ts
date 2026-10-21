import type {Handler} from "./types.ts";

export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "HEAD";

export type Route = {
    method: HttpMethod;
    pattern: string;
    handler: Handler;
};

export type RouteMatch = {
    handler: Handler;
    params: Record<string, string>;
};

export const matchRoute = (routes: Route[], method: string, path: string): RouteMatch | undefined => {
    for (const route of routes) {
        if (route.method !== method) continue;
        const params = matchPath(route.pattern, path);
        if (params) return {handler: route.handler, params};
    }
    return undefined;
};

const matchPath = (pattern: string, path: string): Record<string, string> | null => {
    const patternParts = pattern.split("/").filter(Boolean);
    const pathParts = path.split("/").filter(Boolean);
    if (patternParts.length !== pathParts.length) return null;
    const params: Record<string, string> = {};
    for (let i = 0; i < patternParts.length; i++) {
        const part = patternParts[i];
        if (part.startsWith(":")) params[part.slice(1)] = pathParts[i];
        else if (part !== pathParts[i]) return null;
    }
    return params;
};

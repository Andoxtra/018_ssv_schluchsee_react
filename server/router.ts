import type {Handler} from "./types.ts";

export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "HEAD";

export type Route = {
    method: HttpMethod;
    pattern: string;
    handler: Handler;
    /** Requires an administrator session; enforced after matching so the guard follows the route, not the raw URL. */
    auth?: true;
};

export type RouteMatch = {
    handler: Handler;
    params: Record<string, string>;
    auth: boolean;
};

export const matchRoute = (routes: Route[], method: string, path: string): RouteMatch | undefined => {
    for (const route of routes) {
        if (route.method !== method) continue;
        const params = matchPath(route.pattern, path);
        if (params) return {handler: route.handler, params, auth: route.auth === true};
    }
    return undefined;
};

const segments = (path: string): string[] => path.split("/").slice(1);

// Empty segments ("/api//admin") never match: otherwise a path could reach a route
// while bypassing any check that inspects the raw URL.
const matchPath = (pattern: string, path: string): Record<string, string> | null => {
    const patternParts = segments(pattern);
    const pathParts = segments(path);
    if (patternParts.length !== pathParts.length || pathParts.includes("")) return null;
    const params: Record<string, string> = {};
    for (let i = 0; i < patternParts.length; i++) {
        const part = patternParts[i];
        if (part.startsWith(":")) params[part.slice(1)] = pathParts[i];
        else if (part !== pathParts[i]) return null;
    }
    return params;
};

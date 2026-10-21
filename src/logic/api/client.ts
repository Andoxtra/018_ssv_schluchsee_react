export async function api<T>(path: string, options?: RequestInit): Promise<T> {
    const response = await fetch(path, {...options, headers: {...(options?.body ? {"Content-Type": "application/json"} : {}), ...options?.headers}});
    const data = await response.json().catch(() => ({error: "Der Server ist nicht erreichbar."}));
    if (!response.ok) throw new Error(data.error ?? "Die Anfrage ist fehlgeschlagen.");
    return data as T;
}

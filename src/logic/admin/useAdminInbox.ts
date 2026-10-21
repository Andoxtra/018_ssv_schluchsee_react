import {useCallback, useState} from "react";
import {api} from "../api/client.ts";
import type {Message} from "./types.ts";

export const useAdminInbox = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const load = useCallback(async () => {
        setMessages(await api<Message[]>("/api/admin/messages"));
    }, []);
    const markRead = async (id: string, read: boolean) => {
        await api(`/api/admin/messages/${id}`, {method: "PATCH", body: JSON.stringify({read})});
        await load();
    };
    const remove = async (id: string) => {
        await api(`/api/admin/messages/${id}`, {method: "DELETE"});
        await load();
    };
    const clear = useCallback(() => setMessages([]), []);
    return {messages, load, markRead, remove, clear};
};

import {useEffect, useState} from "react";
import type {FormEvent} from "react";
import {api} from "../api/client.ts";

export const useAdminSession = (
    run: (action: () => Promise<void>) => void,
    setError: (message: string) => void,
) => {
    const [authenticated, setAuthenticated] = useState(false);
    const [checking, setChecking] = useState(true);

    useEffect(() => {
        let active = true;
        api<{authenticated: boolean}>("/api/session")
            .then(session => {
                if (active) setAuthenticated(session.authenticated);
            })
            .catch(error => {
                if (active) setError(error instanceof Error ? error.message : "Die Anfrage ist fehlgeschlagen.");
            })
            .finally(() => {
                if (active) setChecking(false);
            });
        return () => {
            active = false;
        };
    }, [setError]);

    const login = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = Object.fromEntries(new FormData(event.currentTarget));
        void run(async () => {
            await api("/api/login", {method: "POST", body: JSON.stringify(data)});
            setAuthenticated(true);
        });
    };

    const logout = () => {
        void run(async () => {
            await api("/api/logout", {method: "POST"});
            setAuthenticated(false);
        });
    };

    return {authenticated, checking, login, logout};
};

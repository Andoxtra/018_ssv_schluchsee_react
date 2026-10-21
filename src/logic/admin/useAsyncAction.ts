import {useState} from "react";

export const useAsyncAction = () => {
    const [busy, setBusy] = useState(false);
    const [status, setStatus] = useState("");
    const [error, setError] = useState("");
    const run = async (action: () => Promise<void>) => {
        setBusy(true);
        setError("");
        setStatus("");
        try {
            await action();
        } catch (error) {
            setError(error instanceof Error ? error.message : "Die Aktion ist fehlgeschlagen.");
        } finally {
            setBusy(false);
        }
    };
    return {busy, status, error, run, setStatus, setError};
};

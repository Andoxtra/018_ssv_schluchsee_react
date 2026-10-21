import {useEffect, useRef} from "react";
import type {Message} from "../../logic/admin/types.ts";

type ConfirmDeleteDialogProps = {
    message: Message | null;
    busy: boolean;
    onCancel: () => void;
    onConfirm: () => void;
};

const ConfirmDeleteDialog = ({message, busy, onCancel, onConfirm}: ConfirmDeleteDialogProps) => {
    const dialog = useRef<HTMLDialogElement>(null);
    useEffect(() => {
        if (message) dialog.current?.showModal();
        else dialog.current?.close();
    }, [message]);
    return (
        <dialog ref={dialog} onCancel={onCancel} aria-labelledby="delete-message-title">
            <h2 id="delete-message-title">Nachricht löschen?</h2>
            <p>„{message?.subject}“ wird dauerhaft aus dem Posteingang entfernt.</p>
            <div className="action-row">
                <button autoFocus onClick={onCancel}>Abbrechen</button>
                <button disabled={busy} onClick={onConfirm}>Nachricht löschen</button>
            </div>
        </dialog>
    );
};

export default ConfirmDeleteDialog;

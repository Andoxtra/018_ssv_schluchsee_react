import {useEffect, useRef} from "react";
import type {ReactNode} from "react";

type ConfirmDialogProps = {
    open: boolean;
    title: string;
    titleId: string;
    message: ReactNode;
    confirmLabel: string;
    busy: boolean;
    onCancel: () => void;
    onConfirm: () => void;
};

const ConfirmDialog = ({open, title, titleId, message, confirmLabel, busy, onCancel, onConfirm}: ConfirmDialogProps) => {
    const dialog = useRef<HTMLDialogElement>(null);
    useEffect(() => {
        if (open) dialog.current?.showModal();
        else dialog.current?.close();
    }, [open]);
    return (
        <dialog ref={dialog} onCancel={onCancel} aria-labelledby={titleId}>
            <h2 id={titleId}>{title}</h2>
            <p>{message}</p>
            <div className="action-row">
                <button autoFocus onClick={onCancel}>Abbrechen</button>
                <button disabled={busy} onClick={onConfirm}>{confirmLabel}</button>
            </div>
        </dialog>
    );
};

export default ConfirmDialog;

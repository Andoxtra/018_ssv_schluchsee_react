import {useEffect, useRef} from "react";
import type {Blocker} from "react-router-dom";

type UnsavedChangesDialogProps = {
    blocker: Blocker;
};

const UnsavedChangesDialog = ({blocker}: UnsavedChangesDialogProps) => {
    const dialog = useRef<HTMLDialogElement>(null);
    useEffect(() => {
        const element = dialog.current;
        if (blocker.state === "blocked" && !element?.open) element?.showModal();
        else if (blocker.state !== "blocked") element?.close();
    }, [blocker.state]);
    return (
        <dialog ref={dialog} onCancel={() => blocker.reset?.()} aria-labelledby="unsaved-title">
            <h2 id="unsaved-title">Ungespeicherte Änderungen</h2>
            <p>Möchten Sie Ihre Änderungen verwerfen und die Seite verlassen?</p>
            <div className="action-row">
                <button autoFocus onClick={() => blocker.reset?.()}>Auf Seite bleiben</button>
                <button onClick={() => blocker.proceed?.()}>Verwerfen & weiter</button>
            </div>
        </dialog>
    );
};

export default UnsavedChangesDialog;

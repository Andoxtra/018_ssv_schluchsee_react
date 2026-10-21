import MediumBox from "../../components/boxes/MediumBox.tsx";
import Heading from "../../components/texts/Heading.tsx";
import type {Message} from "../../logic/admin/types.ts";

type InboxProps = {
    messages: Message[];
    busy: boolean;
    onToggleRead: (message: Message) => void;
    onDeleteRequest: (message: Message) => void;
};

const Inbox = ({messages, busy, onToggleRead, onDeleteRequest}: InboxProps) => (
    <MediumBox>
        <Heading level={2}>Posteingang ({messages.filter(message => !message.read).length} ungelesen)</Heading>
        <p>Nachrichten werden hier gespeichert. Bitte antworten Sie über Ihr E-Mail-Programm und löschen Sie erledigte Nachrichten, sobald sie nicht mehr benötigt werden.</p>
        {!messages.length && <p>Keine Nachrichten vorhanden.</p>}
        {messages.map(message => (
            <details key={message.id} className="faq-item">
                <summary>{message.read ? "Gelesen" : "Neu"}: {message.subject} · {message.name}</summary>
                <div>
                    <p>{new Date(message.createdAt).toLocaleString("de-DE")}</p>
                    <a href={`mailto:${message.email}`}>{message.email}</a>
                    <p style={{whiteSpace: "pre-wrap"}}>{message.message}</p>
                    <div className="action-row">
                        <button disabled={busy} onClick={() => onToggleRead(message)}>{message.read ? "Als ungelesen markieren" : "Als gelesen markieren"}</button>
                        <button onClick={() => onDeleteRequest(message)}>Löschen …</button>
                    </div>
                </div>
            </details>
        ))}
    </MediumBox>
);

export default Inbox;

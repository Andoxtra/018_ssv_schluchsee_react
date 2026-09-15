import {useState} from "react";
import type {FormEvent} from "react";
import {Link} from "react-router-dom";
import BigBox from "../../components/boxes/BigBox.tsx";
import MediumBox from "../../components/boxes/MediumBox.tsx";
import Heading from "../../components/texts/Heading.tsx";
import {api} from "../../logic/api/client.ts";
const ContactForm = () => {
    const [busy, setBusy] = useState(false);
    const [error, setError] = useState("");
    const [sent, setSent] = useState(false);
    const submit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const data = new FormData(form);
        setBusy(true); setError("");
        try {
            await api("/api/contact", {method: "POST", body: JSON.stringify({...Object.fromEntries(data), consent: data.get("consent") === "on"})});
            setSent(true); form.reset();
        } catch (error) {setError(error instanceof Error ? error.message : "Die Nachricht konnte nicht gespeichert werden.");}
        finally {setBusy(false);}
    };
    return <><BigBox><Heading level={1}>Nachricht an den Verein</Heading><p>Fragen zur Mitgliedschaft, zum Training oder zu Ihrem Besuch.</p></BigBox><MediumBox>
        {sent ? <div role="status"><Heading level={2}>Vielen Dank für Ihre Nachricht</Heading><p>Ihre Nachricht wurde gespeichert und kann von der Vereinsverwaltung gelesen werden. Eine Gastanmeldung gilt erst nach persönlicher Bestätigung als angenommen.</p><Link to="/kontakt">Zurück zu Kontakt</Link></div> : <form className="site-form" onSubmit={submit}><fieldset disabled={busy} className="form-fields">
            <label>Name<input name="name" autoComplete="name" required maxLength={100}/></label>
            <label>E-Mail<input name="email" type="email" autoComplete="email" required maxLength={254}/></label>
            <label>Betreff<input name="subject" required maxLength={200}/></label>
            <label>Nachricht<textarea name="message" required maxLength={10000} rows={7}/></label>
            <label className="checkbox-label"><input name="consent" type="checkbox" required/>Ich habe den Datenschutzhinweis gelesen und stimme der Speicherung meiner Angaben zur Bearbeitung der Anfrage zu.</label>
            <p><Link to="/datenschutz">Datenschutzhinweis zum Kontaktformular</Link></p>
            {error && <p role="alert">{error}</p>}<button type="submit" disabled={busy}>{busy ? "Wird gesendet …" : "Nachricht senden"}</button>
        </fieldset></form>}
    </MediumBox></>;
};
export default ContactForm;

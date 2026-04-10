import type {ReactNode} from "react";
import {useState} from "react";
import Heading from "../../components/texts/Heading.tsx";
import NormalText from "../../components/texts/NormalText.tsx";
import MediumBox from "../../components/boxes/MediumBox.tsx";
import BigBox from "../../components/boxes/BigBox.tsx";
import BaseInput from "../../components/inputs/BaseInput.tsx";
import TextArea from "../../components/inputs/TextArea.tsx";
import PrimaryButton from "../../components/buttons/PrimaryButton.tsx";

const Contact = (): ReactNode => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = () => {
        if (name && email && message) {
            console.log("Message sent:", {name, email, message});
            alert("Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.");
            setName("");
            setEmail("");
            setMessage("");
        } else {
            alert("Bitte füllen Sie alle Felder aus.");
        }
    };

    return (
        <>
            <BigBox>
                <Heading level={1}>Kontakt</Heading>
            </BigBox>

            <MediumBox>
                <Heading level={2}>Kontaktinformationen</Heading>
                <NormalText>
                    <strong>SSV Schluchsee</strong><br/>
                    <br/>
                    <strong>Adresse:</strong><br/>
                    Schluchsee<br/>
                    78136 Schonachbach<br/>
                    Deutschland<br/>
                    <br/>
                    <strong>Telefon:</strong><br/>
                    +49 (0) 7656 123456<br/>
                    <br/>
                    <strong>E-Mail:</strong><br/>
                    info@ssv-schluchsee.de<br/>
                    <br/>
                    <strong>Website:</strong><br/>
                    www.ssv-schluchsee.de
                </NormalText>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>Öffnungszeiten Vereinsheim</Heading>
                <NormalText>
                    <strong>Montag - Freitag:</strong> 17:00 - 22:00 Uhr<br/>
                    <strong>Samstag:</strong> 13:00 - 22:00 Uhr<br/>
                    <strong>Sonntag:</strong> 10:00 - 18:00 Uhr<br/>
                    <br/>
                    An Feiertagen können abweichende Öffnungszeiten gelten.
                </NormalText>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>Kontaktformular</Heading>
                <NormalText>
                    Senden Sie uns eine Nachricht und wir werden uns schnellstmöglich bei Ihnen melden.
                </NormalText>

                <div style={{marginTop: 20, marginBottom: 10}}>
                    <NormalText><strong>Name:</strong></NormalText>
                    <BaseInput
                        placeholder="Ihr Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div style={{marginBottom: 10}}>
                    <NormalText><strong>E-Mail:</strong></NormalText>
                    <BaseInput
                        placeholder="Ihre E-Mail-Adresse"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div style={{marginBottom: 10}}>
                    <NormalText><strong>Nachricht:</strong></NormalText>
                    <TextArea
                        placeholder="Ihre Nachricht..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={5}
                    />
                </div>

                <div style={{marginTop: 20}} onClick={handleSubmit}>
                    <PrimaryButton text="Nachricht senden" linkTo="#" />
                </div>
            </MediumBox>
        </>
    )
};

export default Contact;
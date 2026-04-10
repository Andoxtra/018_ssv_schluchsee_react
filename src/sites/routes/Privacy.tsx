import type {ReactNode} from "react";
import Heading from "../../components/texts/Heading.tsx";
import NormalText from "../../components/texts/NormalText.tsx";
import MediumBox from "../../components/boxes/MediumBox.tsx";
import BigBox from "../../components/boxes/BigBox.tsx";

const Privacy = (): ReactNode => {
    return (
        <>
            <BigBox>
                <Heading level={1}>Datenschutz</Heading>
            </BigBox>

            <MediumBox>
                <Heading level={2}>Datenschutzerklärung</Heading>
                <NormalText>
                    Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. 
                    Wir behandeln Ihre Daten vertraulich und in Übereinstimmung mit den geltenden 
                    Datenschutzgesetzen.
                </NormalText>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>Erfassung von Daten</Heading>
                <NormalText>
                    <strong>Daten bei Kontaktaufnahme:</strong><br/>
                    Wenn Sie uns per E-Mail oder über unser Kontaktformular kontaktieren, 
                    speichern wir die von Ihnen angegebenen Daten um Ihre Anfrage zu bearbeiten 
                    und um etwaige Anschlussfragen zu stellen.
                </NormalText>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>Cookies</Heading>
                <NormalText>
                    Diese Webseite verwendet keine Tracking-Cookies. Möglicherweise werden 
                    technisch notwendige Session-Cookies verwendet, um die Funktionalität 
                    der Website zu gewährleisten.
                </NormalText>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>Ihre Rechte</Heading>
                <NormalText>
                    Sie haben das Recht, kostenlos Auskunft über die bei uns gespeicherten 
                    Daten zu erhalten und deren Berichtigung oder Löschung zu fordern. 
                    Nutzen Sie hierzu bitte unser Kontaktformular.
                </NormalText>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>Kontakt zum Datenschutz</Heading>
                <NormalText>
                    Bei Fragen zu unseren Datenschutzmaßnahmen kontaktieren Sie bitte:<br/>
                    <br/>
                    SSV Schluchsee<br/>
                    Datenschutzbeauftragter<br/>
                    info@ssv-schluchsee.de
                </NormalText>
            </MediumBox>
        </>
    )
};

export default Privacy;


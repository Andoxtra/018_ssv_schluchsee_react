import type {ReactNode} from "react";
import Heading from "../../components/texts/Heading.tsx";
import Paragraph from "../../components/texts/Paragraph.tsx";
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
                <Paragraph>
                    Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. 
                    Wir behandeln Ihre Daten vertraulich und in Übereinstimmung mit den geltenden 
                    Datenschutzgesetzen.
                </Paragraph>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>Erfassung von Daten</Heading>
                <Paragraph>
                    <strong>Daten bei Kontaktaufnahme:</strong><br/>
                    Wenn Sie uns per E-Mail oder über unser Kontaktformular kontaktieren, 
                    speichern wir die von Ihnen angegebenen Daten um Ihre Anfrage zu bearbeiten 
                    und um etwaige Anschlussfragen zu stellen.
                </Paragraph>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>Cookies</Heading>
                <Paragraph>
                    Diese Webseite verwendet keine Tracking-Cookies. Möglicherweise werden 
                    technisch notwendige Session-Cookies verwendet, um die Funktionalität 
                    der Website zu gewährleisten.
                </Paragraph>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>Ihre Rechte</Heading>
                <Paragraph>
                    Sie haben das Recht, kostenlos Auskunft über die bei uns gespeicherten 
                    Daten zu erhalten und deren Berichtigung oder Löschung zu fordern. 
                    Nutzen Sie hierzu bitte unser Kontaktformular.
                </Paragraph>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>Kontakt zum Datenschutz</Heading>
                <Paragraph>
                    Bei Fragen zu unseren Datenschutzmaßnahmen kontaktieren Sie bitte:<br/>
                    <br/>
                    SSV Schluchsee<br/>
                    Datenschutzbeauftragter<br/>
                    info@ssv-schluchsee.de
                </Paragraph>
            </MediumBox>
        </>
    )
};

export default Privacy;


import type {ReactNode} from "react";
import Heading from "../../components/texts/Heading.tsx";
import Paragraph from "../../components/texts/Paragraph.tsx";
import MediumBox from "../../components/boxes/MediumBox.tsx";
import BigBox from "../../components/boxes/BigBox.tsx";

const Imprint = (): ReactNode => {
    return (
        <>
            <BigBox>
                <Heading level={1}>Impressum</Heading>
            </BigBox>

            <MediumBox>
                <Heading level={2}>Angaben gemäß § 5 TMG</Heading>
                <Paragraph>
                    <strong>Verantwortlich für den Inhalt:</strong><br/>
                    SSV Schluchsee<br/>
                    Schluchseeweg 25<br/>
                    78136 Schonachbach<br/>
                    Deutschland<br/>
                    <br/>
                    <strong>Vertreten durch:</strong><br/>
                    Max Mustermann (Vorsitzender)<br/>
                </Paragraph>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>Kontakt</Heading>
                <Paragraph>
                    <strong>Telefon:</strong> +49 (0) 7656 123456<br/>
                    <strong>E-Mail:</strong> info@ssv-schluchsee.de
                </Paragraph>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>Registereintrag</Heading>
                <Paragraph>
                    <strong>Amtsgericht Freiburg</strong><br/>
                    Registereintrag: Vereinsregister<br/>
                    VR Nummer: 123456
                </Paragraph>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>Haftungsausschluss</Heading>
                <Paragraph>
                    <strong>Haftung für Inhalte</strong><br/>
                    Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. 
                    Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir 
                    jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG 
                    für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. 
                    Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, 
                    übermittelte oder gespeicherte fremde Informationen zu überwachen.
                </Paragraph>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>Urheberrecht</Heading>
                <Paragraph>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten 
                    unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, 
                    Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes 
                    bedürfen der schriftlichen Zustimmung des Autors oder Urhebers.
                </Paragraph>
            </MediumBox>
        </>
    )
};

export default Imprint;


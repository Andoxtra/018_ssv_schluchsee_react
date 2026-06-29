import type {ReactNode} from "react";

import BigBox from "../../components/boxes/BigBox.tsx";
import MediumBox from "../../components/boxes/MediumBox.tsx";
import Heading from "../../components/texts/Heading.tsx";

const Law = (): ReactNode => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <BigBox>
                <div style={{ textAlign: "center", padding: "24px 0" }}>
                    <Heading level={1}>Gesetze und Anforderungen</Heading>
                    <p style={{ fontSize: "1rem", lineHeight: 1.7, maxWidth: 600, margin: "8px auto 0", color: "#5a5a5a" }}>
                        Voraussetzungen für den Erwerb einer Waffenbesitzkarte (WBK)
                    </p>
                </div>
            </BigBox>

            <MediumBox>
                <Heading level={2}>
                    Mindestalter
                </Heading>
                <div style={{ lineHeight: 1.8 }}>
                    <p>Der Bewerber muss das 18. Lebensjahr vollendet haben. Ausnahmen sind auf Antrag möglich, wenn öffentliche Interessen nicht entgegenstehen.</p>
                </div>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>
                    Körperliche Eignung
                </Heading>
                <div style={{ lineHeight: 1.8 }}>
                    <p>Der Bewerber muss die erforderliche körperliche Eignung besitzen. Dies bedeutet unter anderem, dass die geistige Eignung zur Ausübung des Schießsports vorhanden sein muss.</p>
                </div>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>
                    Zuverlässigkeit
                </Heading>
                <div style={{ lineHeight: 1.8 }}>
                    <p style={{ marginBottom: 12 }}>Dies ist wohl der häufigste Ablehnungsgrund überhaupt. Der Nachweis der Zuverlässigkeit ist nicht erbracht, wenn der Bewerber:</p>
                    <ul style={{ paddingLeft: 20, marginBottom: 0 }}>
                        <li style={{ marginBottom: 6 }}>Offensichtlich Schusswaffen und Munition missbräuchlich verwenden will</li>
                        <li style={{ marginBottom: 6 }}>Straftaten gegen die öffentliche Sicherheit und Ordnung (z. B. Landesverrat, Landfriedensbruch) begangen hat</li>
                        <li style={{ marginBottom: 6 }}>Mindestens 2-mal wegen einer Straftat in Zusammenhang mit Trunkenheit rechtskräftig verurteilt wurde</li>
                        <li style={{ marginBottom: 6 }}>Innerhalb der letzten 5 Jahre rechtskräftig wegen Körperverletzung, Vergewaltigung, Hausfriedensbruch, Widerstand gegen die Staatsgewalt, Angriff auf Leib und Leben eines Anderen oder einer anderen gemeingefährlichen Straftat verurteilt wurde</li>
                        <li style={{ marginBottom: 6 }}>Geschäftsunfähig oder in seiner Geschäftsfähigkeit beschränkt ist</li>
                        <li style={{ marginBottom: 6 }}>Trunksüchtig oder rauschmittelsüchtig ist</li>
                        <li style={{ marginBottom: 6 }}>Geisteskrank oder geistesschwach ist</li>
                    </ul>
                </div>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>
                    Sachkunde
                </Heading>
                <div style={{ lineHeight: 1.8 }}>
                    <p style={{ marginBottom: 12 }}>Der Bewerber muss einen Nachweis der Sachkunde gemäß § 31 des Waffengesetzes erbringen. Dieser Nachweis wird im SSV mittels einer Prüfung erbracht. Inhalte dieser Prüfung sind:</p>
                    <ul style={{ paddingLeft: 20, marginBottom: 12 }}>
                        <li style={{ marginBottom: 6 }}>Waffengesetz</li>
                        <li style={{ marginBottom: 6 }}>Umgang mit Schusswaffen</li>
                        <li style={{ marginBottom: 6 }}>Ballistik</li>
                        <li style={{ marginBottom: 6 }}>Notwehrparagraphen</li>
                        <li style={{ marginBottom: 6 }}>Notstand</li>
                    </ul>
                    <p>Weitere Informationen erhalten Sie auf Anfrage in unserem Verein.</p>
                </div>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>
                    Bedürfnis
                </Heading>
                <div style={{ lineHeight: 1.8 }}>
                    <p>Der angehende Schütze muss ein Bedürfnis nachweisen. Dies geschieht durch ernsthaftes und leistungssteigerndes Schießen innerhalb eines Vereins. Die jeweilige Überprüfung durch den Verein wird unterschiedlich gehandhabt.</p>
                </div>
            </MediumBox>

            <BigBox>
                <div style={{ textAlign: "center", lineHeight: 1.8 }}>
                    <p style={{ marginBottom: 12 }}>
                        Das erste halbe Jahr ist also nicht nur mit viel Spaß, sondern auch mit viel Arbeit verbunden.
                        Diesen Weg musste jeder von uns gehen. Nehmen Sie das bitte nicht auf die leichte Schulter,
                        aber lassen Sie sich dadurch die Freude am Schießsport nicht verderben.
                    </p>
                    <p>
                        Ein wenig Ehrgeiz wird hinterher durch ein wunderschönes Hobby belohnt.
                        Der SSV Schluchsee wird hier alle Mitglieder nach bestem Wissen und entsprechend seinen Möglichkeiten unterstützen.
                    </p>
                </div>
            </BigBox>
        </div>
    );
};

export default Law;
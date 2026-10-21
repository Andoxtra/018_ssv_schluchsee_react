import {Link} from "react-router-dom";
import type {ReactNode} from "react";

import BigBox from "../../components/boxes/BigBox.tsx";
import MediumBox from "../../components/boxes/MediumBox.tsx";
import Heading from "../../components/texts/Heading.tsx";

const Youth = (): ReactNode => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <BigBox>
                <div style={{ textAlign: "center", padding: "24px 0" }}>
                    <Heading level={1}>Jugendabteilung</Heading>
                    <p style={{ fontSize: "1rem", lineHeight: 1.7, maxWidth: 600, margin: "8px auto 0", color: "rgba(255, 255, 255, 0.8)" }}>
                        Nachwuchsförderung seit der Neugründung
                    </p>
                </div>
            </BigBox>

            <MediumBox>
                <Heading level={2}>
                    Über die Jugendabteilung
                </Heading>
                <div style={{ lineHeight: 1.8 }}>
                    <p style={{ marginBottom: 12 }}>
                        Seit der Neugründung des Vereins sucht und fördert der Sportschützenverein
                        intensiv den Nachwuchs. Die kontinuierlichen Erfolge zeigen, dass sich dieser
                        Einsatz lohnt. Ein Beispiel dafür ist Daniel Khan-Leonhard, der als Zwölfjähriger
                        zu uns kam und später ein hochkarätiger Sportler wurde. Er ist Ansporn und
                        Vorbild für die Anfänger.
                    </p>
                </div>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>
                    Trainingszeiten
                </Heading>
                <div style={{ lineHeight: 1.8 }}>
                    <p>Unser Jugendtraining findet freitags statt. Bitte stimmen Sie den ersten Besuch und die Abholzeit mit dem Verein ab.</p>
                    <p><Link to="/schiessstaende">Aktuelle Trainingszeiten →</Link></p>
                    <p>
                        Nach der Konzentration folgt dann die unterhaltsame Entspannung bei verschiedenen
                        Spielen im Aufenthaltsraum.
                    </p>
                </div>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>
                    Unterstützung durch Familie und Freunde
                </Heading>
                <div style={{ lineHeight: 1.8 }}>
                    <p>
                        Wenn auch Eltern und Freunde den jugendlichen Spaß am leistungsorientierten,
                        regelmäßigen Schießen unterstützen und die Mädchen und Jungen zum Schützenhaus
                        bringen und abholen, stellen sich Erfolge ein.
                    </p>
                    <p style={{ marginTop: 12 }}>
                        Der Jugendwart kümmert sich besonders um die Anliegen der Jungschützen.
                        In der alljährlichen Jugendversammlung wählen die Jugendlichen ihre eigene
                        Vertretung, die ihre Interessen im Verein einbringt.
                    </p>
                </div>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>
                    Wettbewerbe
                </Heading>
                <div style={{ lineHeight: 1.8 }}>
                    <p>
                        Die meisten Jungschützen wollen ihre Trainingsleistung dann auch im sportlichen
                        Wettkampf bestätigen. Lob und Anerkennung steigern dabei Motivation und
                        Selbstwertgefühl.
                    </p>
                </div>
            </MediumBox>
        </div>
    );
};

export default Youth;
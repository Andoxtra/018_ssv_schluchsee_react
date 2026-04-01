import type {ReactNode} from "react";
import Heading from "../../components/texts/Heading.tsx";
import Paragraph from "../../components/texts/Paragraph.tsx";
import TextLink from "../../components/links/TextLink.tsx";
import MediumBox from "../../components/boxes/MediumBox.tsx";
import BigBox from "../../components/boxes/BigBox.tsx";

const linksData = [
    { title: "Deutscher Schützenverband", url: "https://www.dsb.de" },
    { title: "Landesschützenverband Baden-Württemberg", url: "https://www.lsv-bw.de" },
    { title: "Bezirksschützenverband", url: "https://www.bsv-region.de" },
    { title: "Regionales Schießsport Nachrichtenportal", url: "https://www.schiesssport-aktuell.de" },
    { title: "Deutsche Schießsport-Union", url: "https://www.dsu.de" }
];

const Links = (): ReactNode => {
    return (
        <>
            <BigBox>
                <Heading level={1}>Links</Heading>
            </BigBox>

            <MediumBox>
                <Heading level={2}>Nützliche Webseiten</Heading>
                <Paragraph>
                    Hier finden Sie Links zu wichtigen Verbänden und Organisationen im Schießsport:
                </Paragraph>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>Schießsport Verbände</Heading>
                {linksData.map((link, index) => (
                    <Paragraph key={index}>
                        🔗 <TextLink href={link.url} target="_blank">{link.title}</TextLink>
                    </Paragraph>
                ))}
            </MediumBox>

            <MediumBox>
                <Heading level={2}>Andere lokale Vereine</Heading>
                <Paragraph>
                    Kontaktieren Sie uns, wenn Sie Links zu befreundeten Vereinen hinzufügen möchten!
                </Paragraph>
            </MediumBox>
        </>
    )
};

export default Links;


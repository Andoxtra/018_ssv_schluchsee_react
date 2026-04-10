import type {ReactNode} from "react";
import Heading from "../../components/texts/Heading.tsx";
import NormalText from "../../components/texts/NormalText.tsx";
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
                <NormalText>
                    Hier finden Sie Links zu wichtigen Verbänden und Organisationen im Schießsport:
                </NormalText>
            </MediumBox>

            <MediumBox>
                <Heading level={2}>Schießsport Verbände</Heading>
                {linksData.map((link, index) => (
                    <NormalText key={index}>
                        🔗 <TextLink href={link.url} target="_blank">{link.title}</TextLink>
                    </NormalText>
                ))}
            </MediumBox>

            <MediumBox>
                <Heading level={2}>Andere lokale Vereine</Heading>
                <NormalText>
                    Kontaktieren Sie uns, wenn Sie Links zu befreundeten Vereinen hinzufügen möchten!
                </NormalText>
            </MediumBox>
        </>
    )
};

export default Links;


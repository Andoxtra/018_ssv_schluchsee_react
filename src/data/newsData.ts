import {DateClass} from "../logic/date/DateClass.ts";
import type {NewsItemProps} from "../elements/NewsItem/props/NewsItemProps.ts";

export const newsItems: NewsItemProps[] = [
    {
        uuid: "174",
        title: "Schützenhaus am 01.05.2026 geschlossen",
        creationDate: new DateClass("2026-04-15"),
        author: "Tom Matthews",
        previewText: "Das Schützenhaus bleibt am 1. Mai 2026 geschlossen.",
        contentAsMarkdown: `Das Schützenhaus bleibt am **1. Mai 2026** geschlossen.

Wir bitten um Verständnis.`
    },
    {
        uuid: "173",
        title: "Jubiläumsfeier/Westernfest 2026",
        creationDate: new DateClass("2026-04-10"),
        author: "Wolfgang Faller",
        previewText: "100 Jahre SSV Schluchsee e.V. - Jubiläumsfeier am 3. Juli 2026, Westernfest am 4. Juli 2026.",
        contentAsMarkdown: `## 100 Jahre SSV Schluchsee e.V.

### Jubiläumsfeier

**3. Juli 2026 - 19 Uhr**

### Westernfest

**4. Juli 2026**

Seit über 20 Jahren treffen sich Schützen aus nah und fern am Faulenfürster Eck und messen sich beim traditionellen **"Cowboy Action Shooting"** und anderen Disziplinen in Treffsicherheit und Schnelligkeit.

Für interessierte Besucher wird ein Preisschießen mit der berühmten **"Henry Winchester"** angeboten.

Im Lager der Cowboys und Trapper ist Interessantes zu sehen und ab **11.30 Uhr** gibt es ein leckeres Essensangebot.

Nach der Siegerehrung - ca. **19h** - unterhält die Band **"Dapper Dan Men"** mit bester Bluegrass- und Country Musik.

Die besondere Stimmung auf dem ganzen Areal, ob am Lagerfeuer oder im Saloon bei einem erlesenen Whisky, führt uns in die Zeit des amerikanischen Wilden Westen.`
    },
    {
        uuid: "172",
        title: "Info Generalversammlung 2026",
        creationDate: new DateClass("2026-03-20"),
        author: "Wolfgang Faller",
        previewText: "Informationen zur diesjährigen Generalversammlung.",
        contentAsMarkdown: `Hiermit erhalten alle Mitglieder wichtige Informationen zur diesjährigen Generalversammlung.

Bitte beachten Sie die Einladung und die Tagesordnung, die separat verschickt wurde.

Alle Mitglieder sind herzlich eingeladen.`
    },
    {
        uuid: "171",
        title: "Einladung Generalversammlung",
        creationDate: new DateClass("2026-03-15"),
        author: "Wolfgang Faller",
        previewText: "Einladung zur Generalversammlung des SSV Schluchsee e.V.",
        contentAsMarkdown: `Sehr geehrte Mitglieder,

hiermit laden wir Sie herzlich zur diesjährigen Generalversammlung ein.

**Tagesordnung:**

1. Begrüßung und Eröffnung
2. Bericht des Vorstands
3. Bericht des Kassenwarts
4. Aussprache und Entlastung des Vorstands
5. Neuwahlen
6. Verschiedenes

Wir freuen uns auf zahlreiche Teilnahme.`
    },
    {
        uuid: "169",
        title: "Generalversammlung 2026",
        creationDate: new DateClass("2026-03-10"),
        author: "Wolfgang Faller",
        previewText: "Bericht über die Generalversammlung 2026.",
        contentAsMarkdown: `Die Generalversammlung 2026 wurde erfolgreich durchgeführt.

Wichtige Beschlüsse und Neuigkeiten wurden den Mitgliedern vorgestellt.

Vielen Dank an alle Teilnehmer für das rege Interesse und die constructive Mitarbeit.`
    },
    {
        uuid: "168",
        title: "Ergebnisse CAS 5.01.2026",
        creationDate: new DateClass("2026-01-06"),
        author: "Wolfgang Faller",
        previewText: "Ergebnisse vom Cowboy Action Shooting am 5. Januar 2026.",
        contentAsMarkdown: `## Cowboy Action Shooting - 5. Januar 2026

Die Ergebnisse des ersten CAS-Turniers im Jahr 2026:

| Platz | Schütze | Punkte |
|-------|---------|--------|
| 1 | - | - |
| 2 | - | - |
| 3 | - | - |

Vielen Dank an alle Teilnehmer und Helfer.`
    },
    {
        uuid: "167",
        title: "Weihnachtsgrüße",
        creationDate: new DateClass("2025-12-20"),
        author: "Wolfgang Faller",
        previewText: "Weihnachtsgrüße vom SSV Schluchsee e.V.",
        contentAsMarkdown: `Liebe Mitglieder und Freunde des SSV Schluchsee,

wir möchten Ihnen allen frohe und besinnliche Weihnachten wünschen.

Mögen die Feiertage in Frieden und Freude verbracht werden.

Wir freuen uns auf ein erfolgreiches neues Jahr 2026 mit Ihnen.

**Frohe Weihnachten und einen guten Rutsch!**`
    },
    {
        uuid: "166",
        title: "Weihnachten geschlossen",
        creationDate: new DateClass("2025-12-15"),
        author: "Wolfgang Faller",
        previewText: "Das Schützenhaus bleibt über die Weihnachtsfeiertage geschlossen.",
        contentAsMarkdown: `Das Schützenhaus bleibt über die Weihnachtsfeiertage geschlossen.

**Schließzeiten:**

- 24.12.2025 - 26.12.2025
- 31.12.2025 - 01.01.2026

Ab dem **2. Januar 2026** sind wir wieder für Sie da.`
    },
];

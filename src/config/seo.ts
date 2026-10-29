import webPaths from "./webPaths.ts";

export const SITE_NAME = "SSV Schluchsee";
export const SITE_DESCRIPTION = "Sportschützenverein SSV Schluchsee e. V. – Schießsport, Training und Vereinsleben im Schwarzwald.";

export type PageMeta = {
    title: string;
    description: string;
};

const t = (title: string): string => `${title} – ${SITE_NAME}`;

export const routeMeta: Record<string, PageMeta> = {
    [webPaths.homeSite]: {title: `${SITE_NAME} – Schützenverein am Schluchsee`, description: "Schießsport entdecken, gemeinsam trainieren und Vereinsleben erleben. Der Sportschützenverein SSV Schluchsee e. V. seit 1926 im Schwarzwald."},
    [webPaths.aboutSite]: {title: t("Vereinsgeschichte"), description: "Von der Gründung 1926 bis zur modernen Schießanlage am Faulenfürster Eck – die Geschichte des SSV Schluchsee."},
    [webPaths.contactSite]: {title: t("Kontakt"), description: "Vorstand und Kontaktmöglichkeiten des SSV Schluchsee e. V."},
    [webPaths.locationSite]: {title: t("Anfahrt"), description: "Ihr Weg zum Vereinsheim des SSV Schluchsee am Faulenfürster Eck in Schluchsee."},
    [webPaths.newsSite]: {title: t("Aktuelles & Vereinsarchiv"), description: "Neuigkeiten und Berichte des SSV Schluchsee, nach Veröffentlichungsdatum sortiert."},
    [webPaths.downloadSite]: {title: t("Downloads"), description: "Formulare, Vereinsdokumente und weiterführende Informationen des SSV Schluchsee zum Download."},
    [webPaths.imprintSite]: {title: t("Impressum"), description: "Impressum des SSV Schluchsee e. V. mit Angaben zum Verein."},
    [webPaths.privacySite]: {title: t("Datenschutz"), description: "Informationen zur Verarbeitung von Daten auf der Website des SSV Schluchsee."},
    [webPaths.termsSite]: {title: t("Nutzungsbedingungen"), description: "Nutzungsbedingungen für die Website des SSV Schluchsee."},
    [webPaths.records]: {title: t("Standrekorde"), description: "Übersicht der Standrekorde des SSV Schluchsee in den Pistolen- und Gewehrdisziplinen."},
    [webPaths.rwk]: {title: t("Veranstaltungen"), description: "Termine, Vereinsfeste und Ergebnisse des SSV Schluchsee aus dem Archiv."},
    [webPaths.achievements]: {title: t("Erfolge"), description: "Teilnahmen des SSV Schluchsee an Deutschen Meisterschaften in München."},
    [webPaths.links]: {title: t("Verbände & Links"), description: "Übersicht über Schützenorganisationen und Verbände."},
    [webPaths.faqSite]: {title: t("Mitglied werden & häufige Fragen"), description: "Die wichtigsten Wege zu Training, Anmeldung und Vereinsleben beim SSV Schluchsee."},
    [webPaths.contactFormSite]: {title: t("Nachricht an den Verein"), description: "Fragen zur Mitgliedschaft, zum Training oder zu Ihrem Besuch an den SSV Schluchsee senden."},
    [webPaths.lawSite]: {title: t("Waffenrecht & Sachkunde"), description: "Weiterführende Informationen zu Waffenrecht und Sachkunde aus offiziellen Quellen."},
    [webPaths.shootingLocation]: {title: t("Training & Schießstände"), description: "Trainingszeiten und Ausstattung der Schießstände des SSV Schluchsee."},
    [webPaths.youthSite]: {title: t("Jugendabteilung"), description: "Nachwuchsförderung und Jugendtraining im SSV Schluchsee."},
    [webPaths.danielKhanLeonhard]: {title: t("Daniel Khan-Leonhard"), description: "Olympiateilnehmer und Ehrenmitglied des SSV Schluchsee – Stationen einer außergewöhnlichen sportlichen Karriere."},
    [webPaths.positionSite]: {title: t("Unsere Haltung zum Waffenrecht"), description: "Die Haltung des SSV Schluchsee zu einem praxistauglichen Waffenrecht und zur Unterstützung des VDB."},
};

export const staticMeta = (path: string): PageMeta | undefined => routeMeta[path];

export const articleMeta = (title: string, preview: string): PageMeta => ({
    title: `${title} – ${SITE_NAME}`,
    description: preview || "Beitrag des SSV Schluchsee.",
});

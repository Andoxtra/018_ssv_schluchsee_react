export const club = {
    name: "SSV Schluchsee e. V.",
    street: "Faulenfürster Eck",
    city: "79859 Schluchsee",
    email: "info@ssv-schluchsee.de",
    coordinates: "47.82422, 8.20847",
    mapUrl: "https://www.openstreetmap.org/?mlat=47.82422&mlon=8.20847#map=17/47.82422/8.20847",
    mapEmbed: "https://www.openstreetmap.org/export/embed.html?bbox=8.2050%2C47.8230%2C8.2120%2C47.8260&layer=mapnik&marker=47.82422%2C8.20847",
};

export const documents = {
    guestRegistration: {title: "Anmeldeformular für Gastschützen (PDF)", url: "/documents/gastanmeldung.pdf"},
    statutes: {title: "Vereinssatzung", url: "/documents/satzung.pdf"},
};

export const guestRegistrationText = "Gastschützen können nach vorheriger Anmeldung und Bestätigung durch den SSV Schluchsee am Training teilnehmen. Bitte füllen Sie das Anmeldeformular aus und stimmen Sie Ihren Besuch mit dem Verein ab.";

export const shootingRanges = [
    {name: "Luftdruckwaffen", lanes: 8, distance: "10 Meter", location: "Halle"},
    {name: "Präzisionsstände", lanes: 5, distance: "25 Meter", location: "begehbar"},
    {name: "Duellstände", lanes: 5, distance: "25 Meter", location: ""},
    {name: "Elektronische Stände", lanes: 6, distance: "50 Meter", location: ""},
    {name: "Großkaliberstände", lanes: 3, distance: "100 Meter", location: ""},
];
export const totalLanes = shootingRanges.reduce((sum, range) => sum + range.lanes, 0);
export const trainingTimes = [
    {label: "Auflageschießen", day: "Mittwoch", time: "14:00–16:00 Uhr"},
    {label: "Schießbetrieb", day: "Freitag", time: "19:00–21:00 Uhr"},
    {label: "Schießbetrieb", day: "Sonntag", time: "10:00–12:00 Uhr"},
    {label: "Jugendtraining", day: "Freitag", time: "19:00–20:00 Uhr"},
];

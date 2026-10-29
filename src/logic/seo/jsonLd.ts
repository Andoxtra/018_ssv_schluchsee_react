import {club} from "../../data/clubData.ts";

export const organizationJsonLd = (url: string) => {
    const [postalCode, ...locality] = club.city.split(" ");
    return {
        "@context": "https://schema.org",
        "@type": "SportsClub",
        name: club.name,
        url,
        address: {
            "@type": "PostalAddress",
            streetAddress: club.street,
            addressLocality: locality.join(" "),
            postalCode,
            addressCountry: "DE",
        },
    };
};

import {describe, expect, test} from "vitest";
import {articleMeta, SITE_NAME, staticMeta} from "../../src/config/seo.ts";
import {injectHead} from "../../server/lib/meta.ts";

describe("seo metadata", () => {
    test("resolves static route meta and leaves unknown routes empty", () => {
        expect(staticMeta("/faq")?.title).toContain("Mitglied werden");
        expect(staticMeta("/schiessstaende")?.description).toContain("Trainingszeiten");
        expect(staticMeta("/does-not-exist")).toBeUndefined();
    });

    test("builds article meta with a site suffix and a fallback description", () => {
        expect(articleMeta("Sommerfest", "Ein Rückblick.")).toEqual({title: `Sommerfest – ${SITE_NAME}`, description: "Ein Rückblick."});
        expect(articleMeta("Ohne Vorschau", "").description).toBe("Beitrag des SSV Schluchsee.");
    });

    test("injects per-page head tags and replaces the default title", () => {
        const html = '<html lang="de"><head><meta charset="UTF-8"><title>SSV Schluchsee</title></head><body></body></html>';
        const out = injectHead(html, "/about", "https://ssv-schluchsee.de");
        expect(out).toContain("<title>Vereinsgeschichte – SSV Schluchsee</title>");
        expect(out).not.toContain("<title>SSV Schluchsee</title>");
        expect(out).toContain('name="description"');
        expect(out).toContain('rel="canonical" href="https://ssv-schluchsee.de/about"');
        expect(out).toContain('property="og:title"');
    });

    test("adds noindex for admin and organization JSON-LD on the home page", () => {
        const admin = injectHead('<html><head><title>x</title></head><body></body></html>', "/admin", "https://ssv-schluchsee.de");
        expect(admin).toContain('name="robots" content="noindex, nofollow"');
        const home = injectHead('<html><head><title>x</title></head><body></body></html>', "/", "https://ssv-schluchsee.de");
        expect(home).toContain("application/ld+json");
        expect(home).toContain("SportsClub");
    });
});

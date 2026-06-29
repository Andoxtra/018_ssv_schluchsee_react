import type {ReactNode} from "react";

import getDynamicStyle from "../logic/dynamicStyling/getDynamicStyle.ts";

import FooterStyle from "../style/elements/footer/FooterStyle.ts";
import webPaths from "../config/webPaths.ts";
import textList from "../config/translations/textList.ts";

const {
    FooterS,
    FooterM,
    FooterL,
    FooterE
} = FooterStyle;

const footerLinks = [
    { path: webPaths.homeSite, label: textList.home },
    { path: webPaths.newsSite, label: textList.news },
    { path: webPaths.aboutSite, label: textList.about },
    { path: webPaths.shootingLocation, label: textList.shootingRanges },
    { path: webPaths.rwk, label: textList.rwk },
    { path: webPaths.achievements, label: textList.achievements },
    { path: webPaths.youthSite, label: textList.youth },
    { path: webPaths.danielKhanLeonhard, label: textList.daniel },
    { path: webPaths.records, label: textList.records },
    { path: webPaths.links, label: textList.links },
    { path: webPaths.faqSite, label: textList.faq },
    { path: webPaths.contactSite, label: textList.contact },
    { path: webPaths.downloadSite, label: textList.download },
    { path: webPaths.lawSite, label: textList.law },
    { path: webPaths.imprintSite, label: textList.imprint },
    { path: webPaths.privacySite, label: textList.privacy },
];

const Footer = (): ReactNode => {
    return (
        <footer style={getDynamicStyle(FooterS, FooterM, FooterL, FooterE)}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                    gap: 32,
                    marginBottom: 32
                }}>
                    <div>
                        <h3 style={{ color: "#d48a0b", marginBottom: 12, fontSize: "1.125rem" }}>SSV Schluchsee e.V.</h3>
                        <p style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.7 }}>
                            Schießsport im Herzen des Schwarzwalds.<br />
                            Seit 1926 Tradition und Gemeinschaft.
                        </p>
                    </div>

                    <div>
                        <h4 style={{ color: "#d48a0b", marginBottom: 12, fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: 1 }}>Navigation</h4>
                        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                            {footerLinks.slice(0, 7).map((link) => (
                                <a key={link.path} href={link.path} style={{ color: "rgba(255,255,255,0.75)", transition: "color 0.2s ease" }}>
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 style={{ color: "#d48a0b", marginBottom: 12, fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: 1 }}>Weitere</h4>
                        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                            {footerLinks.slice(7).map((link) => (
                                <a key={link.path} href={link.path} style={{ color: "rgba(255,255,255,0.75)", transition: "color 0.2s ease" }}>
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div style={{
                    borderTop: "1px solid rgba(255,255,255,0.1)",
                    paddingTop: 24,
                    textAlign: "center",
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "0.875rem"
                }}>
                    <p>&copy; {new Date().getFullYear()} SSV Schluchsee e.V. Alle Rechte vorbehalten.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
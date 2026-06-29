import type {ReactNode} from "react";
import {useState} from "react";
import {useLocation} from "react-router-dom";

import Toolbar from "../components/boxes/Toolbar.tsx";
import LargeIcon from "../components/icons/LargeIcon.tsx";
import SecondaryButton from "../components/buttons/SecondaryButton.tsx";

import imagePaths from "../config/imagePaths.ts";
import webPaths from "../config/webPaths.ts";
import textList from "../config/translations/textList.ts";

const Header = (): ReactNode => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const mainNavItems = [
        { path: webPaths.newsSite, label: textList.news },
        { path: webPaths.aboutSite, label: textList.about },
        { path: webPaths.shootingLocation, label: textList.shootingRanges },
        { path: webPaths.rwk, label: textList.rwk },
        { path: webPaths.achievements, label: textList.achievements },
        { path: webPaths.contactSite, label: textList.contact },
    ];

    const secondaryNavItems = [
        { path: webPaths.faqSite, label: textList.faq },
        { path: webPaths.records, label: textList.records },
        { path: webPaths.links, label: textList.links },
        { path: webPaths.downloadSite, label: textList.download },
        { path: webPaths.lawSite, label: textList.law },
        { path: webPaths.youthSite, label: textList.youth },
        { path: webPaths.danielKhanLeonhard, label: textList.daniel },
    ];

    const isActive = (path: string): boolean => {
        if (path === webPaths.newsSite && location.pathname.startsWith(webPaths.newsSite)) {
            return true;
        }
        return location.pathname === path;
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const hamburgerButtonStyle: React.CSSProperties = {
        display: "none",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: 8,
        zIndex: 1001,
    };

    const barStyle: React.CSSProperties = {
        width: 24,
        height: 2.5,
        backgroundColor: "#143620",
        borderRadius: 2,
        transition: "all 0.3s ease",
    };

    const mobileMenuButtonStyle = (active: boolean): React.CSSProperties => ({
        display: "block",
        width: "100%",
        textAlign: "left",
        padding: "12px 16px",
        background: active ? "#EDECE4" : "transparent",
        border: "none",
        borderRadius: 8,
        fontSize: "1rem",
        fontWeight: active ? 600 : 500,
        color: "#143620",
        cursor: "pointer",
        transition: "all 0.2s ease",
    });

    return (
        <Toolbar>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <LargeIcon linkToIcon={imagePaths.ssvLogoFull} linkTo={webPaths.homeSite}></LargeIcon>
            </div>

            <div className="desktop-nav" style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                flexWrap: "wrap",
                justifyContent: "flex-end"
            }}>
                {mainNavItems.map((item) => (
                    <SecondaryButton
                        key={item.path}
                        linkTo={item.path}
                        text={item.label}
                    />
                ))}
            </div>

            <button
                className="hamburger-btn"
                onClick={() => setMenuOpen(!menuOpen)}
                style={hamburgerButtonStyle}
                aria-label="Menü"
            >
                <div style={{
                    ...barStyle,
                    transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
                }} />
                <div style={{
                    ...barStyle,
                    opacity: menuOpen ? 0 : 1,
                }} />
                <div style={{
                    ...barStyle,
                    transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
                }} />
            </button>

            {menuOpen && (
                <div
                    className="mobile-menu"
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: "rgba(248,248,244,0.98)",
                        backdropFilter: "blur(12px)",
                        flexDirection: "column",
                        padding: "72px 16px 24px",
                        gap: 4,
                        overflowY: "auto",
                        zIndex: 1000,
                    }}
                >
                    <div style={{ marginBottom: 16 }}>
                        <div style={{
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            textTransform: "uppercase",
                            letterSpacing: 1,
                            color: "#5a5a5a",
                            padding: "8px 16px",
                            marginBottom: 4,
                        }}>
                            Navigation
                        </div>
                        {mainNavItems.map((item) => (
                            <button
                                key={item.path}
                                style={mobileMenuButtonStyle(isActive(item.path))}
                                onClick={() => closeMenu()}
                            >
                                <a href={item.path} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                                    {item.label}
                                </a>
                            </button>
                        ))}
                    </div>

                    <div style={{
                        borderTop: "1px solid #D5D2C8",
                        paddingTop: 16,
                        marginBottom: 16,
                    }}>
                        <div style={{
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            textTransform: "uppercase",
                            letterSpacing: 1,
                            color: "#5a5a5a",
                            padding: "8px 16px",
                            marginBottom: 4,
                        }}>
                            Mehr
                        </div>
                        {secondaryNavItems.map((item) => (
                            <button
                                key={item.path}
                                style={mobileMenuButtonStyle(isActive(item.path))}
                                onClick={() => closeMenu()}
                            >
                                <a href={item.path} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                                    {item.label}
                                </a>
                            </button>
                        ))}
                    </div>

                    <div style={{
                        borderTop: "1px solid #D5D2C8",
                        paddingTop: 16,
                    }}>
                        <button
                            style={mobileMenuButtonStyle(isActive(webPaths.imprintSite))}
                            onClick={() => closeMenu()}
                        >
                            <a href={webPaths.imprintSite} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                                {textList.imprint}
                            </a>
                        </button>
                        <button
                            style={mobileMenuButtonStyle(isActive(webPaths.privacySite))}
                            onClick={() => closeMenu()}
                        >
                            <a href={webPaths.privacySite} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                                {textList.privacy}
                            </a>
                        </button>
                    </div>
                </div>
            )}

            <style>{`
                @media (max-width: 900px) {
                    .desktop-nav {
                        display: none !important;
                    }
                    .hamburger-btn {
                        display: flex !important;
                    }
                }
                @media (min-width: 901px) {
                    .hamburger-btn {
                        display: none !important;
                    }
                    .mobile-menu {
                        display: none !important;
                    }
                }
            `}</style>
        </Toolbar>
    );
};

export default Header;
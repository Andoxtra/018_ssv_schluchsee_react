import {useEffect, useRef, useState} from "react";
import {Link, NavLink, useLocation} from "react-router-dom";
import Toolbar from "../components/boxes/Toolbar.tsx";
import imagePaths from "../config/imagePaths.ts";
import {mainNavigation, moreNavigation, legalNavigation} from "../config/navigation.ts";

const Header = () => {
    const [open, setOpen] = useState(false);
    const dialog = useRef<HTMLDialogElement>(null);
    const toggle = useRef<HTMLButtonElement>(null);
    const more = useRef<HTMLDetailsElement>(null);
    const location = useLocation();
    const requestClose = () => {
        const element = dialog.current;
        if (!element) { setOpen(false); return; }
        element.classList.add("is-closing");
        window.setTimeout(() => setOpen(false), 180);
    };
    useEffect(() => {
        if (more.current) more.current.open = false;
    }, [location.pathname]);
    useEffect(() => {
        if (!open) return;
        const element = dialog.current!;
        const trigger = toggle.current;
        const openedPath = location.pathname;
        const previousOverflow = document.body.style.overflow;
        element.classList.remove("is-closing");
        element.showModal();
        document.body.style.overflow = "hidden";
        const wideScreen = window.matchMedia("(min-width: 901px)");
        const closeOnResize = () => { if (wideScreen.matches) setOpen(false); };
        wideScreen.addEventListener("change", closeOnResize);
        return () => {
            element.close();
            document.body.style.overflow = previousOverflow;
            wideScreen.removeEventListener("change", closeOnResize);
            if (window.location.pathname === openedPath) trigger?.focus();
            else document.getElementById("main-content")?.focus({preventScroll: true});
        };
    }, [open, location.pathname]);
    return <Toolbar>
        <a className="skip-link" href="#main-content">Zum Inhalt springen</a>
        <Link to="/" className="brand" aria-label="SSV Schluchsee – Startseite">
            <img src={imagePaths.ssvLogoQuarter} alt="" width={48} height={48}/>
            <span>SSV Schluchsee</span>
        </Link>
        <nav className="desktop-nav" aria-label="Hauptnavigation">
            {mainNavigation.map(item => <NavLink key={item.path} to={item.path}>{item.label}</NavLink>)}
            <details ref={more} className="more-nav" onKeyDown={event => {
                if (event.key === "Escape") { event.currentTarget.open = false; event.currentTarget.querySelector("summary")?.focus(); }
            }}>
                <summary>Verein & mehr</summary>
                <div>{moreNavigation.map(item => <NavLink end={item.path === "/"} key={item.path} to={item.path}>{item.label}</NavLink>)}</div>
            </details>
        </nav>
        <button ref={toggle} className="hamburger-btn" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(true)}>
            <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            <span className="sr-only">Menü</span>
        </button>
        <dialog ref={dialog} id="mobile-navigation" className="mobile-dialog" aria-labelledby="mobile-navigation-title" onClick={event => { if (event.target === event.currentTarget) requestClose(); }} onCancel={event => { event.preventDefault(); requestClose(); }} onKeyDown={event => {
            if (event.key !== "Tab") return;
            const controls = [...event.currentTarget.querySelectorAll<HTMLElement>("button, a[href]")];
            const first = controls[0], last = controls[controls.length - 1];
            if (event.shiftKey && document.activeElement === first) {event.preventDefault(); last?.focus();}
            else if (!event.shiftKey && document.activeElement === last) {event.preventDefault(); first?.focus();}
        }}>
            <div className="dialog-heading"><h2 id="mobile-navigation-title">Navigation</h2><button className="close-btn" onClick={requestClose} autoFocus>
                <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/></svg>
                <span className="sr-only">Schließen</span>
            </button></div>
            <nav aria-label="Mobile Navigation">
                <div className="mobile-nav-group">
                    <span className="mobile-nav-heading">Hauptnavigation</span>
                    {mainNavigation.map(item => <NavLink end={item.path === "/"} key={item.path} to={item.path} onClick={() => setOpen(false)}>{item.label}</NavLink>)}
                </div>
                <div className="mobile-nav-group">
                    <span className="mobile-nav-heading">Verein & mehr</span>
                    {moreNavigation.map(item => <NavLink end={item.path === "/"} key={item.path} to={item.path} onClick={() => setOpen(false)}>{item.label}</NavLink>)}
                </div>
                <div className="mobile-nav-group">
                    <span className="mobile-nav-heading">Rechtliches</span>
                    {legalNavigation.map(item => <NavLink end={item.path === "/"} key={item.path} to={item.path} onClick={() => setOpen(false)}>{item.label}</NavLink>)}
                </div>
            </nav>
        </dialog>
    </Toolbar>;
};
export default Header;

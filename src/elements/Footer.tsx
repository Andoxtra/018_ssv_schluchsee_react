import {Link} from "react-router-dom";
import {mainNavigation, moreNavigation, legalNavigation} from "../config/navigation.ts";
import {club} from "../data/clubData.ts";
const Footer = () => <footer className="site-footer">
    <div className="footer-grid">
        <div><h2>{club.name}</h2><p>Schießsport und Gemeinschaft im Schwarzwald seit 1926.</p><p>{club.street}<br/>{club.city}</p></div>
        <nav aria-label="Seitenübersicht"><h2>Entdecken</h2>{[...mainNavigation, ...moreNavigation.slice(0, 3)].map(item => <Link key={item.path} to={item.path}>{item.label}</Link>)}</nav>
        <nav aria-label="Rechtliches"><h2>Informationen</h2>{legalNavigation.map(item => <Link key={item.path} to={item.path}>{item.label}</Link>)}<Link to="/admin">Vereinsverwaltung</Link></nav>
    </div>
    <p className="copyright">© {new Date().getFullYear()} {club.name}</p>
</footer>;
export default Footer;

import {localDate} from "../../logic/news/newsSource.ts";
import {Link} from "react-router-dom";
import {useNews} from "../../logic/news/useNews.ts";
import {isPastEvent} from "../../logic/news/newsSource.ts";
import type {ReactNode} from "react";

import BigBox from "../../components/boxes/BigBox.tsx";
import MediumBox from "../../components/boxes/MediumBox.tsx";
import Heading from "../../components/texts/Heading.tsx";
import RWKTable from "../../components/table/RWKTable.tsx";

const rwkData = [
    { wettkampf: "RWK LP und LG – Kreisliga LP", saison: "2016/2017", url: "http://www.sportschuetzenkreis3.de/index.php?site=content&freicontent=Kreisliga_lp1449149865" },
    { wettkampf: "RWK LP und LG – Kreisklasse LG", saison: "2016/2017", url: "http://www.sportschuetzenkreis3.de/index.php?site=content&freicontent=Kreisklasse_1449245964" },
    { wettkampf: "RWK Kreisliga B – KK-Liegend", saison: "2016", url: "http://www.sportschuetzenkreis3.de" },
    { wettkampf: "RWK LG Auflage", saison: "2013/2014" },
    { wettkampf: "RWK LG Kreis 11", saison: "2013/2014" },
    { wettkampf: "RWK LP Kreis 11", saison: "2013/2014" },
    { wettkampf: "KK-Gewehr Auflageschießen", saison: "2013" },
    { wettkampf: "RWK Gewehr KK-3-Stellung", saison: "2013" },
    { wettkampf: "RWK KK-Gewehr Liegend", saison: "2013" },
    { wettkampf: "Kreispokal Hüfingen LG", saison: "2013" },
];

const toTableData = (data: { wettkampf: string; saison: string; url?: string }[]) =>
    data.map((row, index) => ({key: index, ...row}));

const Competitions = (): ReactNode => {
    const {articles, loading, error} = useNews();
    const today = localDate();
    const events = articles.filter(article => article.eventDates.length);
    const upcoming = events.filter(article => !isPastEvent(article, today));
    const past = events.filter(article => isPastEvent(article, today));
    return <div className="page-stack">
        <BigBox><Heading level={1}>Veranstaltungen</Heading><p>Termine, Vereinsfeste und Ergebnisse aus dem Archiv.</p></BigBox>
        {loading && <p role="status">Termine werden geladen …</p>}{error && <p role="alert">{error}</p>}
        <MediumBox><Heading level={2}>Kommende Veranstaltungen</Heading>{!loading && !error && !upcoming.length && <p>Zurzeit sind keine kommenden Termine veröffentlicht.</p>}{upcoming.map(article => <p key={article.id}><Link to={`/neuigkeiten/${article.id}`}>{article.title} →</Link></p>)}</MediumBox>
        <MediumBox><Heading level={2}>Veranstaltungsarchiv</Heading>{past.map(article => <p key={article.id}><Link to={`/neuigkeiten/${article.id}`}>{article.title} →</Link></p>)}</MediumBox>
        <MediumBox><Heading level={2}>Rundenwettkämpfe · Archiv 2013–2017</Heading><p>Historische Wettbewerbe. Nicht für jeden Eintrag liegen Ergebnislisten vor.</p><RWKTable tableData={toTableData(rwkData)}/></MediumBox>
        <p><Link to="/schiessstaende">Regelmäßige Trainingszeiten →</Link></p>
    </div>;
};
export default Competitions;

import {lazy, Suspense} from "react";
import ContactForm from "./routes/ContactForm.tsx";
import NotFound from "./routes/NotFound.tsx";
import RouteFocus from "../elements/RouteFocus.tsx";
import type {ReactNode} from "react";

import {createBrowserRouter, createRoutesFromElements, RouterProvider, Outlet, Route} from 'react-router-dom';
import Header from "../elements/Header.tsx";
import Footer from "../elements/Footer.tsx";
import Home from "./routes/Home.tsx";
import About from "./routes/About.tsx";
import Contact from "./routes/Contact.tsx";
import Location from "./routes/Location.tsx";
import News from "./routes/News.tsx";
import NewsDetail from "./routes/NewsDetail.tsx";
import Download from "./routes/Download.tsx";
import Imprint from "./routes/Imprint.tsx";
import Privacy from "./routes/Privacy.tsx";
import Terms from "./routes/Terms.tsx";
import Records from "./routes/Records.tsx";
import Competitions from "./routes/Competitions.tsx";
import {Achievements} from "./routes/Achievements.tsx";
import Links from "./routes/Links.tsx";
import FAQ from "./routes/FAQ.tsx";
import Law from "./routes/Law.tsx";
import ShootingRanges from "./routes/ShootingRanges.tsx";
import Youth from "./routes/Youth.tsx";
import DanielKhanLeonhard from "./routes/DanielKhanLeonhard.tsx";
import Body from "../elements/Body.tsx";

import webPaths from "../config/webPaths.ts";


const Admin = lazy(() => import("./routes/Admin.tsx"));
const Test = lazy(() => import("./routes/Test.tsx"));

const Layout = (): ReactNode => <>
    <RouteFocus/><Header/><Body><Outlet/></Body><Footer/>
</>;
const router = createBrowserRouter(createRoutesFromElements(<Route element={<Layout/>}>

    <Route path="/admin" element={<Suspense fallback={<p role="status">Verwaltung wird geladen …</p>}><Admin/></Suspense>}/>
    <Route path={webPaths.contactFormSite} element={<ContactForm/>}/>
    <Route path="*" element={<NotFound/>}/>
    {(import.meta.env.DEV || import.meta.env.VITE_ENABLE_SHOWCASE === "true") && <Route path={webPaths.testingSite} element={<Suspense fallback={<p>Lädt …</p>}><Test/></Suspense>}/>}
    <Route path={webPaths.homeSite} element={<Home/>}/>
    <Route path={webPaths.aboutSite} element={<About/>}/>
    <Route path={webPaths.contactSite} element={<Contact/>}/>
    <Route path={webPaths.locationSite} element={<Location/>}/>
    <Route path={webPaths.newsSite} element={<News/>}/>
    <Route path={`${webPaths.newsDetailSite}/:id`} element={<NewsDetail/>}/>
    <Route path={webPaths.downloadSite} element={<Download/>}/>
    <Route path={webPaths.imprintSite} element={<Imprint/>}/>
    <Route path={webPaths.privacySite} element={<Privacy/>}/>
    <Route path={webPaths.termsSite} element={<Terms/>}/>
    <Route path={webPaths.records} element={<Records/>}/>
    <Route path={webPaths.rwk} element={<Competitions/>}/>
    <Route path={webPaths.achievements} element={<Achievements/>}/>
    <Route path={webPaths.links} element={<Links/>}/>
    <Route path={webPaths.faqSite} element={<FAQ/>}/>
    <Route path={webPaths.lawSite} element={<Law/>}/>
    <Route path={webPaths.shootingLocation} element={<ShootingRanges/>}/>
    <Route path={webPaths.youthSite} element={<Youth/>}/>
    <Route path={webPaths.danielKhanLeonhard} element={<DanielKhanLeonhard/>}/>

</Route>));
const Router = (): ReactNode => <RouterProvider router={router}/>;
export default Router;

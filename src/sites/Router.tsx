import type {ReactNode} from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from "../elements/Header.tsx";
import Footer from "../elements/Footer.tsx";
import Home from "./routes/Home.tsx";
import About from "./routes/About.tsx";
import Contact from "./routes/Contact.tsx";

import webPaths from "../config/webPaths.ts";

const Router = (): ReactNode => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path={webPaths.homeSite} element={<Home/>}/>
                <Route path={webPaths.aboutSite} element={<About/>}/>
                <Route path={webPaths.contactSite} element={<Contact/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>);
};

export default Router;
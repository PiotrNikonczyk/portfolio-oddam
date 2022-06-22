import React from "react";
import {Header} from "./Header";
import {MainSection} from "./MainSection";
import {ThreeColumns} from "./ThreeColumns";
import {FourSteps} from "./FourSteps";
import {AboutUs} from "./AboutUs";
import {WhoWeHelp} from "./WhoWeHelp";
import {Contact} from "./Contact";
import {Footer} from "./Footer";



export function Home() {

    return <>
        <Header/>
        <MainSection />
        <ThreeColumns />
        <FourSteps />
        <AboutUs />
        <WhoWeHelp />
        <Contact />
        <Footer />
    </>
}
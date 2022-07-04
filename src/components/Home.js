import React from "react";
import {MainSection} from "./MainSection";
import {ThreeColumns} from "./ThreeColumns";
import {FourSteps} from "./FourSteps";
import {AboutUs} from "./AboutUs";
import {WhoWeHelp} from "./WhoWeHelp";
import {Contact} from "./Contact";



export function Home({userMail, setLoggedUser}) {

    return <>
        <MainSection userMail={userMail} setLoggedUser={setLoggedUser}/>
        <ThreeColumns />
        <FourSteps />
        <AboutUs />
        <WhoWeHelp />
        <Contact />
    </>
}
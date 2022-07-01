import React from "react";
import {Header} from "./Header";
import {LoginSection} from "./LoginSection";
import {Footer} from "./Footer";

export function Login(){



    return <>

        <Header />
        <LoginSection register={false}/>
        <Footer />

    </>


}
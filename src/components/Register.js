import React from "react";
import {Header} from "./Header";
import {LoginSection} from "./LoginSection";
import {Footer} from "./Footer";

export function Register({setLoggedUser}){



    return <>
        <Header />
        <LoginSection register={true} setLoggedUser={setLoggedUser}/>
        <Footer />

    </>


}
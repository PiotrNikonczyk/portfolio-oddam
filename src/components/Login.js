import React from "react";
import {Header} from "./Header";
import {LoginSection} from "./LoginSection";
import {Footer} from "./Footer";

export function Login({setLoggedUser}){



    return <>

        <Header />
        <LoginSection register={false} setLoggedUser={setLoggedUser}/>
        <Footer />

    </>


}
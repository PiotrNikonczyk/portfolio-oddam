import React from "react";
import {Link as LinkRD} from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

export function HeaderTopLinks({userMail, setLoggedUser}) {

    function LogOut(){
        if(typeof  setLoggedUser === "function"){


            const auth = getAuth();
            signOut(auth).then(() => {
                // Sign-out successful.
                setLoggedUser(null);
            }).catch((error) => {
                // An error happened.
            });
        }
    }

    if (!userMail) {
        return <div className={"header_navigation_account"}>

            <LinkRD to={"/logowanie"} className={"header_navigation_account_link"}>Zaloguj</LinkRD>
            <LinkRD to={"/rejestracja"} className={"header_navigation_account_link"}>Załóż konto</LinkRD>

        </div>
    }
    else{

        return <div className={"header_navigation_account"}>
            <p className={"user_hello"}> Cześć {userMail}</p>
            <LinkRD to={"/oddaj-rzeczy"} className={"header_navigation_account_link"}>Oddaj rzeczy</LinkRD>
            <LinkRD to={"/wylogowano"} className={"header_navigation_account_link"} onClick={LogOut}>Wyloguj</LinkRD>

        </div>

    }
}
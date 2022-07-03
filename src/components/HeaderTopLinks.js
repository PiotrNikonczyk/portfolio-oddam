import React from "react";
import {Link as LinkRD} from "react-router-dom";

export function HeaderTopLinks({user}) {

    if (!user) {
        return <div className={"header_navigation_account"}>

            <LinkRD to={"/logowanie"} className={"header_navigation_account_link"}>Zaloguj</LinkRD>
            <LinkRD to={"/rejestracja"} className={"header_navigation_account_link"}>Załóż konto</LinkRD>

        </div>
    }
    else{

        return <div className={"header_navigation_account"}>
            <p className={"user_hello"}> Cześć {user}</p>
            <LinkRD to={"/logowanie"} className={"header_navigation_account_link"}>Oddaj rzeczy</LinkRD>
            <LinkRD to={"/rejestracja"} className={"header_navigation_account_link"}>Wyloguj</LinkRD>

        </div>

    }
}
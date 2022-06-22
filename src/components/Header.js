import React from "react";
import { Link } from "react-router-dom";



export function Header() {

    return <>
        <div className={"header_navigation"}>
            <div className={"header_navigation_account"}>
                <a href={"#"} className={"header_navigation_account_link"}>Zaloguj</a>
                <a href={"#"} className={"header_navigation_account_link"}>Załóż konto</a>
            </div>
            <div className={"header_navigation_anchor"}>
                <a href={"#"} className={"header_navigation_anchor_link"}>Start</a>
                <a href={"#"} className={"header_navigation_anchor_link"}>O co chodzi?</a>
                <a href={"#"} className={"header_navigation_anchor_link"}>O nas</a>
                <a href={"#"} className={"header_navigation_anchor_link"}>Fundacja i organizacje</a>
                <a href={"#"} className={"header_navigation_anchor_link"}>Kontakt</a>

            </div>
        </div>
    </>
}
import React from "react";
import {Link} from 'react-scroll'
import { BrowserRouter as Router, Link as LinkRD } from "react-router-dom";


export function Header() {

    return <>
        <div className={"header_navigation"}>
            <div className={"header_navigation_account"}>
                <Router>
                    <LinkRD to={"/logowanie"} className={"header_navigation_account_link"}>Zaloguj</LinkRD>
                    <LinkRD to={"/rejestracja"} className={"header_navigation_account_link"}>Załóż konto</LinkRD>
                </Router>
            </div>
            <div className={"header_navigation_anchor"}>
                <Link className={"link"} ctiveClass="active" to="aboutUs" spy={true} smooth={true}>Start</Link>
                <Link className={"link"} ctiveClass="active" to="fourSteps" spy={true} smooth={true}>O co chodzi?</Link>
                <Link className={"link"} ctiveClass="active" to="aboutUs" spy={true} smooth={true}>O nas</Link>
                <Link className={"link"} ctiveClass="active" to="aboutUs" spy={true} smooth={true}>Fundacja i
                    organizacje</Link>
                <Link className={"link"} ctiveClass="active" to="aboutUs" spy={true} smooth={true}>Kontakt</Link>

            </div>
        </div>
    </>
}
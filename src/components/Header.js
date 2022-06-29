import React from "react";
import {Link} from 'react-scroll'
import {  Link as LinkRD } from "react-router-dom";


export function Header() {

    return <>
        <div className={"header_navigation"}>
            <div className={"header_navigation_account"}>

                    <LinkRD to={"/logowanie"} className={"header_navigation_account_link"}>Zaloguj</LinkRD>
                    <LinkRD to={"/rejestracja"} className={"header_navigation_account_link"}>Załóż konto</LinkRD>

            </div>
            <div className={"header_navigation_anchor"}>
                <LinkRD className={"link link_start"} to={"/"} >Start</LinkRD>
                <Link className={"link"} activeClass="active" to="fourSteps" spy={true} smooth={true}>O co chodzi?</Link>
                <Link className={"link"} activeClass="active" to="aboutUs" spy={true} smooth={true}>O nas</Link>
                <Link className={"link"} activeClass="active" to="who_we_help" spy={true} smooth={true}>Fundacja i
                    organizacje</Link>
                <Link className={"link"} activeClass="active" to="contact" spy={true} smooth={true}>Kontakt</Link>

            </div>
        </div>
    </>
}
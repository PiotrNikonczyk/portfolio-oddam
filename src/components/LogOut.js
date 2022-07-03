import React from "react";
import {Header} from "./Header";
import imageSvg from '../assets/Decoration.svg';
import {Link as LinkRD} from "react-router-dom";




export function LogOut(){

    return <>
        <Header />
        <div className={"logout_container"}>
            <h1>Wylogowanie nastąpiło pomyślnie!</h1>
            <img src={imageSvg} alt={"element dekoracyjny"}/>
            <LinkRD className={"link link_start"} to={"/"} >Strona główna</LinkRD>
        </div>
    </>
}
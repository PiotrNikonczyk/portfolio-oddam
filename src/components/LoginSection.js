import React from "react";
import {AccountInput} from "./AccountInput";
import imageSvg from '../assets/Decoration.svg'

import {BrowserRouter as Router, Link as LinkRD} from "react-router-dom";
import {Link} from "react-scroll";


export function LoginSection() {


    return <>
        <div className={"login_section"}>
            <div className={"login_container"}>

                <h1 className={"login_title"}>Zaloguj się</h1>
                <img className={"img_decor"} src={imageSvg} alt={"element dekoracyjny"}/>
                <AccountInput/>
                <div className={"login_Link_container"}>
                    <Link className={"link"} ctiveClass="active" to="main_section" spy={true} smooth={true}>Załóż
                        konto</Link>
                    <Link className={"link"} ctiveClass="active" to="main_section" spy={true} smooth={true}>Zaloguj
                        się</Link>
                </div>
            </div>
        </div>
    </>


}
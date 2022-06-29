import React from "react";
import {Header} from "./Header";
import imageSvg from '../assets/Decoration.svg'
import {BrowserRouter as Router, Link as LinkRD} from "react-router-dom";


export function MainSection() {

    return <>
        <div className={"main_section"}>
            <div className={"main_section_container"}>
                <Header/>
                <div className={"main_section_container_title"}>
                    <h1>Zacznij pomagać!</h1>
                    <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <img src={imageSvg} alt={"element dekoracyjny"}/>
                    <div className={"main_section_container_links"}>
                        <Router>
                            <LinkRD to={"/logowanie"} className={"main_section_container_link main_section_container_link_left"}>Oddaj rzeczy</LinkRD>
                            <LinkRD to={"/logowanie"} className={"main_section_container_link"}>Zorganizuj zbiórkę</LinkRD>
                        </Router>
                    </div>
                </div>
            </div>
        </div>
    </>
}
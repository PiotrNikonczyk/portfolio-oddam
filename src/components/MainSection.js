import React from "react";
import {Header} from "./Header";
import imageSvg from '../assets/Decoration.svg'
import image from '../assets/Home-Hero-Image.jpg'


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
                        <a href={"#"} className={"main_section_container_link"}>Oddaj rzeczy</a>
                        <a href={"#"} className={"main_section_container_link"}>Zorganizuj zbiórkę</a>
                    </div>
                </div>
            </div>
        </div>
    </>
}
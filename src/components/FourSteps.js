import React from "react";
import {BrowserRouter as Router, Link as LinkRD} from "react-router-dom";

import imageSvg from '../assets/Decoration.svg'
import shirtSvg from '../assets/Icon-1.svg'
import bagSvg from '../assets/Icon-2.svg'
import searchSvg from '../assets/Icon-3.svg'
import deliverySvg from '../assets/Icon-4.svg'


export function FourSteps() {

    return <>
        <div className={"four_steps"} id={"fourSteps"}>
            <div className={"four_steps_container"}>
                <div className={"four_steps_container_header"}>
                    <h2 className={"four_steps_container_title"}>Wystarczą 4 proste kroki</h2>
                    <img src={imageSvg} alt={"element dekoracyjny"}/>
                </div>
                <div className={"four_steps_container_main"}>
                    <div className={"step_container shirt"}>
                        <img src={shirtSvg} alt={"koszulka"}/>
                        <h3 className={"steps_title"}>Wybierz rzeczy</h3>
                        <p className={"steps_instruction"}>ubrania, zabawki, sprzęt i inne</p>
                    </div>
                    <div className={"step_container bag"}>
                        <img src={bagSvg} alt={"torbay"}/>
                        <h3 className={"steps_title"}>Spakuj je</h3>
                        <p className={"steps_instruction"}>skorzystaj z worków na śmieci</p>
                    </div>
                    <div className={"step_container search"}>
                        <img src={searchSvg} alt={"lupa"}/>
                        <h3 className={"steps_title"}>Zdecyduj komu chcesz pomóc</h3>
                        <p className={"steps_instruction"}>wybierz zaufane miejsce</p>
                    </div>
                    <div className={"step_container delivery"}>
                        <img src={deliverySvg} alt={"strzałki"}/>
                        <h3 className={"steps_title"}>Zamów kuriera</h3>
                        <p className={"steps_instruction"}>kurier podjedzie w dogodnym terminie</p>
                    </div>
                </div>
                <div className={"four_steps_container_footer"}>
                    
                        <LinkRD to={"/logowanie"} className={"four_steps_container_footer_link"}>Oddaj rzeczy</LinkRD>

                </div>

            </div>
        </div>


    </>
}
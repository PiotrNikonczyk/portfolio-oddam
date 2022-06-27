import React from "react";
import facebookSVG from '../assets/Facebook.svg'
import instaSVG from '../assets/Instagram.svg'


export function Footer() {


    return <>
        <div className={"footer_container"}>
            <div className={"footer_container_text"}>
                    <p className={"footer_container_footer_text"}>Copyright by Coders Lab</p>
            </div>
            <div className={"footer_container_svg"}>
                <img src={facebookSVG} alt={"ikona facebooka"}/>
                <img src={instaSVG} alt={"ikona instagrama"}/>
            </div>
        </div>
    </>
}
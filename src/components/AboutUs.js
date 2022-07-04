import React from "react";
import photo from "../assets/People.jpg"
import imageSvg from '../assets/Decoration.svg'
import signature from '../assets/Signature.svg'


export function AboutUs() {

    return <>
        <div className={"about_us_container"} id={"aboutUs"}>
            <div className={"about_us_left"}>
                <h2> O nas</h2>
                <img className={"img_decoration"} src={imageSvg} alt={"element dekoracyjny"}/>
                <p className={"about_us_description"}>Nori grape silver beet broccoli kombu beet greens fava bean potato
                    quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <div className={"signature"}>
                    <img  src={signature} alt={"podpis"}/>
                </div>
            </div>
            <div className={"about_us_right"}>

            </div>
        </div>


    </>
}
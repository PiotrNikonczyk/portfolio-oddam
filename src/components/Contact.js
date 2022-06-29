import React from "react";
import {Footer} from "./Footer";
import image from '../assets/Decoration.svg'


export function Contact() {


    function handleSubmit(e) {
        e.preventDefault();
    }


    return <>
        <div className={"contact_container"}>
            <div className={"contact_container_form"}>
                <div className={"contact_container_form_container"}>
                    <h2 className={"contact_title"}>Skontaktuj się z nami</h2>
                    <img className={"img_decor"} src={image} alt={"obrazek dekoracyjny"}/>

                    <form className={"contact_form"} onSubmit={handleSubmit}>
                        <div className={"contact_form_data"}>
                            <div className={"contact_form_data_name contact_form_data_container"}>
                                <label className={"label_data user_name"}>Wpisz swoje imię</label>
                                <input type={"text"} className={"input_data input_name"}
                                       placeholder={"Zacznij pisać tutaj"}/>
                            </div>
                            <div className={"contact_form_data_mail contact_form_data_container"}>
                                <label className={"label_data user_mail"}>Wpisz swój email</label>
                                <input type={"text"} className={"input_data input_mail"}
                                       placeholder={"Zacznij pisać tutaj"}/>
                            </div>
                        </div>

                        <div className={"contact_form_text contact_form_data_container"}>
                            <label className={"label_text"}>Wpisz swoją wiadomość</label>
                            <textarea type={"text"} className={"input_text"} placeholder={"Zacznij pisać tutaj"}/>
                        </div>

                        <div className={"contact_form_button"}>
                            <button className={"button_submit"} type="submit">WYŚLIJ</button>
                        </div>


                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    </>
}
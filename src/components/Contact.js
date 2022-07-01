import React from "react";
import {Footer} from "./Footer";
import image from '../assets/Decoration.svg'


export function Contact() {


    function handleSubmit(e) {
        e.preventDefault();

        const inputName = document.querySelector(".input_name");
        const inputEmail = document.querySelector(".input_mail");
        const message = document.querySelector(".textarea_text");

        const errorName = document.querySelector(".errorInfo_name");
        const errorMail = document.querySelector(".errorInfo_mail");
        const errorText = document.querySelector(".errorInfo_text");

        let formErrors = [];

        //name checking
        const regName = /^[a-zA-Z ]+$/;
        if (!regName.test(inputName.value)) {
            errorName.style.opacity = 1;
             formErrors.push("Podałeś błędne imię")

        } else {
            errorName.style.opacity = 0;
        }

        //mail checking
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!reg.test(inputEmail.value)) {
            formErrors.push("Wypełnij poprawnie pole z email");
            errorMail.style.opacity = 1;
        } else {
            errorMail.style.opacity = 0;
        }

        //message checking
        if (message.value.length < 120) {
            formErrors.push("Podałeś za krótką wiadomość. Powinna mieć ona conajmniej 120 znaków");
            errorText.style.opacity = 1;
        } else {
            errorText.style.opacity = 0;
        }


        if (!formErrors.length) {
            console.log("dane poprawne");

            const data = {
                name: inputName.value,
                email: inputEmail.value,
                message: message.value
            }
            fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            ).then(resp => {
                if (resp.status === 200) {

                    document.querySelector(".send_message_ok").style.opacity = "1";

                }else{

                    document.querySelector(".send_message_ok").style.opacity = "0";

                }
                return resp.json();
            }).then( data =>{
                console.log(data.errors);
                }

            ).catch(err => {
                console.log('Błąd!', err);
            });
        } else {
            console.error(formErrors);
            document.querySelector(".send_message_ok").style.opacity = "0";
        }

    }


    return <>
        <div className={"contact_container"} id={"contact"}>
            <div className={"contact_container_form"}>
                <div className={"contact_container_form_container"}>
                    <h2 className={"contact_title"}>Skontaktuj się z nami</h2>
                    <img className={"img_decor"} src={image} alt={"obrazek dekoracyjny"}/>

                    <div className={"send_message_ok"}>
                        <p>Wiadomość została wsyłana</p>
                        <p>Wkrótce się skontaktujemy</p>
                    </div>

                    <form className={"contact_form"} onSubmit={handleSubmit}>
                        <div className={"contact_form_data"}>
                            <div className={"contact_form_data_name contact_form_data_container"}>
                                <label className={"label_data user_name"}>Wpisz swoje imię</label>
                                <input type={"text"} className={"input_data input_name"}
                                       placeholder={"Zacznij pisać tutaj"}/>
                                <p className={"errorInfo errorInfo_name contact_form_data_container_errorInfo"}>podane
                                    imie jest nieprawidłowe!</p>
                            </div>
                            <div className={"contact_form_data_mail contact_form_data_container"}>
                                <label className={"label_data user_mail"}>Wpisz swój email</label>
                                <input type={"text"} className={"input_data input_mail"}
                                       placeholder={"Zacznij pisać tutaj"}/>
                                <p className={"errorInfo errorInfo_mail contact_form_data_container_errorInfo"}>podane
                                    email jest nieprawidłowy!</p>
                            </div>


                        </div>


                        <div className={"contact_form_text contact_form_data_container"}>
                            <label className={"label_text"}>Wpisz swoją wiadomość</label>
                            <textarea className={"textarea_text"} placeholder={"Zacznij pisać tutaj"}/>
                        </div>
                        <p className={"errorInfo errorInfo_text"}>Wiadomość musi mieć conajmniej 120 znaków</p>

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
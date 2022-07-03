import React from "react";
import {Link as LinkRD} from "react-router-dom";
import {registerNewUser} from "../firebase/firebase";
import {signIn} from "../firebase/firebase";

export function LoginRegisterLinks({register, setLoggedUser}){

    function handleClick(e){


        if((e.target.classList.contains("link_register") && !register) || (e.target.classList.contains("link_login") && register) ){
            return ;
        }

        let redyToRegister = 0;

        const email = document.querySelector(".input_user_mail").value;
        const password = document.querySelector(".input_user_password").value;

        const reg = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/;

        if (!reg.test(email)) {
            document.querySelector(".email_error").style.opacity = "1";
            e.preventDefault();

        }
        else{
            document.querySelector(".email_error").style.opacity = "0";
            redyToRegister++;
        }


        if (password.length < 6){
            document.querySelector(".password_error").style.opacity = "1";
            e.preventDefault();

        }
        else{
            document.querySelector(".password_error").style.opacity = "0";
            redyToRegister++;
        }


        // jeśli następuje rejestracja
        if(register) {
            const passwordBis = document.querySelector(".input_user_password_bis").value;
            if (password !== passwordBis) {
                document.querySelector(".password_bis_error").style.opacity = "1";
                e.preventDefault();
            } else {
                document.querySelector(".password_bis_error").style.opacity = "0";
                redyToRegister++;
            }
        }

        if(redyToRegister === 3 && register){
            registerNewUser(email,password);
        console.log("konto założone dla ", email);
        }

        if(!register && redyToRegister === 2){
            console.log("staram się zalogować");
            signIn(email, password, setLoggedUser);

        }



    }

    if(!register){
        return <>
            <div id={"to_revers"} className={"login_Link_container"}>
                <LinkRD className={"link link_register"} to={"/rejestracja"} onClick={handleClick} >Załóż
                    konto</LinkRD>
                <LinkRD className={"link link_login"} to="/" onClick={handleClick}>Zaloguj
                    się</LinkRD>
            </div></>
    }
    else{
        return <>
            <div id={"to_revers"} className={"login_Link_container"}>
                <LinkRD className={"link link_login"} to="/logowanie" onClick={handleClick}>Zaloguj
                    się</LinkRD>
                <LinkRD className={"link link_register"} to={"/"} onClick={handleClick} >Załóż
                    konto</LinkRD>
            </div></>
    }







}
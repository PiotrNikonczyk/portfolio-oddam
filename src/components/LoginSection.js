import React from "react";
import {AccountInput} from "./AccountInput";
import {LoginRegisterLinks} from "./LoginRegisterLinks";
import imageSvg from '../assets/Decoration.svg'




export function LoginSection({register, setLoggedUser}) {


    return <>
        <div className={"login_section"}>
            <div className={"login_container"}>

                <h1 className={"login_title"}>Zaloguj się</h1>
                <img className={"img_decor"} src={imageSvg} alt={"element dekoracyjny"}/>
                <AccountInput register={register} />
                <LoginRegisterLinks register={register} setLoggedUser={setLoggedUser}/>
            </div>
        </div>
    </>


}
import React from "react";


export function AccountInput() {


    return <div className={"account_input_container"}>

        <div className={"account_single_input_container"}>
            <label className={"label_login label_user_mail"}>Email</label>
            <input type={"text"} className={"login_input input_user_mail"}/>
        </div>

        <div className={"account_single_input_container"}>
            <label className={"label_login label_user_password"}>Hasło</label>
            <input type={"password"} className={"login_input input_user_password"}/>
        </div>

    </div>

}
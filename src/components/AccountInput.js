import React from "react";


export function AccountInput({register}) {


    if (!register) {

        return <div className={"account_input_container"}>

            <div className={"account_single_input_container account_single_input_container_email"}>
                <label className={"label_login label_user_mail"}>Email</label>
                <input type={"text"} className={"login_input input_user_mail"}/>
            </div>
            <p className={"email_error"}>podany email jest nieprawidłowy</p>


            <div className={"account_single_input_container account_single_input_container_password"}>
                <label className={"label_login label_user_password"}>Hasło</label>
                <input type={"password"} className={"login_input input_user_password"}/>
            </div>
            <p className={"password_error"}>podane hasło jest za krótkie</p>
        </div>

    } else {
        return <div className={"account_input_container"}>

            <div className={"account_single_input_container account_single_input_container_email"}>
                <label className={"label_login label_user_mail"}>Email</label>
                <input type={"text"} className={"login_input input_user_mail"}/>
            </div>
            <p className={"email_error"}>podany email jest nieprawidłowy</p>


            <div className={"account_single_input_container account_single_input_container_password"}>
                <label className={"label_login label_user_password"}>Hasło</label>
                <input type={"password"} className={"login_input input_user_password"}/>
            </div>
            <p className={"password_error"}>podane hasło jest za krótkie</p>

            <div className={"account_single_input_container account_single_input_container_password_bis"}>
                <label className={"label_login label_user_password "}>Powtórz hasło</label>
                <input type={"password"} className={"login_input input_user_password_bis"}/>
            </div>
            <p className={"password_bis_error"}>podane hasła są różne</p>
        </div>

    }
}
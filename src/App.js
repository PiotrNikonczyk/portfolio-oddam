import {Home} from "./components/Home";
import {Login} from "./components/Login";
import {Register} from "./components/Register";
import {LogOut} from "./components/LogOut";

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import {useState} from "react";

export function App() {

    const [userMail, setUserMail] = useState(null);

    console.log("user mail w APP to ", userMail);

    function setLoggedUser(email){
        setUserMail(email);
        console.log("ustawienie zalogowanego usera na ", email)
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Home user={userMail} setLoggedUser={setLoggedUser}/>} />
                <Route path="/logowanie" element={<Login setLoggedUser={setLoggedUser}/>}/>
                <Route path="/rejestracja" element={<Register setLoggedUser={setLoggedUser}/>}/>
                <Route path="/wylogowano" element={<LogOut/>}/>
            </Routes>
        </BrowserRouter>
    )
}

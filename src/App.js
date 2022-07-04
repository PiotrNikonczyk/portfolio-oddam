import {Home} from "./components/Home";
import {Login} from "./components/Login";
import {Register} from "./components/Register";
import {LogOut} from "./components/LogOut";
import {OddajRzczy} from "./components/OddajRzczy";

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import {useEffect, useState} from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export function App() {

    const [userMail, setUserMail] = useState(null);

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                setUserMail(user.email);
                // ...
            } else {
                setUserMail(null);
            }
        })},[]);

    console.log("user mail w APP to ", userMail);

    function setLoggedUser(email){
        setUserMail(email);
        console.log("ustawienie zalogowanego usera na ", email)
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Home userMail={userMail} setLoggedUser={setLoggedUser}/>} />
                <Route path="/logowanie" element={<Login setLoggedUser={setLoggedUser}/>}/>
                <Route path="/rejestracja" element={<Register setLoggedUser={setLoggedUser}/>}/>
                <Route path="/wylogowano" element={<LogOut/>}/>
                <Route path="/oddaj-rzeczy" element={<OddajRzczy/>}/>
            </Routes>
        </BrowserRouter>
    )
}

import {Home} from "./components/Home";
import {Login} from "./components/Login";
import {Register} from "./components/Register";

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
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Home user={userMail}/>} />
                <Route path="/logowanie" element={<Login setLoggedUser={setLoggedUser}/>}/>
                <Route path="/rejestracja" element={<Register/>}/>
            </Routes>
        </BrowserRouter>
    )
}

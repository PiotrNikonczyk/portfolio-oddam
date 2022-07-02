import {Home} from "./components/Home";
import {Login} from "./components/Login";
import {Register} from "./components/Register";

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

export function App() {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Home />} />
                <Route path="/logowanie" element={<Login/>}/>
                <Route path="/rejestracja" element={<Register/>}/>
            </Routes>
        </BrowserRouter>
    )
}

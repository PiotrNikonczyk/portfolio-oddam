import {Home} from "./components/Home";
import {Login} from "./components/Login";

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
            </Routes>
        </BrowserRouter>
    )
}

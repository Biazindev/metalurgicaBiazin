import { Route, Routes } from "react-router-dom"

import Contato from "./components/Contato"
import Home from "./components/pages/Home"


const Rotas = () =>  (

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/contact' element={<Contato />} />
    </Routes>
    )

    export default Rotas
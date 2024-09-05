import { Route, Routes } from "react-router-dom"

import Contato from "./components/Contato"
import Home from "./components/pages/Home"
import Jobs from "./components/Jobs"


const Rotas = () =>  (

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/contact' element={<Contato />} />
        <Route path='/jobs' element={<Jobs />} />
    </Routes>
    )

    export default Rotas
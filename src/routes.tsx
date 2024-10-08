import { Route, Routes } from "react-router-dom"

import Contato from "./components/Contato"
import Home from "./components/pages/Home"
import Jobs from "./components/Jobs"
import Store from "./components/SectionStore"
import MetalStructure from "./components/MetalStructure"
import Awnings from "./components/Awnings"
import Effect from "./components/Effect"


const Rotas = () =>  (

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/contact' element={<Contato />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/store' element={<Store />} />
        <Route path='/metalstructure' element={<MetalStructure />} />
        <Route path='/awnings' element={<Awnings />} />
        <Route path={'/effect'} element={<Effect />} />
    </Routes>
    )

    export default Rotas
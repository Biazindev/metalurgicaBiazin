import { MoonLoader } from "react-spinners"

import { Container } from "./styles"
import { cores } from "../../styles/variaveis"

 const Loader = () => (
    <Container>
        <MoonLoader className="color" color={cores.black}/>
    </Container>
)

export default Loader
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'

import { Container, Contato, LinkRedes } from './styles'

const Footer = () => (
    <Container>
        <Contato>
        <div>
            <span>Metalúrgica Biazin</span>
            <p>
                Especialista em grades portões, calhas, rufos, estruturas metálicas e concertos em geral.
            </p>
        </div>
            <p>
                <span>Atendimento E-Mail</span><br />
                metalurgicabiazin@hotmail.com
            </p>
            <p>
                <span>Atendimento Whatsapp</span><br />
                (44) 99987-5065
            </p>
            
            <LinkRedes>
                <p><span>Redes Sociais</span></p>
                <a href="https://www.facebook.com/share/F1yrmuiAtZ4HtwSs/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="Facebook" />
                </a>
                <a href="https://www.instagram.com/metalurgicabiazin10?igsh=NzYxeml4Ym9ydmJ6" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="Instagram" />
                </a>
            </LinkRedes>
        </Contato>
    </Container>
)

export default Footer

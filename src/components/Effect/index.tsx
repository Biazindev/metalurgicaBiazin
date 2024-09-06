import solda from '../../assets/solda.jpg'
import luz from '../../assets/luz.png'
import corte from '../../assets/corte.jpg'
import { Container } from './styles'

const Effect = () => {
    return (
        <Container>
            <div className='item'>
                <img src={solda} alt="Serviços de solda" />
                <p>Serviços de solda e concertos em geral</p>
            </div>
            <div className='item'>
                <img src={luz} alt="Projeto para obras" />
                <p>Temos o projeto perfeito para sua obra!</p>
            </div>
            <div className='item'>
                <img src={corte} alt="Projeto para obras" />
                <p>Soluções para seu projeto!</p>
            </div>
        </Container>
    )
}

export default Effect

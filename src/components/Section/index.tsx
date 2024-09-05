import Slider from 'react-slick'

import { ButtonLink } from '../Button/styles'
import { Carousel, Container, Card, Adjust } from './styles'

import banner1 from '../../assets/cobertura (1).jpeg'
import banner2 from '../../assets/cobertura (2).jpeg'
import banner3 from '../../assets/cobertura (3).jpeg'
import banner4 from '../../assets/cobertura (4).jpeg'
import banner5 from '../../assets/cobertura (5).jpeg'
import banner6 from '../../assets/cobertura (6).jpeg'
import banner7 from '../../assets/cobertura (6).jpeg'



const SectionAlt = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true
      }
    return (
        <Adjust>
            <Card>
                <h1>Estruturas Metalicas</h1>
                <p>Sua obra merece o melhor! Estruturas metálicas com qualidade superior, durabilidade e montagem rápida. Economize tempo e garanta a segurança do seu projeto. Entre em contato e conheça nossas condições especiais!</p>
                <ButtonLink to={'/portifolio'}>Saiba mais</ButtonLink>
            </Card>
           <Container>
                <Slider {...settings}>
            <Carousel>
                <img src={banner1} alt="celular" />           
            </Carousel>
            <Carousel>
            <img src={banner2} alt="celular" />
            </Carousel>
            <Carousel>
            <img src={banner3} alt="celular" />
            </Carousel>
            <Carousel>
            <img src={banner4} alt="celular" />
            </Carousel>
            <Carousel>
            <img src={banner5} alt="celular" />
            </Carousel>
            <Carousel>
            <img src={banner6} alt="celular" />
            </Carousel>
            <Carousel>
            <img src={banner7} alt="celular" />
            </Carousel>
           </Slider>
            </Container>
        </Adjust>
    )
}


export default SectionAlt
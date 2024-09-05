import Slider from 'react-slick'

import { ButtonLink } from '../Button/styles'
import { Adjust, Card, Carousel, Container } from './styles'

import banner1 from '../../assets/forro (1).jpeg'
import banner2 from '../../assets/forro (2).jpeg'
import banner3 from '../../assets/forro (3).jpeg'
import banner4 from '../../assets/forro (4).jpeg'
import banner5 from '../../assets/forro (5).jpeg'



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
                    <h1>Toldos e fachadas</h1>
                    <p>Transforme seu ambiente com toldos personalizados! Oferecemos soluções que unem funcionalidade e estética, perfeitas para qualquer espaço. Proteja-se do sol e da chuva com estilo. Entre em contato e conheça nossas ofertas especiais!</p>
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
           </Slider>
            </Container>
        </Adjust>
    )
}


export default SectionAlt
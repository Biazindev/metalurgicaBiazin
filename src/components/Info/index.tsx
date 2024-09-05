import Slider from 'react-slick'

import { ButtonLink } from '../Button/styles'
import { Card, Carousel, Container, Adjust } from './styles'

import banner1 from '../../assets/loja (1).jpeg'
import banner2 from '../../assets/loja (2).jpeg'
import banner3 from '../../assets/loja (3).jpeg'
import banner4 from '../../assets/loja (4).jpeg'
import banner5 from '../../assets/loja (5).jpeg'
import banner6 from '../../assets/loja (16).jpeg'

const Info = () => {

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
                <h1>Loja acessórios e utensílios de churrasco</h1>
                <p>Eleve seu churrasco a outro nível com nossas grelhas e espetos de primeira linha! Aqui você encontra o que há de melhor para aquele momento especial com amigos e família. Visite-nos e veja nossas promoções!</p>
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
           </Slider>
            </Container>
        </Adjust>
    )
}


export default Info
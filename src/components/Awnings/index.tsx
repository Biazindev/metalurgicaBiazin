import Slider from 'react-slick'

import { ButtonLink } from '../Button/styles'
import { Card, Carousel, Container, Adjust } from './styles'

import banner1 from '../../assets/forro (1).jpeg'
import banner2 from '../../assets/forro (2).jpeg'
import banner3 from '../../assets/forro (3).jpeg'
import banner4 from '../../assets/forro (4).jpeg'
import banner5 from '../../assets/forro (5).jpeg'
import banner6 from '../../assets/toldo.jpeg'




const Awnings = () => {
    const phoneNumber = '5544999875065'
    const message = 'Olá, gostaria de saber mais sobre o item...'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

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
            <h1>Toldos e Fachadas</h1>
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
            <Card>
                <h2>Destaque Seu Espaço com Toldos e Fachadas de Alta Qualidade!</h2>
                <p>Transforme seu ambiente com nossos toldos e fachadas personalizados, que combinam estilo, funcionalidade e durabilidade. Nossas soluções são perfeitas para proteger contra sol, chuva e criar um visual moderno para qualquer espaço. Oferecemos uma ampla gama de materiais e designs para atender suas necessidades e deixar seu projeto único. Melhore a estética e o conforto do seu local com nossas opções exclusivas. Fale conosco e descubra nossas condições especiais!</p>
                <ButtonLink to={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    Solicite Orçamento
                </ButtonLink>
            </Card>

        </Adjust>
    )
}


export default Awnings
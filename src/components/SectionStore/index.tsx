import Slider from 'react-slick'

import { ButtonLink } from '../Button/styles'
import { Card, Carousel, Container, Adjust } from './styles'

import banner1 from '../../assets/churrasqueira.jpeg'
import banner2 from '../../assets/churrasqueira2.jpeg'
import banner3 from '../../assets/churrasqueira3.jpeg'
import banner4 from '../../assets/churrasqueira4.jpeg'
import banner5 from '../../assets/churrasqueira5.jpeg'
import banner6 from '../../assets/churrasqueira6.jpeg'
import banner7 from '../../assets/churrasqueira7.jpeg'
import { useEffect } from 'react'

const Store = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
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
            <h1>Biazin's Store</h1>
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
            <Card>
                <h2>Churrasco de Verdade Começa Aqui!</h2>
                <p>Transforme seu churrasco em uma experiência gourmet com nossa linha premium de acessórios e utensílios. Desde grelhas inovadoras e espetos de alta qualidade até ferramentas essenciais, temos tudo o que você precisa para impressionar seus convidados e elevar suas habilidades na brasa. Selecione os melhores produtos para aquele momento inesquecível com amigos e família, e descubra nossas ofertas especiais que vão deixar seu churrasco ainda mais saboroso. Seu próximo churrasco começa aqui — venha nos visitar e prepare-se para o show!</p>
                <ButtonLink to={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    Compre Agora
                </ButtonLink>
            </Card>

        </Adjust>
    )
}


export default Store
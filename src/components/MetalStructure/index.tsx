import Slider from 'react-slick'

import { ButtonLink } from '../Button/styles'
import { Card, Carousel, Container, Adjust } from './styles'

import banner1 from '../../assets/cobertura (1).jpeg'
import banner2 from '../../assets/cobertura (2).jpeg'
import banner3 from '../../assets/cobertura (3).jpeg'
import banner4 from '../../assets/cobertura (4).jpeg'
import banner5 from '../../assets/cobertura (5).jpeg'
import banner6 from '../../assets/cobertura (6).jpeg'
import banner7 from '../../assets/cobertura (7).jpeg'
import banner8 from '../../assets/estrutura.jpeg'
import banner9 from '../../assets/estrutura2.jpeg'
import banner10 from '../../assets/estrutura3.jpeg'
import { useEffect } from 'react'




const MetalStructure = () => {
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
            <h1>Estruturas Metálicas</h1>
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
                    <Carousel>
                        <img src={banner8} alt="celular" />
                    </Carousel>
                    <Carousel>
                        <img src={banner9} alt="celular" />
                    </Carousel>
                    <Carousel>
                        <img src={banner10} alt="celular" />
                    </Carousel>
                </Slider>
            </Container>
            <Card>
                <h2>Estruturas Metálicas que Garantem Segurança e Durabilidade!</h2>
                <p>Impulsione o sucesso do seu projeto com nossas estruturas metálicas de qualidade excepcional. Combinando durabilidade, segurança e montagem rápida, nossas soluções são ideais para quem busca eficiência e robustez em cada etapa da construção. Reduza custos, acelere prazos e assegure um resultado superior com materiais projetados para suportar os mais exigentes padrões do mercado. Entre em contato hoje mesmo e descubra nossas condições especiais para transformar sua obra em um verdadeiro marco de excelência!</p>
                <ButtonLink to={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    Solicite Orçamento
                </ButtonLink>
            </Card>

        </Adjust>
    )
}


export default MetalStructure
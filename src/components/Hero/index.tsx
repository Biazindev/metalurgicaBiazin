import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import WhatsAppLink from "../Whats"
import Slider from "react-slick"

import banner1 from '../../assets/cobertura (6).jpeg'
import banner2 from '../../assets/cobertura (7).jpeg'
import banner3 from '../../assets/calhas.jpg'

import { ButtonLink } from "../Button/styles"

import { Carousel, Container, ContentWrapper } from "./styles"

const Hero = () => {
  const phoneNumber = '5544999875065'
  const message = 'Olá, gostaria de saber mais sobre...'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    arrows: true
  }
  

  return (
    <>
      <Container>
        <ContentWrapper>
          <Slider {...settings}>
            <Carousel>
              <p>Transforme seu projeto com nossas estruturas metálicas de <span>ALTA QUALIDADE!</span> Oferecemos soluções personalizadas para coberturas de barracões que unem durabilidade e excelente custo-benefício. Solicite seu orçamento agora!</p>
              <img src={banner1} alt="Banner 1" />
            </Carousel>
            <Carousel>
              <p>Estruturas metálicas <span>SOB MEDIDA</span> para suas necessidades! Coberturas para barracões, galpões e muito mais com a qualidade que seu projeto merece. Fale com a gente e faça seu orçamento!</p>
              <img src={banner2} alt="Banner 2" />
            </Carousel>
            <Carousel>
              <p>Proteja sua construção das chuvas com nossas calhas de <span>ALTA RESISTÊNCIA!</span> Temos as melhores soluções para garantir que sua estrutura esteja sempre segura e livre de infiltrações. Solicite seu orçamento!</p>
              <img src={banner3} alt="Banner 2" />
            </Carousel>
          </Slider>
          <ButtonLink to={whatsappUrl} target="_blank" rel="noopener noreferrer">
            Solicite seu orçamento
          </ButtonLink>
        </ContentWrapper>
      </Container>
      <WhatsAppLink />
    </>
  )
}

export default Hero

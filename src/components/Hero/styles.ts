import styled from "styled-components"
import { breakpoints, cores } from "../../styles/variaveis"
import { ButtonLink } from "../Button/styles"

export const Container = styled.div`
    position: relative;
    background-color: ${cores.azulEscuro};
    height: 420px;

    .slick-prev,
    .slick-next {
        z-index: 1003;
        top: 50%;
        transform: translateY(-50%);
    }

    img {
        width: 100%;
        height: 420px;
        object-fit: inherit;
        display: block;
        opacity: 40%;
        
        @media(max-width: ${breakpoints.tablet}) {
            width: 100%;
            height: 320px;
            font-size: 16px;
            object-fit: cover;
        }
    }

    @media(max-width: ${breakpoints.tablet}) {
        height: 360px;
    }
`

export const ContentWrapper = styled.div`
    position: relative;
    z-index: 1; 


    ${ButtonLink} {
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        text-decoration: none;
        background-color: #00a8ff;
        border: none;
        height: 48px;
        width: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 3;
    }

`

export const Carousel = styled.div`
    position: relative;

    p {
        position: absolute;
        z-index: 4;
        width: 80%;
        font-size: 26px;
        line-height: 48px;
        font-weight: bold;
        top: 120px;
        left: 150px;
        color: #fff;
        text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.9), 4px 4px 8px rgba(0, 0, 0, 2.1);

        span {
        color: #ff3838;
        font-size: 32px;
        opacity: 90%;
        }

        @media(max-width: ${breakpoints.tablet}) {
        font-size: 16px;
        line-height: 28px;
        width: 90%;
        top: 70px;
        left: 20px;
        }
    }
`

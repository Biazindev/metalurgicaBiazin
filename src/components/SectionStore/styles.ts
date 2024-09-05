import { styled } from "styled-components"
import { breakpoints, cores } from "../../styles/variaveis"
import { ButtonLink } from "../Button/styles"



export const Container = styled.div`
    max-width: 1166px;
    width: 100%;
    height: auto;
    margin: 0 auto;
    margin-right: 40px;
    align-items: center;
    display: block;
    justify-content: center;
    gap: 20px;

    @media(max-width: ${breakpoints.tablet}) {

    
    div {
    justify-content: center;
    }
}

    @media(max-width: 988px) {
        height: auto;
        display: block;
        grid-template-columns: 1fr;
        margin: 0 auto;
        align-items: center;
        justify-content: center;
    }

    img {
        width: 100%;
        height: auto;
    
    @media(max-width: 506px) {
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    }
        
    }

.slick-list {
    position: relative;
    display: block;
    overflow: hidden;
    border-radius: 24px;
    object-fit: cover;
    margin: 24px;
    margin: 0;
    padding: 0;
    width: 100%;
    height: auto;
    margin-bottom: 48px;

    @media(max-width: 778px) {
    width: 100%;
    height: auto;
    }
`


export const Carousel = styled.div`
    position: relative;
    width: 100%;
    height: auto;

    img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    }
`

export const Card = styled.div`


p{
    font-size: 16px;
    line-height: 32px;
    font-weight: 400;
    width: 100%;
    margin-right: 24px;
    margin: 0 auto;
    display: flex;
    justify-content: center;   
    z-index: 1000;
    color: #f7f1e3;
    margin-bottom: 8px;

    @media(max-width: ${breakpoints.tablet}) {
        width: 100%;
        font-size: 16px;
    }
    }

     ${ButtonLink} {
    display: flex;
    margin: 16px auto;
    text-decoration: none;
    background-color: #00a8ff;
    border: none;
    height: 32px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${cores.text1};
    }

    h1 {
    color: #00a8ff;
    font-size: 32px;
    z-index: 1000;
    margin-right: 56px;
    margin: 0 auto;
    display: flex;
    width: 100%;
    justify-content: center;
    text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1), 4px 4px 8px rgba(0, 0, 0, .2);
    }
`

export const Adjust = styled.div`
    margin: 0 auto;
    display: block;
    width: 800px;
    height: auto;
    padding: 48px;

    @media(max-width: 778px) {
    width: 100%;
    }

    h1 {
    color: #ff3838;
    font-size: 64px;
    z-index: 1000;
    margin: 32px auto;
    display: flex;
    width: 100%;
    justify-content: center;
    text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1), 4px 4px 8px rgba(0, 0, 0, .2);

    @media(max-width: 778px) {
    font-size: 40px;
    }
    }

    h2 {
    color: #00a8ff;
    font-size: 32px;
    z-index: 1000;
    margin: 32px auto;
    display: flex;
    width: 100%;
    justify-content: center;
    text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1), 4px 4px 8px rgba(0, 0, 0, .2);
    }
`
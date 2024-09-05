import { styled } from "styled-components"
import { breakpoints, cores } from "../../styles/variaveis"
import { ButtonLink } from "../Button/styles"



export const Container = styled.div`
    max-width: 1166px;
    width: 100%;
    height: auto;
    margin: 0 auto;
    align-items: center;
    display: flex;
    justify-content: center;
    gap: 20px;

    @media(max-width: ${breakpoints.tablet}) {

    
    div {
    justify-content: center;
    }
}

    @media(max-width: 988px) {
        height: auto;
        display: grid;
        width: 200px;
        grid-template-columns: 1fr;
        margin: 0 auto;
        align-items: center;
        justify-content: center;
    }

    img {
        width: 300px;
        height: 500px;
    
    @media(max-width: 506px) {
    display: grid;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    }
        
    }

    img {
    width: 200px;
    height: 250px;
    border-radius: 8px;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.9), 4px 4px 8px rgba(0, 0, 0, 2.1);
    

    }
.slick-list {
    position: relative;
    display: block;
    overflow: hidden;
    border-radius: 24px;
    object-fit: cover;
    margin: 24px;
    padding: 0;
    width: 550px;
    height: 250px;

    @media(max-width: 600px) {
    width: 400px;
}
    @media(max-width: 410px) {
    width: 280px;
}
`


export const Carousel = styled.div`
    position: relative;
    width: 300px;

    img {
    width: 100%;
    }
`

export const Card = styled.div`

p{
    font-size: 24px;
    font-weight: 400;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;   
    z-index: 1000;
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
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${cores.text1};

    @media(max-width: ${breakpoints.tablet}) {
        display: none;
    }
    }

    h1 {
    color: #00a8ff;
    z-index: 1000;
    margin: 0 auto;
    display: flex;
    width: 100%;
    padding-bottom: 8px;
    justify-content: center;
    text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.9), 4px 4px 8px rgba(0, 0, 0, 2.1);
    }
`

export const Adjust = styled.div`
    margin: 0 auto;
    display: flex;
    jutify-content: center;
    max-width: 1166px;
    width: 100%;
    padding: 48px;

    @media(max-width: 1166px) {
    display: block;
}

`
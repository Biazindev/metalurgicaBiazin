import { styled } from "styled-components";
import { breakpoints, cores } from "../../styles/variaveis";

export const Container = styled.footer` 
    display: flex;    
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 150px;
    padding-top: 16px;
    background: linear-gradient(135deg, #5352ed 0%, #1B1464 100%);
    color: #dfe4ea;
    margin-top: auto;

    @media(max-width: ${breakpoints.mobile}) {
        background-size: cover;
        width: 100%;
        height: 350px;
        display: block;
        padding: 24px;

    }

    div {
        text-align: start;
        margin-bottom: 16px;
    }

    span {
        font-size: 16px;
        font-weight: bold;
        text-align: start;
        color: #dfe4ea;
    }

    p {
        font-size: 14px;
        line-height: 1.6;
        color: #dfe4ea;
        text-align: start;
        @media(max-width: ${breakpoints.mobile}) {
    }

        div {
            margin: 0 24px;
            text-align: left;

            @media(max-width: ${breakpoints.mobile}) {
            background-size: cover;
            width: 100%;
            display: block; 
    }
        }
    }
`

export const Contato = styled.div`
    margin-bottom: 16px;
    display:flex;
    width: 1024px;
    margin: 0 auto;
    justify-content: center;

    p {
        margin-right: 12px;
        text-align: start;
        color: #dfe4ea;

        @media(max-width: ${breakpoints.mobile}) {
        margin-top: 16px;
        width: 300px;
        margin-left: 0;
    }
    }

    span {
        font-weight: bold;
        text-align: start;
        color: #dfe4ea;
    }
        @media(max-width: ${breakpoints.mobile}) {
        background-size: cover;
        width: 100%;
        display: block;  
    }
`

export const SocialIcons = styled.div`
    display: flex;
    align-items: center;
    text-align: start;

    p {
        margin-bottom: 8px;
        font-weight: bold;
        color: #dfe4ea;
    }

    div {
        display: flex;
        justify-content: center;
    }

    img {
        margin: 0 8px;
        cursor: pointer;
        transition: transform 0.2s ease-in-out;

        &:hover {
            transform: scale(1.1);
        }
    }

    @media (min-width: 768px) {
        margin: 0 24px;

        div {
            justify-content: flex-start;
        }
    }
`

export const LinkRedes = styled.div`
    width: 150px;
`

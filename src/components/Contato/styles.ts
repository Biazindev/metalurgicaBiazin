import { styled } from "styled-components"
import { breakpoints, cores } from "../../styles/variaveis"


export const Container = styled.div`
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;

    h1 {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${cores.text1};
    }

     @media(max-width: 980px) {
        display: grid;
        grid-template-columns: 1fr;
        margin: 0 auto;
        justify-content: center;
`


export const Sociais = styled.div`
    margin: 0 auto;
    align-items: center;
    justify-content: center;
`

export const Card = styled.div`
    margin-bottom: 24px;
    display: block;
    width: 460px;
    height: 158px;
    background-color: ${cores.backgroundBod};
    border-radius: 8px;

        @media(max-width: 480px) {
        width: 320px;
    }

    div {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;

    span {
    
    width: 80px;
    height: 80px;
    margin-right: 8px;
    border: 1px solid #61DBFB;
    border-radius: 50%;
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;

    &:hover {
    background-color: #61DBFB;
    }

    h2 {
    color: #fff;
    }
    }

    a {
    color: #fff;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9), 4px 4px 8px rgba(0, 0, 0, 0.9);
    border: 1px solid #61DBFB;
    border-radius: 8px;
    margin-right: 16px;
    width: 60px;
    height: 60px;
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;

    &:hover {
    background-color: #61DBFB;
    position: relative;
    top: -10px;
    }
    }
`

export const Formulario = styled.div`
    display: block;
    width: 452px;
    margin: 0 auto;
    align-items: center;
    justify-content: center;

        @media(max-width: 480px) {
        width: 320px;
    }

    ul {
    li {
    width: 100%;
    padding-bottom: 24px;

    input {
    width: 100%;
    height: 48px;
    border-radius: 8px;
    border: none;
    outline: none;
    font-size: 1.5rem;
    padding: 8px 16px;
    background-color: ${cores.backgroundBod};
    }

    textarea {
    width: 100%;
    height: 234px;
    resize: none;
    border: none;
    outline: none;
    font-size: 1.5rem;
    padding: 8px;
    border-radius: 8px;
    background-color: ${cores.backgroundBod};
    }
    }
}
`
export const ButtonEmail = styled.button`
    background-color: #61DBFB;
    width: 218px;
    padding: 0.5rem 1rem;
    border: none;
    outline: none;
    border-radius: 4px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    gap: 1rem;
    font-size: 1.2rem;
    font-weight: bold;
    color: rgb(244, 244, 245);
    cursor: pointer;

    @media(max-width: 480px) {
        width: 140px;
        justify-content: space-around;
    }
`
export const Env = styled.div`
    display: flex;
    justify-content: space-between;
`

export const ButtonZap = styled.button`
    background-color: rgb(34, 197, 94);
    width: 218px;
    padding: 0.5rem 1rem;
    border: none;
    outline: none;
    border-radius: 4px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    gap: 1rem;
    font-size: 1.2rem;
    font-weight: bold;
    color: rgb(244, 244, 245);
    cursor: pointer;

        @media(max-width: 480px) {
        width: 140px;
    }
`

export const TextItem = styled.h1`
    margin: 0 auto;
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 24px;
    color: ${cores.text3};
`
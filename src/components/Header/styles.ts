import styled from "styled-components";
import { Link } from "react-router-dom";
import { breakpoints, cores } from "../../styles/variaveis";

export const ContainerHeader = styled.div`
    width: 100%;
    height: 116px;
    display: flex;
    justify-content: space-between;
    background: linear-gradient(135deg, #5352ed 0%, #1B1464 100%);
    
        img {
            width: 200px;
            height: 100px;
            display: block;
        }

    span {
    color: #fff;
    position: relative;
    top: -10px;
    left: 74px;
    font-size: 16px;
    }

    @media(max-width: ${breakpoints.mobile}) {
        background-size: cover;
        width: 100%;
    }
`

export const Display = styled.div<{ $isOpen: boolean }>`
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 1000;
    

    nav {
        display: flex;
        flex-grow: 2;
        height: ${(props) => (props.$isOpen ? "100vh" : "0")};
        top: -40px;
        padding: 8px;

        @media (max-width: 890px) {
            flex-direction: column;
            margin-top: 110px;
            width: 200px;
            position: fixed;
            border-radius: 8px;
            height: 174em;
            opacity: 85%;
            background-color: #000;
            display: ${(props) => (props.$isOpen ? "flex" : "none")};
     }
    }
`

export const LinkHeader = styled(Link)`
    font-size: 24px;
    font-weight: bold;
    color: #fff;
    text-shadow: 0 4px 8px rgba(0, 0, 0, 1.0);
    text-decoration: none;
    z-index: 1000;

    img {
    width: 50;
    height: 50px;
    }

    @media(max-width: 890px) {
        font-size: 16px;
    }
`

export const Hamburguer = styled.div`
    width: 32px;
    cursor: pointer;
    z-index: 2000;
    display: block;
    position: relative;
    top: 55px;
    margin-left: 24px;
    span {
        height: 2px;
        display: block;
        width: 100%;
        margin-bottom: 4px;
        height: 2px;
        display: block;
        width: 32px;
        margin-bottom: 4px;
        background: ${cores.text1};
    }

    @media (min-width: 890px) {
        display: none;
        z-index: 1001;
    }
`

export const NavMobile = styled.nav`
    width: 200px;

    &.is-open {
        display: block;
        width: 200px;
        background-color: ${cores.backgroundBod};
    }

    @media(min-width: 890px) {
        display: none;
    }
`

export const DisplayHeader = styled.div`
    width: 100%;
    align-items: center;
    position: absolute;
    justify-content: center;
    z-index: 1003;
    top: 65px;
    display: none;
    margin: 0 auto;
    align-items: center;

    @media(min-width: 890px) {
        display: flex;
    }
    
    
    nav {

        display: flex;
        justify-content: space-around;
            
        ul{
            display: flex;
            position: relative;

            li {
                margin-left: 24px;
            }
        }
    }
`
export const LinkItem = styled.div`
    width: 100%;
    margin: 12px auto;
    padding: 8px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${cores.background2};
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9), 4px 4px 8px rgba(0, 0, 0, 0.9);

`
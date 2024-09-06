import styled from "styled-components";
import { cores } from "../../styles/variaveis";

export const Container = styled.div`
    padding: 56px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    gap: 20px;
    background-color: #1e272e;

    @media(max-width: 778px) {
    display: block;
}

    .item {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        @media(max-width: 778px) {
        margin-bottom: 48px;
        border-bottom: 1px solid ${cores.text3};
}
    }

    img {
        width: 200px;
        height: 200px;
        opacity: 5%;
        border-radius: 50%;
        transition: opacity 0.3s ease;
        &:hover {
            opacity: 100%;
        }
    }

    p {
        margin-top: 8px;
        font-size: 12px;
        color: #00a8ff;
        margin-bottom: 48px;
        text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1), 4px 4px 8px rgba(0, 0, 0, .2);
    }
`

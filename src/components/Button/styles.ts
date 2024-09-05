import { styled } from "styled-components"
import { Link } from "react-router-dom"
import { cores } from "../../styles/variaveis"


export const ButtonContainer = styled.button`
        width: 100%;
        font-size: 16px;
        font-weight: bold;
        color: ${cores.text1};
        height: 32px;
        background-color: transparent;
        border-radius: 8px;
        border: none;
        cursor: pointer;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 1.0);
        z-index: 1000;

        &:hover {
            background-color: #00a8ff;
            border: none;
            height: 34px;
        }
        }
`

export const ButtonLink = styled(Link)`
        margin-top: 32px;
        font-size: 16px;
        font-weight: bold;
        color: ${cores.text1};
        width: 200px;
        height: 32px;
        background-color: transparent;
        border: 1px solid black;
        border-radius: 8px;
        cursor: pointer;
        z-index: 2;


        &:hover {
            background-color: #00a8ff;
            border: none;
            height: 36px;
            width: 205px;
        }
    }
`
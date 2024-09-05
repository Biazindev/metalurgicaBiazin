import { createGlobalStyle } from 'styled-components'

import { breakpoints } from './variaveis'

export const GlobalCss = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
        list-style: none;
     }

     html, body {
        overflow-x: hidden;
        }
    body {
    background: linear-gradient(to right, #d2dae2, #808e9b, #1e272e);
    }
    .container {
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
        display: grid;
        align-items: center;

        @media (max-width: ${breakpoints.mobile}) {
            grid-template-columns: 1fr;
        }

    }
`

export default GlobalCss

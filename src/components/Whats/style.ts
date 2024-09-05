import { styled } from "styled-components";

export const Whats = styled.div`
    img {
        width: 80px;
        height: 80px;
        object-fit: cover;
        position: fixed;
        bottom: 10px;
        right: 10px;
        z-index: 1000; animation: pulse 2s infinite;
}

        @keyframes pulse {
        30% {
            transform: scale(1);
        }
        40% {
            transform: scale(1.1);
        }
        60% {
            transform: scale(1.2);
        }
        80% {
            transform: scale(1.3);
        }
        100% {
            transform: scale(1.4);
        }
    }
        
`
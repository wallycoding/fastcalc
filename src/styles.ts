import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        -webkit-touch-callout: none;  /* iOS Safari */
        -webkit-user-select: none;    /* Safari */
        -khtml-user-select: none;     /* Konqueror HTML */
        -moz-user-select: none;       /* Old versions of Firefox */
        -ms-user-select: none;        /* Internet Explorer/Edge */
        user-select: none;            /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    }

    * button {
        cursor: pointer;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    min-height: 100vh;
`;

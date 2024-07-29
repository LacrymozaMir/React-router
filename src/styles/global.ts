import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: century-gothic, sans-serif;
        font-weight: 400;
        font-style: normal;
    }

    #root {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
`
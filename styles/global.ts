import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    html, body {
        box-sizing: border-box;
        width: 100%;

    }
    
    ul {
        list-style-type: none;
    }

    a {
        text-decoration: none;
    }

    button {
        border: 0;
        background-color: transparent;
    }

    input, textarea {
        &:focus {
            outline: none;
        }
    }

    h1, h2, h3, h4, h5, h6 {
        font-size: 1rem;
        font-weight: 400;
    }
`;

export default GlobalStyles;

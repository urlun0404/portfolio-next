import { createGlobalStyle } from 'styled-components';
import { theme } from 'styles/theme';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        scroll-behavior: smooth;
    }

    html, body {
        width: 100%;
        height: 100%;
        font-size: ${theme.fontSizes.$md};
        font-weight: ${theme.fontWeights.medium};
        overflow-x: hidden;
    }

    div#__next{
        position: absolute;
        top:0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    
    ul {
        list-style-type: none;
    }

    a {
        text-decoration: none;
        color:#000000;
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

    h1{
        font-size: ${theme.fontSizes.$5xl};
        @media only screen and (max-width: ${theme.breakpoints.$lg}){
            font-size: ${theme.fontSizes.$4xl};

        }
        @media only screen and  (max-width: ${theme.breakpoints.$md}){
            font-size: ${theme.fontSizes.$3xl};
        }   
        @media only screen and  (max-width: ${theme.breakpoints.$sm}){
            font-size: ${theme.fontSizes.$2xl};
        }   
    }

    h2{
        font-size: ${theme.fontSizes.$4xl};
        @media only screen and (max-width: ${theme.breakpoints.$lg}){
            font-size: ${theme.fontSizes.$3xl};
        }
        @media only screen and (max-width: ${theme.breakpoints.$md}){
            font-size: ${theme.fontSizes.$2xl};
        }
        @media only screen and  (max-width: ${theme.breakpoints.$sm}){
            font-size: ${theme.fontSizes.$xl};
        }  
    }

    h3{
        font-size: ${theme.fontSizes.$3xl};
        @media only screen and (max-width: ${theme.breakpoints.$lg}){
            font-size: ${theme.fontSizes.$xl};
        }
        @media only screen and (max-width: ${theme.breakpoints.$md}){
            font-size: ${theme.fontSizes.$xl};
        }
        @media only screen and  (max-width: ${theme.breakpoints.$sm}){
            font-size: ${theme.fontSizes.$lg};
        }  
    }

    h4{
        font-size: ${theme.fontSizes.$2xl};
        @media only screen and (max-width: ${theme.breakpoints.$lg}){
            font-size: ${theme.fontSizes.$xl};
        }
        @media only screen and (max-width: ${theme.breakpoints.$md}){
            font-size: ${theme.fontSizes.$lg};
        }
        @media only screen and  (max-width: ${theme.breakpoints.$sm}){
            font-size: ${theme.fontSizes.$md};
        }  
    }

    h5{
        font-size: ${theme.fontSizes.$xl};
        @media only screen and (max-width: ${theme.breakpoints.$lg}){
            font-size: ${theme.fontSizes.$lg};
        }
        @media only screen and (max-width: ${theme.breakpoints.$md}){
            font-size: ${theme.fontSizes.$md};
        }
        @media only screen and  (max-width: ${theme.breakpoints.$sm}){
            font-size: ${theme.fontSizes.$sm};
        }  
    }
`;

export default GlobalStyles;

import { createGlobalStyle } from 'styled-components';
import colors from './colors';

export const GlobalStyle = createGlobalStyle`
html, body {
margin: 0px;
padding: 0px;
box-sizing: border-box;
width: 100vw;
height: 100vh;
background-color: ${colors.dark};
font-family: 'Roboto', sans-serif;
color: ${colors.white};
}

h1, h2, h3, h4, p {
  margin: 0;
  padding: 0;
}

figure {
    margin: 0;
    padding: 0
}

figcaption {
    display: none;
  }

ul li {
    list-style: none;
    margin: 0px;
    padding: 0 20px 0 0;
    text-align: left;
    display: block;
    float: left;
  }
`;

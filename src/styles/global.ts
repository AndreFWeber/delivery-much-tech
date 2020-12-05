import { createGlobalStyle } from 'styled-components';
import PokemonSolid from '../assets/fonts/PokemonSolid.ttf';

export default createGlobalStyle`

  @font-face {
    font-family: 'Pokemon';
    src: url(${PokemonSolid}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
  }

  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    width: 100%;
    background: linear-gradient( to bottom, #ad1515 45%, #000000c9 5%, #000000c9 50%, #d4cbcb 50% );
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px sans-serif;
  }

  button {
    cursor: pointer;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }
`;

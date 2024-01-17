import { createGlobalStyle } from "styled-components";
import SyneRegular from "../fonts/Syne/static/Syne-Bold.ttf";
import SyneBold from "../fonts/Syne/static/Syne-ExtraBold.ttf";
import LatoRegular from "../fonts/Lato/Lato-Light.ttf";
import LatoMenu from "../fonts/Lato/Lato-Regular.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Syne';
    src: url(${SyneRegular}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'LatoMenu';
    src: url(${LatoMenu}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Lato';
    src: url(${LatoRegular}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'SyneBold';
    src: url(${SyneBold}) format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  html {
    background: #fff;
  }

  body {
    position: relative;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
  }
`;

export default GlobalStyle;

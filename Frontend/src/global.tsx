import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;

  @media (min-width: 1020px) {
    font-size: 82%;
  }
  @media (min-width: 1400px) {
    font-size: 100%;
  }
  }
`;
export default GlobalStyle;

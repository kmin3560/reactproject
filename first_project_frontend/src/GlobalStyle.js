import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    font-size : 10px;
  }

  body {
    padding-top : 4.8rem;
  }
`;

export default GlobalStyle;

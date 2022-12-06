import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
${({ theme }) => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${theme.fonts.style.defaultFont};
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  h1 {
    font-size: ${theme.fonts.size.xBig};
  }
`}
`;

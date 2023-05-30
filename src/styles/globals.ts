import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    background-color: ${(props) => props.theme.colors['gray-600']};
  }

  body, input, textarea, button {
    font-family: 'Inter', Arial, Helvetica, sans-serif;
  }

  html {
    font-size: 1rem;
  }

  @media screen and (max-width: 1180px) {
    font-size: 0.9375rem;
  }

  @media screen and (max-width: 728px) {
    font-size: 0.875rem;
  }
`;

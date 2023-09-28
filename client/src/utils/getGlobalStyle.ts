import { createGlobalStyle } from 'styled-components';
import { themeConfig } from './theme';
 
const GlobalStyle = createGlobalStyle`
  body {
    border: none;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  body,
  button,
  input { 
    font-family: 'Open Sans', Helvetica, Sans-Serif;
  }

  * {
    box-sizing: border-box;
    margin-block-start: 0px;
    margin-block-end: 0px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  /* svg {
    path {
      stroke: ${themeConfig.color.brand.pure};
    }
  } */
`;
 
export default GlobalStyle;
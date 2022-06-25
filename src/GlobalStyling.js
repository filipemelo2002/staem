import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    background: rgb(45,66,89);
    background: radial-gradient(circle, rgba(45,66,89,1) 0%, rgba(27,40,55,1) 100%);
    font-family: 'Noto Sans', sans-serif;
    color: white;
  }
  
  button {
    font-family: 'Noto Sans', sans-serif;
  }
`;


export default GlobalStyle;
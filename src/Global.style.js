import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
export const GlobalStyle = createGlobalStyle`
${reset}
* {
    box-sizing: border-box;
    outline: none;
    -webkit-text-size-adjust: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
}
html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: sans-serif;
}
body {
    -webkit-overflow-scrolling: touch;
    margin: 0 auto;
    width: 100%;
    min-height: 100vh;
    position: relative;
    background: #6dd5ed;
}
#root{
    min-height: 100vh;
  }
`;

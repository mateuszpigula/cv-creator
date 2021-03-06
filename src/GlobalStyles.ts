import { createGlobalStyle, keyframes } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html, body { 
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Roboto Condensed", sans-serif;
  background: #333;
}
* {
  box-sizing: border-box;
}
p {
  margin: 0;
}
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const animations = {
  rotate,
};

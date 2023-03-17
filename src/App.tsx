import React from 'react';
import styled, {
  createGlobalStyle,
  ThemeProvider as ThP,
} from 'styled-components';
import { dark } from './Theme/Theme';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: ${dark.textFont};
    color:${dark.color};
    background-color: ${dark.mainDarkColor};
  };
  a {
    text-decoration: none;
  }
`;
const Container = styled.div`
  margin: 0;
  padding: 0;
  @media (max-width: 850px) {
    box-shadow: none;
    padding: 1rem;
    margin: 0;
  }
`;

function App() {
  return (
    <ThP theme={dark}>
      <GlobalStyle />
      <Container></Container>
    </ThP>
  );
}

export default App;

import React from 'react';
import styled from 'styled-components';
import { Header } from './components/Header';
import { Options } from './containers/Options';
import { Game } from './containers/Game';
import { mixins } from './styles';

const Wrapper = styled.div`
  ${mixins.flexCenter}
  flex-flow: column;
`;
const App = () => {
  return (
    <Wrapper>
      <Header />
      <Options />
      <Game />
    </Wrapper>
  );
};

export default App;

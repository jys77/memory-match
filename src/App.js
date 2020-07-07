import React from 'react';
import styled from 'styled-components';
import { Header } from './components/Header';
import { Options } from './containers/Options';
import { Game } from './containers/Game';
import { mixins } from './styles';
import { StartWarning } from './components/StartWarning';
import { Win } from './components/Win';
import { Statistics } from './components/Statistics';
import { Lang } from './components/Lang';

const Wrapper = styled.div`
  ${mixins.flexCenter}
  flex-flow: column;
`;
const App = () => {
  return (
    <Wrapper>
      <Lang />
      <StartWarning />
      <Win />
      <Statistics />
      <Header />
      <Options />
      <Game />
    </Wrapper>
  );
};

export default App;

import React from 'react';
import styled from 'styled-components';
import { mixins } from '../styles';

const HeaderWrapper = styled.header`
  ${mixins.flexCenter};
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
`;

export const Header = () => {
  return <HeaderWrapper>Memory Game</HeaderWrapper>;
};

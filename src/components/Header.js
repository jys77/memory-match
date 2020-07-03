import React from 'react';
import styled from 'styled-components';
import { mixins } from '../styles';

const HeaderWrapper = styled.header`
  ${mixins.flexCenter};
  user-select: none;
  margin-top: 1rem;
  font-size: 2.2rem;
  font-family: 'Dancing Script', cursive;
  color: #fff;
`;

export const Header = () => {
  return <HeaderWrapper>Memory Match</HeaderWrapper>;
};

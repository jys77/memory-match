import React from 'react';
import styled from 'styled-components';
import { mixins } from '../styles';

const Wrapper = styled.div`
  ${mixins.flexCenter}
  flex-flow: column;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 3rem;
  background-color: #1e1e1e;
  color: #fff;
  font-size: 0.8rem;
  div:nth-child(1) {
    margin-bottom: 0.5rem;
    a {
      text-decoration: none;
      color: #348ac7;
    }
    @media (max-width: 767px) {
      display: none;
    }
  }
  div:nth-child(2) {
    span {
      color: red;
    }
  }
`;

export const Footer = () => (
  <Wrapper>
    <div>
      Welcome to star or fork it on{' '}
      <a href="https://github.com/jys77" target="_blank">
        GitHub
      </a>
      , and feel free to create issues or pull requests.
    </div>
    <div>
      Designed & Made with <span>♥</span> by Yunsheng
    </div>
  </Wrapper>
);

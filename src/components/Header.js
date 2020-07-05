import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { mixins } from '../styles';

const HeaderWrapper = styled.header`
  ${mixins.flexCenter};
  user-select: none;
  margin-top: 1rem;
  font-size: 2.2rem;
  font-family: 'Dancing Script', cursive;
  font-family: ${(props) =>
    props.locale == 'en' ? "'Dancing Script', cursive" : "'Zhi Mang Xing', cursive"};
  color: #fff;
`;

export const Header = () => {
  const { lang, locale } = useSelector((state) => state.lang);
  return <HeaderWrapper locale={locale}>{lang.header}</HeaderWrapper>;
};

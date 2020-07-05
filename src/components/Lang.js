import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Langs } from '../constants';
import { changeLang } from '../actions';
const Wrapper = styled.div`
  position: absolute;
  top: 1.5rem;
  left: 1rem;
  select {
    font-size: 0.7rem;
    -webkit-appearance: none;
    background-color: white;
    width: 3.5rem;
    height: 1.5rem;
    padding-left: 3px;
    outline: none;
    border: 2px solid darkgrey;
    border-radius: 10px;
    box-shadow: 2px 2px rgba(0, 0, 0, 0.3);
  }
  .arrow {
    position: absolute;
    right: 0.4rem;
    top: 65%;
    margin-top: -0.4rem;
    font-size: 0.4rem;
    color: #000;
  }
`;

export const Lang = () => {
  const dispatch = useDispatch();
  const { locale } = useSelector((state) => state.lang);
  const [lang, setLang] = useState(locale);

  useEffect(() => {
    dispatch(changeLang(lang));
  }, [lang]);

  return (
    <Wrapper>
      <select value={lang} onChange={(e) => setLang(e.target.value)}>
        {Object.keys(Langs).map((l) => (
          <option key={l} value={l}>
            {Langs[l].title}
          </option>
        ))}
      </select>
      <i className="arrow">&#9660;</i>
    </Wrapper>
  );
};

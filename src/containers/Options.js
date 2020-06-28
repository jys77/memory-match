import React from 'react';
import styled from 'styled-components';
import { mixins } from '../styles';
import { levels } from '../constants';
const OptionsWrapper = styled.div`
  ${mixins.flexEvenly}
  margin: 2rem auto;
  max-width: 700px;
  .option {
  }
`;

export const Options = () => {
  const levelHandler = () => {

  }
  return (
    <OptionsWrapper>
      <div className="option">
        <select onChange={levelHandler}>
        {
          Object.keys(levels).map(level => (
            <option key={level} value={level}>
              {level}
            </option>
          ))
        }
        </select>
      </div>
      <div className="option">
        <select onChange={levelHandler}>
        {
          Object.keys(levels).map(level => (
            <option key={level} value={level}>
              {level}
            </option>
          ))
        }
        </select>
      </div>
      <div className="option">
        <select onChange={levelHandler}>
        {
          Object.keys(levels).map(level => (
            <option key={level} value={level}>
              {level}
            </option>
          ))
        }
        </select>
      </div>
    </OptionsWrapper>
  );
};

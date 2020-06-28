import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { mixins } from '../styles';
import { levels } from '../constants';
import { setLevel } from '../actions';
const OptionsWrapper = styled.div`
  ${mixins.flexEvenly}
  margin: 2rem auto;
  max-width: 700px;
  .option {
  }
`;

export const Options = () => {
  const [gameLevel, setGameLevel] = useState('easy');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLevel(gameLevel));
  }, [gameLevel]);

  return (
    <OptionsWrapper>
      <div className="option">
        <select value={gameLevel} onChange={(e) => setGameLevel(e.target.value)}>
          {Object.keys(levels).map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </select>
      </div>
    </OptionsWrapper>
  );
};

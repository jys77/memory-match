import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { mixins } from '../styles';
import { levels } from '../constants';
import { setLevel } from '../actions';
const OptionsWrapper = styled.div`
  display: flex;
  margin-top: 2rem;
  .option {
    position: relative;
    margin-right: 2rem;
    select {
      -webkit-appearance: none;
      font-size: 1.2rem;
      width: 100px;
      height: 38px;
      border: 3px solid #2193b0;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: none;
      padding: 5px;
    }
    .arrow {
      position: absolute;
      right: 0.4rem;
      top: 55%;
      margin-top: -0.4rem;
      font-size: 0.6rem;
      color: #000;
    }
  }
  .stat {
    ${mixins.flexCenter}
    cursor: pointer;
    width: 100px;
    height: 38px;
    border: 3px solid #2193b0;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: none;
    padding: 5px;
    font-size: 1.2rem;
    line-height: 38px;
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
        <i className="arrow">&#9660;</i>
      </div>
      <div className="stat">Statistics</div>
    </OptionsWrapper>
  );
};

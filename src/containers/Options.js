import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { mixins } from '../styles';
import { levels } from '../constants';
import { setLevel, startGame, closeWinModal, showStatModal } from '../actions';
const OptionsWrapper = styled.div`
  display: flex;
  margin-top: 2rem;
  .option {
    position: relative;
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
      &:disabled {
        cursor: not-allowed;
      }
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
  .start {
    margin-left: 1rem;
    margin-right: 1rem;
  }
  .stat,
  .start {
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
  }

  .stat:disabled {
    cursor: not-allowed;
  }
`;

export const Options = () => {
  const [gameLevel, setGameLevel] = useState('easy');
  const [buttonText, setButtonText] = useState('Start');
  const { playing, level, popWinModal } = useSelector((state) => state.game);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLevel(gameLevel));
  }, [gameLevel]);

  useEffect(() => {
    if (popWinModal) {
      setButtonText('Start');
    }
  }, [popWinModal]);

  const gameStart = () => {
    dispatch(startGame());
  };
  return (
    <OptionsWrapper>
      <div className="option">
        <select value={gameLevel} onChange={(e) => setGameLevel(e.target.value)} disabled={playing}>
          {Object.keys(levels).map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </select>
        <i className="arrow">&#9660;</i>
      </div>
      <button
        className="start"
        onClick={() => {
          if (buttonText === 'Start') {
            setButtonText('Reset');
            gameStart();
          } else {
            setButtonText('Start');
            dispatch(closeWinModal(level));
          }
        }}
      >
        {buttonText}
      </button>
      <button className="stat" disabled={playing} onClick={() => dispatch(showStatModal())}>
        Statistics
      </button>
    </OptionsWrapper>
  );
};

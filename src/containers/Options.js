import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { mixins } from '../styles';
import { levels } from '../constants';
import { setLevel, startGame, closeWinModal, showStatModal } from '../actions';
import { smoothScrollDownToId } from '../utils';
const OptionsWrapper = styled.div`
  display: flex;
  margin-top: 2rem;
  user-select: none;
  .option {
    position: relative;
    select {
      -webkit-appearance: none;
      font-size: 1.2rem;
      width: 100px;
      height: 38px;
      color: white;
      outline: none;
      border: 2px solid transparent;
      background-color: #ff3333;
      border-radius: 10px;
      box-shadow: 3px 5px 0 rgba(0, 0, 0, 0.3), 3px 5px 0 #ff3333, 8px 7px 0 2px rgba(0, 0, 0, 0.24);
      transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s,
        background 0.25s ease-in 0s, color 0.25s ease-in 0s;
      padding: 5px;
      &:disabled {
        cursor: not-allowed;
        background-color: #bdc3c7;
        box-shadow: 3px 5px 0 rgba(0, 0, 0, 0.3), 3px 5px 0 #3e5163,
          8px 7px 0 2px rgba(0, 0, 0, 0.24);
      }
      &:focus:active {
        box-shadow: 0 0 0 rgba(0, 0, 0, 0.3);
        transform: translate(3px, 5px);
      }
    }
    .arrow {
      color: white;
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
    color: white;
    width: 100px;
    height: 38px;
    outline: none;
    border: 2px solid transparent;
    background-color: #ff3333;
    border-radius: 10px;
    box-shadow: 3px 5px 0 rgba(0, 0, 0, 0.3), 3px 5px 0 #ff3333, 8px 7px 0 2px rgba(0, 0, 0, 0.24);
    padding: 5px;
    font-size: 1.2rem;
    transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s, background 0.25s ease-in 0s,
      color 0.25s ease-in 0s;
    &:focus:active {
      box-shadow: 0 0 0 rgba(0, 0, 0, 0.3);
      transform: translate(3px, 5px);
    }
  }

  .stat:disabled {
    cursor: not-allowed;
    background-color: #bdc3c7;
    box-shadow: 3px 5px 0 rgba(0, 0, 0, 0.3), 3px 5px 0 #3e5163, 8px 7px 0 2px rgba(0, 0, 0, 0.24);
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
    smoothScrollDownToId('game-board');
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

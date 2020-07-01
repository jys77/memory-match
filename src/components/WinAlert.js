import React from 'react';
import styled from 'styled-components';
import { mixins } from '../styles';
import { useSelector, useDispatch } from 'react-redux';
import { closeWinAlert } from '../actions';
const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100;
  display: ${(props) => (!props.alert ? 'none' : '')};
  .alert {
    ${mixins.flexCenter}
    flex-flow: column;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20rem;
    height: 10rem;
    border: 2px solid #6dd5ed;
    background-color: #fff;
    border-radius: 10px;
    p:nth-child(1) {
      font-size: 2rem;
      font-weight: 700;
    }
    p:nth-child(2) {
      margin-top: 1rem;
      font-size: 1rem;
      font-weight: 500;
    }
    button {
      font-size: 1rem;
      margin-top: 3rem;
      cursor: pointer;
      width: 10rem;
      height: 2rem;
      border: 2px solid #6dd5ed;
      border-radius: 10px;
      background-color: #fff;
      color: #6dd5ed;
    }
  }
`;

export const WinAlert = () => {
  const dispatch = useDispatch();
  const { popWinAlert, timeUsed } = useSelector((state) => state.game);
  return (
    <Wrapper alert={popWinAlert}>
      <div className="alert">
        <p>YOU WIN!</p>
        <p>Your Time Used: {timeUsed}</p>
        <button onClick={() => dispatch(closeWinAlert())}>Close</button>
      </div>
    </Wrapper>
  );
};

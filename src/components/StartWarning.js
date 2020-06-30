import React from 'react';
import styled from 'styled-components';
import { mixins } from '../styles';
import { useDispatch, useSelector } from 'react-redux';
import { popStartWarning } from '../actions';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: ${(props) => (props.startWarning === false ? 'none' : '')};
  z-index: 100;
  .warning {
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
    p {
      font-size: 1rem;
      font-weight: 500;
      span {
        font-weight: 700;
      }
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

export const StartWarning = () => {
  const dispatch = useDispatch();
  const { startWarning } = useSelector((state) => state.game);
  return (
    <Wrapper startWarning={startWarning}>
      <div className="warning">
        <p>
          Please click the <span>Start</span> button above!
        </p>
        <button onClick={() => dispatch(popStartWarning())}>Close</button>
      </div>
    </Wrapper>
  );
};

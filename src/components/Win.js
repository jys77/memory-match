import React from 'react';
import styled from 'styled-components';
import { mixins } from '../styles';
import { useSelector, useDispatch } from 'react-redux';
import { closeWinModal } from '../actions';
import { transTime } from '../utils';
const Wrapper = styled.div`
  ${mixins.overlay}
  display: ${(props) => (!props.win ? 'none' : '')};
  .alert {
    ${mixins.modalWindow('20rem', '15rem')}
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
      ${mixins.modalButton}
    }
  }
`;

export const Win = () => {
  const dispatch = useDispatch();
  const { popWinModal, timeUsed, level } = useSelector((state) => state.game);
  return (
    <Wrapper win={popWinModal}>
      <div className="alert">
        <p>YOU WIN!</p>
        <p>Your time: {transTime(timeUsed)}</p>
        <button onClick={() => dispatch(closeWinModal(level))}>Close</button>
      </div>
    </Wrapper>
  );
};

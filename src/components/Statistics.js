import React from 'react';
import styled from 'styled-components';
import { mixins } from '../styles';
import { useSelector, useDispatch } from 'react-redux';
import { showStatModal } from '../actions';
import { transTime } from '../utils';

const Wrapper = styled.div`
  ${mixins.overlay}
  display: ${(props) => (!props.showStat ? 'none' : '')};
  .modal {
    ${mixins.modalWindow('20rem', '15rem')}
      p.title {
          font-size: 1.5rem;
          font-weight: 700;
      }
      .stat {
        margin-top: 1rem;
        p {
            ${mixins.flexBetween}
            padding: 0.5rem;
            span:nth-child(2) {
                margin-left: 2rem;
            }
        }
      }
      button {
        ${mixins.modalButton}
      }
  }
`;

export const Statistics = () => {
  const dispatch = useDispatch();
  const { showStat } = useSelector((state) => state.game);
  const bestEasy = localStorage.getItem('bestEasy') || 0;
  const bestMedium = localStorage.getItem('bestMedium') || 0;
  const bestHard = localStorage.getItem('bestHard') || 0;
  return (
    <Wrapper showStat={showStat}>
      <div className="modal">
        <p className="title">Best Time</p>
        <div className="stat">
          <p>
            <span>Easy:</span>
            <span>{transTime(bestEasy)}</span>
          </p>
          <p>
            <span>Medium:</span>
            <span>{transTime(bestMedium)}</span>
          </p>
          <p>
            <span>Hard:</span>
            <span>{transTime(bestHard)}</span>
          </p>
        </div>
        <button onClick={() => dispatch(showStatModal())}>Close</button>
      </div>
    </Wrapper>
  );
};

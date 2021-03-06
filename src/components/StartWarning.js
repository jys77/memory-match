import React from 'react';
import styled from 'styled-components';
import { mixins } from '../styles';
import { useDispatch, useSelector } from 'react-redux';
import { popStartWarning } from '../actions';

const Wrapper = styled.div`
  .overlay {
    ${mixins.overlay}
    display: ${(props) => (props.startWarning === false ? 'none' : '')};
  }
  .warning {
    ${mixins.modalWindow('20rem', '10rem')}
    display: ${(props) => (props.startWarning === false ? 'none' : '')};
    p {
      font-size: 1rem;
      font-weight: 500;
      span {
        font-weight: 700;
      }
    }
    button {
      ${mixins.modalButton}
    }
  }
`;

export const StartWarning = () => {
  const dispatch = useDispatch();
  const { startWarning } = useSelector((state) => state.game);
  const { lang } = useSelector((state) => state.lang);
  return (
    <Wrapper startWarning={startWarning}>
      <div className="overlay" onClick={() => dispatch(popStartWarning())} />
      <div className="warning">
        <p>{lang.warning}</p>
        <button onClick={() => dispatch(popStartWarning())}>{lang.close}</button>
      </div>
    </Wrapper>
  );
};

import { css } from 'styled-components';
import { animations } from './animations';

export const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  flexEvenly: css`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  `,
  flexStart: css`
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
  `,
  overlay: css`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 100%;
    z-index: 100;
  `,
  modalWindow: (width, height) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${width};
    height: ${height};
    border: 2px solid #6dd5ed;
    background-color: #fff;
    border-radius: 10px;
    z-index: 101;
  `,
  modalButton: css`
    font-size: 1rem;
    font-weight: 700;
    margin-top: 2rem;
    cursor: pointer;
    width: 6rem;
    height: 2rem;
    border: 2px solid #6dd5ed;
    border-radius: 10px;
    background-color: #fff;
    color: #6dd5ed;
    transition: transform 0.2s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  `,
  match: css`
    animation: ${animations.matchShake} 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    animation-delay: 0.5s;
    backface-visibility: hidden;
  `,
};

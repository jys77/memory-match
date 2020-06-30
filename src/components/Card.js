import React, { useState } from 'react';
import { mixins } from '../styles';
import styled from 'styled-components';

const CardWrapper = styled.div`
  margin: 0.2rem;
  background-color: transparent;
  perspective: 1000px;
  padding: 2px;
  width: ${(props) =>
    props.level === 'easy'
      ? '10rem'
      : props.level === 'medium'
      ? '8rem'
      : props.level === 'hard'
      ? '6rem'
      : '10rem'};
  height: ${(props) =>
    props.level === 'easy'
      ? '10rem'
      : props.level === 'medium'
      ? '8rem'
      : props.level === 'hard'
      ? '6rem'
      : '10rem'};
  @media (max-width: 767px) {
    width: 5rem;
    height: 5rem;
  }
  .card-inner {
    cursor: pointer;
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.6s;
    transform-style: preserve-3d;
  }
  .flip {
    transform: rotateY(180deg);
  }
  .card-front,
  .card-back {
    ${mixins.flexCenter}
    border: 2px solid #fff;
    border-radius: 10px;
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    background-color: #fff;
    img {
      width: 90%;
    }
  }
  .card-back {
    transform: rotateY(180deg);
  }
`;

export const Card = ({ level, name, id }) => {
  let cardClasses = ['card-inner'];
  const [clicked, setClicked] = useState(false);
  if (clicked) {
    cardClasses = ['flip', 'card-inner'];
  } else {
    cardClasses = ['card-inner'];
  }
  return (
    <CardWrapper level={level}>
      <div className={cardClasses.join(' ')} onClick={() => setClicked(!clicked)}>
        <div className="card-front">
          <img src={`/images/front.png`} alt="" />
        </div>
        <div className="card-back">
          <img src={`/images/${name}.png`} alt="" />
        </div>
      </div>
    </CardWrapper>
  );
};

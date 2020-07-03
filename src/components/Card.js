import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { mixins } from '../styles';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { popStartWarning, imageClicked } from '../actions';
import { toTop } from '../utils';
const CardWrapper = styled.div`
  margin: 0.2rem;
  background-color: transparent;
  perspective: 1000px;
  padding: 2px;
  user-select: none;
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
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.02);
  }
  ${(props) => (props.matched ? mixins.match : '')}
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

export const Card = ({ level, name, id, playing }) => {
  const dispatch = useDispatch();
  const { flipped, clicked } = useSelector((state) => state.game);
  const [revealed, setRevealed] = useState(false);
  const [cardClasses, setCardClasses] = useState(['card-inner']);

  const clickHandler = ({ id, name }) => {
    if (!playing) {
      toTop();
      dispatch(popStartWarning());
      return;
    }
    if (playing && !revealed) {
      dispatch(imageClicked({ id, name }));
    }
  };

  useEffect(() => {
    if (revealed) {
      setCardClasses(['flip', 'card-inner']);
    } else {
      setCardClasses(['card-inner']);
    }
  }, [revealed]);

  const isIncluded = (cards, id, name) => {
    if (cards.filter((card) => card.id === id && card.name === name).length > 0) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (isIncluded(flipped, id, name) || isIncluded(clicked, id, name)) {
      setRevealed(true);
    } else {
      setRevealed(false);
    }
  }, [flipped, clicked]);

  return (
    <CardWrapper level={level} matched={isIncluded(flipped, id, name)}>
      <div className={cardClasses.join(' ')} onClick={() => clickHandler({ id, name })}>
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

Card.propTypes = {
  level: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.number,
  playing: PropTypes.bool,
};

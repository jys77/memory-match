import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { mixins } from '../styles';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from '../components/Card';
import { winGame } from '../actions';

const GameWrapper = styled.div`
  ${mixins.flexCenter}
  padding: 0.5rem;
  flex-wrap: wrap;
  margin: 2rem auto;
  margin-bottom: 10rem;
  width: ${(props) =>
    props.level === 'easy'
      ? '43rem'
      : props.level === 'medium'
      ? '44rem'
      : props.level === 'hard'
      ? '53rem'
      : '43rem'};
  border: 2px solid #fff;
  border-radius: 1rem;
  @media (max-width: 767px) {
    width: 99%;
  }
`;
let clock = null;
export const Game = () => {
  const dispatch = useDispatch();
  const [time, setTime] = useState(0);
  const { data, level, playing, flipped } = useSelector((state) => state.game);
  useEffect(() => {
    if (
      (level === 'easy' && flipped.length === 12) ||
      (level === 'medium' && flipped.length === 20) ||
      (level === 'hard' && flipped.length === 40)
    ) {
      dispatch(winGame(level, time));
    }
  }, [level, flipped]);

  useEffect(() => {
    if (playing) {
      clock = setInterval(() => {
        setTime((t) => t + 1);
      }, 1000);
    } else {
      clearInterval(clock);
      setTime(0);
    }
  }, [playing]);

  return (
    <GameWrapper level={level}>
      <div id="game-board"></div>
      {data.map((img) => (
        <Card key={img.id} level={level} name={img.name} id={img.id} playing={playing} />
      ))}
    </GameWrapper>
  );
};

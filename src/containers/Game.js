import React, { useEffect } from 'react';
import styled from 'styled-components';
import { mixins } from '../styles';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from '../components/Card';

const GameWrapper = styled.div`
  ${mixins.flexCenter}
  padding: 0.5rem;
  flex-wrap: wrap;
  margin: 2rem auto;
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

export const Game = () => {
  const { data, level } = useSelector((state) => state.game);
  return (
    <GameWrapper level={level}>
      {data.map((img) => (
        <Card key={img.id} level={level} name={img.name} id={img.id} />
      ))}
    </GameWrapper>
  );
};

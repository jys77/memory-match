import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

export const Game = () => {
  const { data, level } = useSelector((state) => state.game);
  const GameWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 2rem auto;
    /* max-width: 552px;
  min-height: 380px; */
    width: ${level === 'easy'
      ? '552px'
      : level === 'medium'
      ? '800px'
      : level === 'hard'
      ? '1000px'
      : '800px'};
    min-height: 380px;
    border: 2px solid #fff;
    border-radius: 1rem;
    @media (max-width: 767px) {
      width: 99%;
    }
    .image {
      padding: 1rem;
      width: ${level === 'easy'
        ? '25%'
        : level === 'medium'
        ? '20%'
        : level === 'hard'
        ? '12.5%'
        : '25%'};
      height: ${level === 'easy'
        ? '25%'
        : level === 'medium'
        ? '20%'
        : level === 'hard'
        ? '12.5%'
        : '25%'};
      @media (max-width: 767px) {
        width: ${level === 'hard' ? '20%' : '25%'};
      }
      img {
        width: 90%;
        height: 90%;
      }
    }
  `;
  return (
    <GameWrapper>
      {data.map((img) => {
        return (
          <div className="image" key={img.id}>
            <img src={`/images/${img.name}.png`} alt={img.name} />
          </div>
        );
      })}
    </GameWrapper>
  );
};

import { keyframes } from 'styled-components';

export const animations = {
  matchShake: keyframes`
    0% { transform: rotate(0); }
    15% { transform: rotate(5deg); }
    30% { transform: rotate(-5deg); }
    45% { transform: rotate(4deg); }
    60% { transform: rotate(-4deg); }
    75% { transform: rotate(2deg); }
    85% { transform: rotate(-2deg); }
    92% { transform: rotate(1deg); }
    100% { transform: rotate(0); }
  `,
  octocatWave: keyframes`
    0%,
    100% {
      transform: rotate(0);
    }
    20%,
    60% {
      transform: rotate(-25deg);
    }
    40%,
    80% {
      transform: rotate(10deg);
    }
  `,
};

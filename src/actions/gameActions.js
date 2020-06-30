import { SET_LEVEL, CLICKED, START_GAME, WIN, ClOSE_WIN_ALERT, START_WARNING } from '../constants';

export const setLevel = (level) => {
  return {
    type: SET_LEVEL,
    payload: level,
  };
};

export const imageClicked = ({ id, name }) => {
  return {
    type: CLICKED,
    payload: {
      id,
      name,
    },
  };
};

export const popStartWarning = () => {
  return {
    type: START_WARNING,
  };
};

export const startGame = () => {
  return {
    type: START_GAME,
  };
};

export const winGame = (level, timeUsed) => {
  const bestEasy = localStorage.getItem('bestEasy') || 0;
  const bestMedium = localStorage.getItem('bestMedium') || 0;
  const bestHard = localStorage.getItem('bestHard') || 0;
  if (level === 'easy') {
    if (timeUsed < bestEasy) {
      localStorage.setItem('bestEasy', timeUsed);
    }
  } else if (level === 'medium') {
    if (timeUsed < bestMedium) {
      localStorage.setItem('bestMedium', timeUsed);
    }
  } else if (level === 'hard') {
    if (timeUsed < bestHard) {
      localStorage.setItem('bestHard', timeUsed);
    }
  }
  return {
    type: WIN,
    payload: timeUsed,
  };
};

export const closeWinAlert = () => {
  return {
    type: ClOSE_WIN_ALERT,
  };
};

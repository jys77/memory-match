import {
  SET_LEVEL,
  CLICKED,
  START_GAME,
  WIN,
  CLOSE_WIN_MODAL,
  START_WARNING,
  SHOW_STAT,
} from '../constants';

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
    if (bestEasy === 0 || timeUsed < bestEasy) {
      localStorage.setItem('bestEasy', timeUsed);
    }
  } else if (level === 'medium') {
    if (bestMedium === 0 || timeUsed < bestMedium) {
      localStorage.setItem('bestMedium', timeUsed);
    }
  } else if (level === 'hard') {
    if (bestHard === 0 || timeUsed < bestHard) {
      localStorage.setItem('bestHard', timeUsed);
    }
  }
  return {
    type: WIN,
    payload: timeUsed,
  };
};

export const closeWinModal = (level) => {
  return {
    type: CLOSE_WIN_MODAL,
    payload: level,
  };
};

export const showStatModal = () => {
  return {
    type: SHOW_STAT,
  };
};

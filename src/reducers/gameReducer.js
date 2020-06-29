import { SET_LEVEL, CLICKED, START_GAME, WIN, ClOSE_WIN_ALERT } from '../constants';
import { getImages, isMatched } from '../utils';

const bestEasy = localStorage.getItem('bestEasy') || 0;
const bestMedium = localStorage.getItem('bestMedium') || 0;
const bestHard = localStorage.getItem('bestHard') || 0;

const initialState = {
  level: 'easy',
  data: getImages(),
  clicked: [],
  flipped: [],
  timeUsed: 0,
  playing: false,
  win: false,
  popWinAlert: false,
  bestEasy,
  bestMedium,
  bestHard,
};

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LEVEL:
      return {
        ...state,
        level: action.payload,
        data: getImages(action.payload),
      };
    case CLICKED:
      const { id, name } = action.payload;
      const clicked = state.clicked;
      const flipped = state.flipped;
      clicked.push({ id, name });
      if (clicked.length === 2) {
        if (isMatched(clicked[0], clicked[1])) {
          flipped.push(...clicked);
        }
      }
      if (clicked.length > 2) {
        clicked.splice(0, 2);
      }
      return {
        ...state,
        clicked: [...clicked],
        flipped: [...flipped],
      };
    case START_GAME:
      return {
        ...state,
        clicked: [],
        flipped: [],
        playing: true,
        win: false,
        popWinAlert: false,
        timeUsed: 0,
      };
    case WIN:
      const { timeUsed } = action.payload;
      return {
        ...state,
        timeUsed,
        win: true,
        playing: false,
        popWinAlert: true,
      };
    case ClOSE_WIN_ALERT:
      return {
        ...state,
        clicked: [],
        flipped: [],
        win: false,
        playing: false,
        popWinAlert: false,
      };
    default:
      return state;
  }
};

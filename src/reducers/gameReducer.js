import { SET_LEVEL } from '../constants';
import { getImages } from '../utils';
const initialState = {
  level: 'easy',
  data: getImages,
  flipped: [],
  timeUsed: 0,
  playing: false,
};

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LEVEL:
      return {
        ...state,
        level: action.payload,
        data: getImages(action.payload),
      };
    default:
      return state;
  }
};

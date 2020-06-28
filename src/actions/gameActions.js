import { SET_LEVEL } from '../constants';

export const setLevel = (level) => {
  return {
    type: SET_LEVEL,
    payload: level,
  };
};

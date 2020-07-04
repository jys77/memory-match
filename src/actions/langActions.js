import { CHANGE_LANG } from '../constants';

export const changeLang = (locale) => {
  localStorage.setItem('lang', locale);
  return {
    type: CHANGE_LANG,
    payload: locale,
  };
};

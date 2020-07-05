import { Langs, CHANGE_LANG } from '../constants';
const lang = localStorage.getItem('lang') || navigator.language.slice(0, 2);

if (lang !== 'en' && lang !== 'zh') {
  lang = 'en';
}

const initialState = {
  locale: lang,
  lang: Langs[lang].data,
};

export const langReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LANG:
      const locale = action.payload;
      return {
        locale: action.payload,
        lang: Langs[locale].data,
      };
    default:
      return state;
  }
};

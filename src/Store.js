import { createStore, combineReducers, compose } from 'redux';
import { gameReducer, langReducer } from './reducers';

const initialState = {};

const reducer = combineReducers({
  game: gameReducer,
  lang: langReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const Store = createStore(reducer, initialState, composeEnhancers());

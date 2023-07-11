import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import {detailReducer, creditsReducer} from './movie';
import { headerReducer } from './resources'
import { popularReducer, topRatedReducer, trendingReducer } from './movies/index';

const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: [],
  keyPrefix: 'redux-',
};

const movie = combineReducers({
  detail: detailReducer,
  credits: creditsReducer,
})

const movies = combineReducers({
  popular: popularReducer,
  topRated: topRatedReducer,
  trending: trendingReducer,
})

const resources = combineReducers({
  headerImage: headerReducer,
})

const rootReducer = combineReducers({
  movie,
  movies,
  resources,
});

export { rootReducer, rootPersistConfig };

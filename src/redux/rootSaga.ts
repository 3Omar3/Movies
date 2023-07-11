// react
import { all } from 'redux-saga/effects';
import { detailSaga, creditsSaga } from './movie';
import { headerSaga } from './resources'
import { popularSaga, topRatedSaga, trendingSaga } from './movies';

// Define your root saga
function* rootSaga() {
  yield all([
    // movie
    detailSaga(),
    creditsSaga(),
    
    // movies
    popularSaga(),
    topRatedSaga(),
    trendingSaga(),
    
    // resources
    headerSaga(),
  ]);
}

export default rootSaga;

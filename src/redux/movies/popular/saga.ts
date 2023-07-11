import { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { AxiosCall } from '../../../utils/axios';
import * as actions from './actions';

function* fetchPopularMovies() {
  try {
    // Call the API to fetch popular movies
    const response: AxiosResponse<any> = yield call(AxiosCall, '/movie/popular');
    const movies = response.data.results;

    yield put(actions.fetchPopularMoviesSuccess(movies));
  } catch (error: any) {
    yield put(actions.fetchPopularMoviesFailure(error));
  }
}

export default function* popularMoviesSaga() {
  yield all([
    // Watchers
    takeLatest(actions.FETCH_POPULAR_MOVIES_REQUEST, fetchPopularMovies),
  ]);
}
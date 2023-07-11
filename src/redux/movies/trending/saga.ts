import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import * as actions from './actions';
import { AxiosCall } from '../../../utils/axios';

function* fetchTrendingMovies(action: any) {
  try {
    // Call the API to fetch trending movies
    const timeWindow = action.payload;
    const response: AxiosResponse<any> = yield call(AxiosCall, `/trending/movie/${timeWindow}`);
    const movies = response.data.results;

    yield put(actions.fetchTrendingMoviesSuccess(movies));
  } catch (error: any) {
    yield put(actions.fetchTrendingMoviesFailure(error));
  }
}

export default function* trendingMoviesSaga() {
  yield takeLatest(actions.FETCH_TRENDING_MOVIES_REQUEST, fetchTrendingMovies);
}

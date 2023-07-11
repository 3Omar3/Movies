import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { AxiosCall } from '../../../utils/axios';
import * as actions from './actions';

function* fetchMovieCreditsSaga(action: any) {
  try {
    // Call the API to fetch movie credits
    const movieId = action.payload;
    const response: AxiosResponse<any> = yield call(AxiosCall, `/movie/${movieId}/credits`);
    const credits: any = response.data;

    yield put(actions.fetchMovieCreditsSuccess(credits));
  } catch (error: any) {
    yield put(actions.fetchMovieCreditsFailure(error));
  }
}

export default function* movieCreditsSaga() {
  yield takeLatest(actions.FETCH_MOVIE_CREDITS_REQUEST, fetchMovieCreditsSaga);
}

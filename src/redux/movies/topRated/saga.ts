import { call, put, takeLatest } from "redux-saga/effects";
import { AxiosCall } from "../../../utils/axios";
import { AxiosResponse } from "axios";
import * as actions from "./actions";

function* fetchTopRatedMovies() {
  try {
    const response: AxiosResponse<any> = yield call(AxiosCall, "/movie/top_rated");
    const movies = response.data.results;

    yield put(actions.fetchTopRatedMoviesSuccess(movies));
  } catch (error: any) {
    yield put(actions.fetchTopRatedMoviesFailure(error));
  }
}

export default function* topRatedMoviesSaga() {
  yield takeLatest(actions.FETCH_TOP_RATED_MOVIES_REQUEST, fetchTopRatedMovies);
}

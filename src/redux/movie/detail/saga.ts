import * as actions from "./actions";
import { AxiosCall } from "../../../utils/axios";
import { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from "redux-saga/effects";

function* fetchMovieDetailsSaga(action: any) {
    try {
        // Call the API to fetch movie details
        const movieId = action.payload;
        const response: AxiosResponse<any> = yield call(AxiosCall, `/movie/${movieId}`);
        const movie: any = response.data;

        yield put(actions.fetchMovieDetailsSuccess(movie));
    } catch (error: any) {
        yield put(actions.fetchMovieDetailsFailure(error));
    }
}

export default function* movieSaga() {
    yield all([
        // Watchers
        takeLatest(actions.FETCH_MOVIE_DETAILS_REQUEST, fetchMovieDetailsSaga),
    ])
}
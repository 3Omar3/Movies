import * as actions from "./actions";
import { AxiosCall } from "../../../utils/axios";
import { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from "redux-saga/effects";

function* fetchRandomMovieImage() {
    try {
        // Get random image from the actual month
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth() + 1;
        const endpoint = `/discover/movie?primary_release_year=${currentYear}&primary_release_month=${currentMonth}&sort_by=popularity.desc&page=1`;

        // Consult
        const response: AxiosResponse<any> = yield call(AxiosCall, endpoint);
        const movies: any = response.data.results;

        // Select the random image
        const landscapeMovies = movies.filter((movie: any) => movie.backdrop_path);
        const randomIndex = Math.floor(Math.random() * landscapeMovies.length);
        const randomMovie = landscapeMovies[randomIndex];
        const imageUrl = `https://image.tmdb.org/t/p/original${randomMovie.backdrop_path}`;

        yield put(actions.fetchRandomMovieImageSuccess(imageUrl));
    } catch (error: any) {
        yield put(actions.fetchRandomMovieImageFailure(error));
    }
}

export default function* randomMovieImageSaga() {
    yield all([
        // Watchers
        takeLatest(actions.FETCH_RANDOM_MOVIE_IMAGE_REQUEST, fetchRandomMovieImage),
    ])
}
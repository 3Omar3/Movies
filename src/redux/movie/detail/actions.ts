// actions
export const FETCH_MOVIE_DETAILS_REQUEST = 'FETCH_MOVIE_DETAILS_REQUEST';
export const FETCH_MOVIE_DETAILS_SUCCESS = 'FETCH_MOVIE_DETAILS_SUCCESS';
export const FETCH_MOVIE_DETAILS_FAILURE = 'FETCH_MOVIE_DETAILS_FAILURE';

// action creators
export const fetchMovieDetailsRequest = (movieId: string) =>
    ({ type: FETCH_MOVIE_DETAILS_REQUEST, payload: movieId });

export const fetchMovieDetailsSuccess = (movie: []) =>
    ({ type: FETCH_MOVIE_DETAILS_SUCCESS, payload: movie });

export const fetchMovieDetailsFailure = (error: {}) =>
    ({ type: FETCH_MOVIE_DETAILS_FAILURE, payload: error });
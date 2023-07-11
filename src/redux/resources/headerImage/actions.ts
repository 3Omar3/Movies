// actions
export const FETCH_RANDOM_MOVIE_IMAGE_REQUEST = 'FETCH_RANDOM_MOVIE_IMAGE_REQUEST';
export const FETCH_RANDOM_MOVIE_IMAGE_SUCCESS = 'FETCH_RANDOM_MOVIE_IMAGE_SUCCESS';
export const FETCH_RANDOM_MOVIE_IMAGE_FAILURE = 'FETCH_RANDOM_MOVIE_IMAGE_FAILURE';

// action creators
export const fetchRandomMovieImageRequest = () =>
    ({ type: FETCH_RANDOM_MOVIE_IMAGE_REQUEST });

export const fetchRandomMovieImageSuccess = (imageUrl: string) =>
    ({ type: FETCH_RANDOM_MOVIE_IMAGE_SUCCESS, payload: imageUrl });

export const fetchRandomMovieImageFailure = (error: {}) =>
    ({ type: FETCH_RANDOM_MOVIE_IMAGE_FAILURE, payload: error });
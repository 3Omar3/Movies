// actions.js
export const FETCH_MOVIE_CREDITS_REQUEST = 'FETCH_MOVIE_CREDITS_REQUEST';
export const FETCH_MOVIE_CREDITS_SUCCESS = 'FETCH_MOVIE_CREDITS_SUCCESS';
export const FETCH_MOVIE_CREDITS_FAILURE = 'FETCH_MOVIE_CREDITS_FAILURE';

export const fetchMovieCreditsRequest = (movieId: string) => 
({ type: FETCH_MOVIE_CREDITS_REQUEST, payload: movieId, });

export const fetchMovieCreditsSuccess = (credits: {}) => 
({ type: FETCH_MOVIE_CREDITS_SUCCESS, payload: credits, });

export const fetchMovieCreditsFailure = (error: {}) => 
({ type: FETCH_MOVIE_CREDITS_FAILURE, payload: error, });
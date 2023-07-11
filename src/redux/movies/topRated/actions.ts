// actions
export const FETCH_TOP_RATED_MOVIES_REQUEST = 'FETCH_TOP_RATED_MOVIES_REQUEST';
export const FETCH_TOP_RATED_MOVIES_SUCCESS = 'FETCH_TOP_RATED_MOVIES_SUCCESS';
export const FETCH_TOP_RATED_MOVIES_FAILURE = 'FETCH_TOP_RATED_MOVIES_FAILURE';

// action creators
export const fetchTopRatedMoviesRequest = () =>
    ({ type: FETCH_TOP_RATED_MOVIES_REQUEST });

export const fetchTopRatedMoviesSuccess = (movies: []) =>
    ({ type: FETCH_TOP_RATED_MOVIES_SUCCESS, payload: movies });

export const fetchTopRatedMoviesFailure = (error: any) =>
    ({ type: FETCH_TOP_RATED_MOVIES_FAILURE, payload: error });

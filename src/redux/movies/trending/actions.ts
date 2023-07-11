// actions
export const FETCH_TRENDING_MOVIES_REQUEST = 'FETCH_TRENDING_MOVIES_REQUEST';
export const FETCH_TRENDING_MOVIES_SUCCESS = 'FETCH_TRENDING_MOVIES_SUCCESS';
export const FETCH_TRENDING_MOVIES_FAILURE = 'FETCH_TRENDING_MOVIES_FAILURE';

// action creators
export const fetchTrendingMoviesRequest = (timeWindow: 'week' | 'day') =>
    ({ type: FETCH_TRENDING_MOVIES_REQUEST, payload: timeWindow });

export const fetchTrendingMoviesSuccess = (movies: []) =>
    ({ type: FETCH_TRENDING_MOVIES_SUCCESS, payload: movies });

export const fetchTrendingMoviesFailure = (error: {}) =>
    ({ type: FETCH_TRENDING_MOVIES_FAILURE, payload: error });
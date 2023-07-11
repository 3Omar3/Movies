import * as actions from './actions';

interface TrendingMoviesState {
  movies: [];
  loading: boolean;
  initialized: boolean;
  error: string | null;
}

const initialState: TrendingMoviesState = {
  movies: [],
  loading: false,
  initialized: false,
  error: null,
};

const trendingMoviesReducer = (state = initialState, action: any): TrendingMoviesState => {
  switch (action.type) {
    case actions.FETCH_TRENDING_MOVIES_REQUEST:
      return { ...state, loading: true, initialized: false, error: null };

    case actions.FETCH_TRENDING_MOVIES_SUCCESS:
      return { ...state, movies: action.payload, loading: false, initialized: true, error: null };

    case actions.FETCH_TRENDING_MOVIES_FAILURE:
      return { ...state, loading: false, initialized: true, error: action.payload };

    default:
      return state;
  }
};

export default trendingMoviesReducer;

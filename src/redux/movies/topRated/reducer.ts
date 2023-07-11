import * as actions from './actions';

interface TopRatedMoviesState {
  movies: [];
  loading: boolean;
  initialized: boolean;
  error: string | null;
}

const initialState: TopRatedMoviesState = {
  movies: [],
  loading: false,
  initialized: false,
  error: null,
};

const topRatedMoviesReducer = (state = initialState, action: any): TopRatedMoviesState => {
  switch (action.type) {
    case actions.FETCH_TOP_RATED_MOVIES_REQUEST:
      return { ...state, loading: true, initialized: false, error: null };

    case actions.FETCH_TOP_RATED_MOVIES_SUCCESS:
      return { ...state, movies: action.payload, loading: false, initialized: true, error: null };

    case actions.FETCH_TOP_RATED_MOVIES_FAILURE:
      return { ...state, loading: false, initialized: true, error: action.payload };

    default:
      return state;
  }
};

export default topRatedMoviesReducer;
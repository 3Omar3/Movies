import * as actions from './actions';

interface PopularMoviesState {
  movies: [];
  loading: boolean;
  initialized: boolean;
  error: string | null;
}

const initialState: PopularMoviesState = {
  movies: [],
  loading: false,
  initialized: false,
  error: null,
};

const popularMoviesReducer = (state = initialState, action: any): PopularMoviesState => {
  switch (action.type) {
    case actions.FETCH_POPULAR_MOVIES_REQUEST:
      return { ...state, loading: true, initialized: false, error: null };

    case actions.FETCH_POPULAR_MOVIES_SUCCESS:
      return { ...state, movies: action.payload, loading: false, initialized: true, error: null };

    case actions.FETCH_POPULAR_MOVIES_FAILURE:
      return { ...state, loading: false, initialized: true, error: action.payload };

    default:
      return state;
  }
};

export default popularMoviesReducer;

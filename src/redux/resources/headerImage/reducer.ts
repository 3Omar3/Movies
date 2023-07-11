import * as actions from './actions';

interface RandomMovieImageState {
  imageUrl: string;
  loading: boolean;
  error: {} | null;
}

const initialState: RandomMovieImageState = {
  imageUrl: '',
  loading: false,
  error: null,
};

const randomMovieImageReducer = (state = initialState, action: any): RandomMovieImageState => {
  switch (action.type) {
    case actions.FETCH_RANDOM_MOVIE_IMAGE_REQUEST:
      return { ...state, loading: true, error: null };

    case actions.FETCH_RANDOM_MOVIE_IMAGE_SUCCESS:
      return { ...state, imageUrl: action.payload, loading: false, error: null };

    case actions.FETCH_RANDOM_MOVIE_IMAGE_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default randomMovieImageReducer;

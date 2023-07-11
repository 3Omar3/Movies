import * as actions from './actions';

const initialState = {
  movie: {},
  error: null,
  loading: false,
};

const movieReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actions.FETCH_MOVIE_DETAILS_REQUEST: 
    return { ...state, loading: true, error: null, };

     case actions.FETCH_MOVIE_DETAILS_SUCCESS: 
     return { ...state, movie: action.payload, loading: false, error: null, }; 

     case actions.FETCH_MOVIE_DETAILS_FAILURE: 
     return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default movieReducer;
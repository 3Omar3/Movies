// reducer.js
import * as actions from './actions';

const initialState = {
  error: null,
  credits: null,
  loading: false,
  initialized: false,
};

const movieCreditsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actions.FETCH_MOVIE_CREDITS_REQUEST: 
    return { ...state, loading: true, error: null, };
    
    case  actions.FETCH_MOVIE_CREDITS_SUCCESS: 
    return { ...state, loading: false, credits: action.payload, initialized: true };
    
    case  actions.FETCH_MOVIE_CREDITS_FAILURE: 
    return { ...state, loading: false, error: action.payload, initialized: true };
    
    default:
      return state;
  }
};

export default movieCreditsReducer;
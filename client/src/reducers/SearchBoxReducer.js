import {
  SEARCH_BOX_TERM_CHANGED,
  SEARCH_BOX_SUCCESS,
  SEARCH_BOX_SUBMITTED,
  SEARCH_BOX_LOADING,
  SEARCH_BOX_ERROR
} from '../actions/types';

const INITIAL_STATE = {
  searchTerm: '',
  submited: false,
  error: false,
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_BOX_TERM_CHANGED:
      return { ...state, searchTerm: action.payload };
    case SEARCH_BOX_SUCCESS:
      return { ...state, ...INITIAL_STATE };
    case SEARCH_BOX_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
};

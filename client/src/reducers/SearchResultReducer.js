import {
  SEARCH_BOX_TERM_CHANGED,
  SEARCH_BOX_SUCCESS,
  SEARCH_BOX_SUBMITTED,
  SEARCH_BOX_LOADING,
  SEARCH_BOX_ERROR
} from '../actions/types';

const INITIAL_STATE = {
  categories: [],
  author: {},
  items: [],
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_BOX_SUCCESS:
      return { ...state, ...action.payload };
    case SEARCH_BOX_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

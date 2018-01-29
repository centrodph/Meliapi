import axios from 'axios';
import { APIURL } from '../config';
import {
  SEARCH_BOX_TERM_CHANGED,
  SEARCH_BOX_SUCCESS,
  SEARCH_BOX_SUBMITTED,
  SEARCH_BOX_LOADING,
  SEARCH_BOX_ERROR
} from '../actions/types';

export const searchTermChange = text => {
  return {
    type: SEARCH_BOX_TERM_CHANGED,
    payload: text
  };
};

export const searchTermSubmitted = text => {
  return async dispatch => {
    try {
      const result = await axios.get(APIURL);
      return {
        type: SEARCH_BOX_ERROR
      };
    } catch (error) {
      return {
        type: SEARCH_BOX_ERROR
      };
    }

    return {
      type: SEARCH_BOX_LOADING
    };
  };
};

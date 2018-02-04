import axios from 'axios';
import { APIURL } from '../config';
import {
  SEARCH_BOX_TERM_CHANGED,
  SEARCH_BOX_SUCCESS,
  SEARCH_BOX_SUBMITTED,
  SEARCH_BOX_LOADING,
  SEARCH_BOX_ERROR,
  PRODUCT_DETAIL_LOADING,
  PRODUCT_DETAIL_SUCCESS,
  PRODUCT_DETAIL_ERROR
} from '../actions/types';

export const getProductDetail = productId => {
  return async dispatch => {
    dispatch({
      type: PRODUCT_DETAIL_LOADING
    });
    try {
      const result = await axios.get(APIURL + 'api/items/' + productId);
      dispatch({
        type: PRODUCT_DETAIL_SUCCESS,
        payload: result.data
      });
    } catch (error) {
      dispatch({
        type: PRODUCT_DETAIL_ERROR,
        payload: 'Error trying to access the product detail'
      });
    }
  };
};

export const searchProductlist = text => {
  return async dispatch => {
    dispatch({
      type: SEARCH_BOX_LOADING
    });
    try {
      const result = await axios.get(APIURL + 'api/items?q=' + text);
      dispatch({
        type: SEARCH_BOX_SUCCESS,
        payload: result.data
      });
    } catch (error) {
      dispatch({
        type: SEARCH_BOX_ERROR,
        payload: 'Error trying to access the product list'
      });
    }
  };
};

export const searchTermChange = text => {
  return {
    type: SEARCH_BOX_TERM_CHANGED,
    payload: text
  };
};

export const searchTermSubmitted = text => {
  return {
    type: SEARCH_BOX_LOADING
  };
};

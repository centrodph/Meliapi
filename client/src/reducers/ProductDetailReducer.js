import {
  PRODUCT_DETAIL_LOADING,
  PRODUCT_DETAIL_SUCCESS,
  PRODUCT_DETAIL_ERROR
} from '../actions/types';

const INITIAL_STATE = {
  loading: true,
  productDetail: null,
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PRODUCT_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        productDetail: action.payload
      };
    case PRODUCT_DETAIL_ERROR:
      return { ...state, error: action.payload };
    case PRODUCT_DETAIL_LOADING:
      return { ...state, ...INITIAL_STATE, loading: true };
    default:
      return state;
  }
};

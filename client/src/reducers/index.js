import { combineReducers } from 'redux';
import SearchBoxReducer from './SearchBoxReducer';
import SearchResultReducer from './SearchResultReducer';
import ProductDetailReducer from './ProductDetailReducer';
export default combineReducers({
  search: SearchBoxReducer,
  productList: SearchResultReducer,
  product: ProductDetailReducer,
  version: () => '0.0.1'
});

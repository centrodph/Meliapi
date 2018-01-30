import { combineReducers } from 'redux';
import SearchBoxReducer from './SearchBoxReducer';
import SearchResultReducer from './SearchResultReducer';
export default combineReducers({
  search: SearchBoxReducer,
  productList: SearchResultReducer,
  version: () => '0.0.1'
});

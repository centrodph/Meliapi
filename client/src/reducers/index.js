import { combineReducers } from 'redux';
import SearchBoxReducer from './SearchBoxReducer';
export default combineReducers({
  search: SearchBoxReducer,
  version: () => '0.0.1'
});

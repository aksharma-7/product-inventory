import { combineReducers } from 'redux';
import { productsReducer } from './productReducer';
import { userReducer } from './userReducer';

export default combineReducers({
  products: productsReducer,
  user: userReducer,
});

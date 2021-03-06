import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const userInfo = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : null;

const cartInfo = localStorage.getItem('cartProducts')
  ? JSON.parse(localStorage.getItem('cartProducts'))
  : null;

// const initialState = {
//   user: { userInfo },
//   products: { cartInfo },
// };

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

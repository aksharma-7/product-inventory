import { ADD_PRODUCT } from '../constants/productConstants';

const cartInfo = localStorage.getItem('cartProducts')
  ? JSON.parse(localStorage.getItem('cartProducts'))
  : '';

const initialState = {
  products: [
    {
      productName: cartInfo.productName,
      productDescription: cartInfo.productDescription,
      price: cartInfo.price,
      quantity: cartInfo.quantity,
    },
  ],
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [action.payload],
      };
    default:
      return state;
  }
};

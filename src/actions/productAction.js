import { ADD_PRODUCT } from '../constants/productConstants';

export const addproduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

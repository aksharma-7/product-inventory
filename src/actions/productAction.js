import { ADD_PRODUCT } from '../constants/productConstants';

export const addproduct = (product) => async (dispatch) => {
  try {
    dispatch({ type: ADD_PRODUCT, payload: product });
  } catch (error) {
    console.log(error);
  }
};

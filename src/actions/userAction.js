import { ADD_USER } from '../constants/userConstants';

export const addUser = (user) => async (dispatch) => {
  try {
    dispatch({ type: ADD_USER, payload: user });
  } catch (error) {
    console.log(error);
  }
};

import { ADD_USER } from '../constants/userConstants';

export const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

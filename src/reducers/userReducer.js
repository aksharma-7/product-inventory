import { ADD_USER } from '../constants/userConstants';

export const userReducer = (user = {}, action) => {
  switch (action.type) {
    case ADD_USER:
      return [...user, action.payload];

    default:
      return user;
  }
};

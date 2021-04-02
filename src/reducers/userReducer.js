import { ADD_USER } from '../constants/userConstants';

const userInfo = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : '';
const initialState = {
  userName: userInfo.userName,
  userEmail: userInfo.userEmail,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        userName: action.payload.userName,
        userEmail: action.payload.userEmail,
      };
    default:
      return state;
  }
};

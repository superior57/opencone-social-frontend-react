import isEmpty from '../../validation/is-empty';

import { ADD_USER, DELETE_USER, GET_USER, GET_USERS, SET_CURRENT_USER, UPDATE_USER } from '../actions/types';

const initialState = {
  isAuthenticated: false,
  user: {},
  users: [],
  tempUser: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case GET_USERS:
      return {
        ...state,
        users: action.payload
      }
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload]
      }
    case GET_USER:
      return {
        ...state,
        tempUser: action.payload
      }
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => user._id !== action.payload)
      }
    case UPDATE_USER:
      return {
        ...state,
        users: state.users.map(user => user._id === action.payload._id ? action.payload : user)
      }
    default:
      return state;
  }
}

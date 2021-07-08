import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import { GET_ERRORS, SET_CURRENT_USER, CLEAR_ERRORS, GET_USERS, ADD_USER, GET_USER, DELETE_USER, UPDATE_USER } from './types';

// Register User
export const registerUser = (userData, history) => dispatch => {
  axios
  .post('/api/users/register', userData)
  .then(res => {
      dispatch({type: CLEAR_ERRORS}); 
      if (history) history.push('/login')
      else dispatch({
        type: ADD_USER,
        payload: res.data
      })
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Login - Get User Token
export const loginUser = userData => dispatch => {
  axios
    .post('/api/users/login', userData)
    .then(res => {
      // Save to localStorage
      const { token } = res.data;
      // Set token to ls
      localStorage.setItem('jwtToken', token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem('jwtToken');
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};


export const checkAuthenticate = () => dispatch => {
  const token = localStorage.getItem('jwtToken');
  if (token) {
    setAuthToken(token);
    const decoded = jwt_decode(token);    
    axios.get('/api/users/current', decoded)
      .then(res => {
        dispatch({
          type: SET_CURRENT_USER,
          payload: res.data
        })      
      })
      .catch(error => {
        dispatch(logoutUser());
      })
  }
}

/**
 * Get all users
 * @returns 
 */
export const getUsers = () => dispatch => {
  axios.get('/api/users')
    .then(res => {
      dispatch({
        type: GET_USERS,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    })
}

/**
 * Get User details
 * @param {uuid} userId 
 * @returns 
 */
export const getUser = userId => dispatch => {
  axios.get('/api/users/' + userId)
    .then(res => {
      dispatch({
        type: GET_USER,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    })
}

/**
 * Delete User
 * @param {uuid} userId 
 * @returns 
 */
export const deleteUser = userId => dispatch => {
  axios.delete('/api/users/' + userId)
    .then(res => {
      dispatch({
        type: DELETE_USER,
        payload: userId
      })
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    })
}

/**
 * Update User
 * @param {uuid} userId 
 * @param {object} userData 
 * @returns 
 */
export const updateUser = (userId, userData) => dispatch => {
  axios
  .post('/api/users/' + userId, userData)
  .then(res => {
      dispatch({type: CLEAR_ERRORS}); 
      dispatch({
        type: UPDATE_USER,
        payload: res.data
      })
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
import axios from 'axios';

import {
  ADD_CATEGORY,
  UPDATE_CATEGORY,
  GET_CATEGORIES,
  // GET_CATEGORY,
  CATEGORY_LOADING,
  DELETE_CATEGORY,
  GET_ERRORS
} from './types';
import { clearErrors } from "./errorActions";

/**
 * Add Category
 * @param {object} categoryData 
 * @returns 
 */
export const addCategory = categoryData => dispatch => {
  dispatch(clearErrors());
  axios
    .post('/api/categories', categoryData)
    .then(res =>
      dispatch({
        type: ADD_CATEGORY,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

/**
 * Get Categories
 * @returns 
 */
export const getCategories = () => dispatch => {
  dispatch(setCategoryLoading());
  axios
    .get('/api/categories')
    .then(res =>
      dispatch({
        type: GET_CATEGORIES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_CATEGORIES,
        payload: null
      })
    );
};

/**
 * Update Category
 * @param {object} categoryData 
 * @returns 
 */
export const updateCategory = (id, categoryData) => dispatch => {
    dispatch(clearErrors());
    axios
        .post('/api/categories/' + id, categoryData)
        .then(res =>
        dispatch({
            type: UPDATE_CATEGORY,
            payload: res.data
        })
        )
        .catch(err =>
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    );
};

/**
 * Delete Cateory
 * @param {uuid} id 
 * @returns 
 */
export const deleteCategory = id => dispatch => {
  axios.delete('/api/categories/' + id)
    .then(res => {
      dispatch({
        type: DELETE_CATEGORY,
        payload: id
      })
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    })
};

/**
 * Set Category loading
 * @returns 
 */
export const setCategoryLoading = () => {
  return {
    type: CATEGORY_LOADING
  };
};


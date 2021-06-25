import axios from "axios";
import { ADD_FIELD_TO_SUBCATEGORY, ADD_SUBCATEGORY, DELETE_FIELD_FROM_SUBCATEGORY, DELETE_SUBCATEGORY, GET_ERRORS, GET_SUBCATEGORIES, GET_SUBCATEGORY, SUBCATEGORY_LOADING, UPDATE_SUBCATEGORY } from "./types";

const API = "/api/sub-categories/"

/**
 * Get Sub Categories
 * @param {uuid} categoryId 
 * @returns 
 */
export const getSubCategories = categoryId => dispatch => {
    dispatch(setLoading());
    axios.get(API + categoryId)
        .then(res => {
            dispatch({
                type: GET_SUBCATEGORIES,
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
 * Add New SubCategory
 * @param {uuid} categoryId 
 * @param {object} subCategoryData 
 * @returns 
 */
export const addSubCategory = (categoryId, subCategoryData) => dispatch => {
    axios.put(API + categoryId, subCategoryData)
        .then(res => {
            dispatch({
                type: ADD_SUBCATEGORY,
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
 * Update Sub Category
 * @param {uuid} categoryId 
 * @param {object} subCategoryData 
 * @returns 
 */
export const updateSubCategory = (subCategoryId, subCategoryData) => dispatch => {
    axios.post(API + subCategoryId, subCategoryData)
        .then(res => {
            dispatch({
                type: UPDATE_SUBCATEGORY,
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
 * Delete Sub category
 * @param {uuid} subCategoryId 
 * @returns 
 */
export const deleteSubCategory = subCategoryId => dispatch => {
    axios.delete(API + subCategoryId)
        .then(res => {
            dispatch({
                type: DELETE_SUBCATEGORY,
                payload: subCategoryId
            })
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        })
}

export const getSubCategory = subCategoryId => dispatch => {
    axios.get(API + "details/" + subCategoryId)
        .then(res => {
            dispatch({
                type: GET_SUBCATEGORY,
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

export const addFieldToSubCategory = (subCategoryId, fieldId) => dispatch => {
    axios.post(API + "add-field/" + subCategoryId + "/" + fieldId)
        .then(res => {
            dispatch({
                type: ADD_FIELD_TO_SUBCATEGORY,
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
 * Delete field from Sub category
 * @param {uuid} subCategoryId 
 * @param {uuid} fieldId 
 * @returns 
 */
export const deleteFieldFromSubCategory = (subCategoryId, fieldId) => dispatch => {
    axios.post(API + "delete-field/" + subCategoryId + "/" + fieldId)
        .then(res => {
            dispatch({
                type: DELETE_FIELD_FROM_SUBCATEGORY,
                payload: fieldId
            })
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        })
}

const setLoading = () => ({
    type: SUBCATEGORY_LOADING
})
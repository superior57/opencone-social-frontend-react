import axios from "axios"
import { ADD_FIELD, DELETE_FIELD, GET_ERRORS, GET_FIELDS, UPDATE_FIELD } from "./types";

const API = "/api/fields";

/**
 * Get Fields
 * @returns 
 */
export const getFields = () => dispatch => {
    axios.get(API)
        .then(res => {
            dispatch({
                type: GET_FIELDS,
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
 * Add New Field
 * @param {object} fieldData 
 * @returns 
 */
export const addField = fieldData => dispatch => {
    axios.put(API, fieldData)
        .then(res => {
            dispatch({
                type: ADD_FIELD,
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
 * Update Field
 * @param {uuid} fieldId 
 * @param {object} fieldData 
 * @returns 
 */
export const updateField = (fieldId, fieldData) => dispatch => {
    axios.post(API + "/" + fieldId, fieldData)
        .then(res => {
            dispatch({
                type: UPDATE_FIELD,
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
 * Delete Field
 * @param {uuid} fieldId 
 * @returns 
 */
export const deleteField = fieldId => dispatch => {
    axios.delete(API + "/" + fieldId)
        .then(res => {
            dispatch({
                type: DELETE_FIELD,
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
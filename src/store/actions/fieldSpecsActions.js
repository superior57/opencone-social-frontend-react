import axios from "axios"
import { ADD_FIELDSPEC, DELETE_FIELDSPEC, GET_ERRORS, GET_FIELDSPECS, UPDATE_FIELDSPEC } from "./types";

const API = "/api/field-specs";

/**
 * Get Field Specs
 * @returns 
 */
export const getFieldSpecs = fieldId => dispatch => {
    axios.get(API + fieldId)
        .then(res => {
            dispatch({
                type: GET_FIELDSPECS,
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
 * Add Field Spec
 * @param {uuid} fieldId 
 * @param {object} fieldSpecData 
 * @returns 
 */
export const addFieldSpec = (fieldId, fieldSpecData) => dispatch => {
    axios.put(API + "/" + fieldId, fieldSpecData)
        .then(res => {
            dispatch({
                type: ADD_FIELDSPEC,
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


export const updateFieldSpec = (fieldSpecid, fieldSpecData) => dispatch => {
    axios.post(API + "/" + fieldSpecid, fieldSpecData)
        .then(res => {
            dispatch({
                type: UPDATE_FIELDSPEC,
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

export const deleteFieldSpec = fieldSpecId => dispatch => {
    axios.delete(API + "/" + fieldSpecId)
        .then(res => {
            dispatch({
                type: DELETE_FIELDSPEC,
                payload: fieldSpecId
            })
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        })
}
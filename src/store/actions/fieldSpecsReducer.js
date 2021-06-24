import axios from "axios"
import { ADD_FIELDSPEC, GET_ERRORS, GET_FIELDSPECS } from "./types";

const API = "/api/field-specs/";

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
    axios(API + fieldId, fieldSpecData)
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
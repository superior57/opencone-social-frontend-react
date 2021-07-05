import axios from "axios";
import { ADD_SUB_CITY, GET_ERRORS, GET_SUB_CITIES, UPDATE_SUB_CITY, DELETE_SUB_CITY } from "./types";


const API = "/api/sub-cities";

/**
 * Get all sub cities
 * @param {uuid} cityId 
 * @returns 
 */
export const getSubCities = cityId => dispatch => {
    axios.get(API + "/" + cityId)
        .then(res => {
            dispatch({
                type: GET_SUB_CITIES,
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
 * Add new sub city
 * @param {uuid} cityId 
 * @param {object} subCityData 
 * @returns 
 */
export const addSubCity = (cityId, subCityData) => dispatch => {
    axios.put(API + "/" + cityId, subCityData)
        .then(res => {
            dispatch({
                type: ADD_SUB_CITY,
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
 * Update sub city
 * @param {uuid} id 
 * @param {object} cityData 
 * @returns 
 */
export const updateSubCity = (id, subCityData) => dispatch => {
    axios.post(API + "/" + id, subCityData)
        .then(res => {
            dispatch({
                type: UPDATE_SUB_CITY,
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
 * Delete sub city
 * @param {uuid} id 
 * @returns 
 */
export const deleteSubCity = id => dispatch => {
    axios.delete(API + "/" + id)
        .then(res => {
            dispatch({
                type: DELETE_SUB_CITY,
                payload: id
            })
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        })
}
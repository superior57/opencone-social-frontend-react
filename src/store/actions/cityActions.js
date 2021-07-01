import axios from "axios";
import { ADD_CITY, DELETE_CITY, GET_CITIES, GET_ERRORS, UPDATE_CITY } from "./types";


const API = "/api/cities/";

/**
 * Get all cities
 * @returns 
 */
export const getCities = () => dispatch => {
    axios.get(API)
        .then(res => {
            dispatch({
                type: GET_CITIES,
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
 * Add new City
 * @param {object} cityData 
 * @returns 
 */
export const addCity = cityData => dispatch => {
    axios.put(API, cityData)
        .then(res => {
            dispatch({
                type: ADD_CITY,
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
 * Update City
 * @param {uuid} id 
 * @param {object} cityData 
 * @returns 
 */
export const updateCity = (id, cityData) => dispatch => {
    axios.post(API + id, cityData)
        .then(res => {
            dispatch({
                type: UPDATE_CITY,
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
 * Delete city
 * @param {uuid} id 
 * @returns 
 */
export const deleteCity = id => dispatch => {
    axios.delete(API + id)
        .then(res => {
            dispatch({
                type: DELETE_CITY,
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
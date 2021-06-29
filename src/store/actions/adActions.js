import axios from "axios"
import { END_PROGRESS, GET_ADS, GET_ERRORS, START_PROGRESS } from "./types";

const API = "/api/ads/";

/**
 * Add New AD
 * @param {object} adData 
 * @returns 
 */
export const postAd = (adData, history) => dispatch => {
    dispatch({
        type: START_PROGRESS
    })
    axios.put(API, adData)
        .then(res => {
            dispatch({
                type: END_PROGRESS
            });
            history.push('/find');
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        })
}

/**
 * Get ADs and Search Ads
 * @param {object} search 
 * @returns 
 */
export const getAds = search => dispatch => {
    dispatch({
        type: START_PROGRESS
    });
    axios.post(API, search)
        .then(res => {
            dispatch({
                type: GET_ADS,
                payload: res.data
            });
            dispatch({
                type: END_PROGRESS
            });
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        })
}


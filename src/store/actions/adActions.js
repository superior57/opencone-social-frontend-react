import axios from "axios"
import { AD_LOADING, CLEAR_ERRORS, END_PROGRESS, GET_AD, GET_ADS, GET_ERRORS, START_PROGRESS, SUBCATEGORY_INIT, UPDATE_AD } from "./types";

const API = "/api/ads";

/**
 * Add New AD
 * @param {object} adData 
 * @returns 
 */
export const postAd = (adData, history) => dispatch => {
    dispatch({
        type: START_PROGRESS
    });    
    dispatch({
        type: CLEAR_ERRORS
    });
    axios.put(API, adData)
        .then(res => {
            dispatch({
                type: END_PROGRESS
            });
            dispatch({
                type: SUBCATEGORY_INIT
            });
            history.push('/ads');
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
            dispatch({
                type: END_PROGRESS
            });
        })
}

/**
 * Get Ad details
 * @param {uuid} adId 
 * @returns 
 */
export const getAd = adId => dispatch => {
    dispatch({
        type: CLEAR_ERRORS
    });
    dispatch({
        type: AD_LOADING
    })
    axios.get(API + "/" + adId)
        .then(res => {
            dispatch({
                type: GET_AD,
                payload: res.data
            });
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: GET_ERRORS,
                payload: err.response ? err.response.data : err
            })
        })
}

export const boostAd = adId => dispatch => {
    axios.post(API + "/boost/" + adId)
        .then(res => {
            dispatch(getAds);
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: GET_ERRORS,
                payload: err.response ? err.response.data : err
            })
        })

}


export const updateAd = (adId, adData) => dispatch => {
    axios.post(API + '/' +adId, adData)
        .then(res => {
            dispatch({type: CLEAR_ERRORS}); 
            dispatch({
                type: UPDATE_AD,
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: GET_ERRORS,
                payload: err.response ? err.response.data : err
            })
        })
}

export const addComment = (adId, commentData) => dispatch => {
    axios.post(API + "/comments/" + adId, commentData)
        .then(res => {
            dispatch({
                type: UPDATE_AD,
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: GET_ERRORS,
                payload: err.response ? err.response.data : err
            })
        })
}

export const addLike = adId => dispatch => {
    axios.post(API + "/likes/" + adId)
        .then(res => {
            dispatch({
                type: UPDATE_AD,
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: GET_ERRORS,
                payload: err.response ? err.response.data : err
            })
        })
}
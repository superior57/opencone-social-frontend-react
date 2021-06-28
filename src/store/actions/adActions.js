import axios from "axios"
import { GET_ERRORS } from "./types";

const API = "/api/ads/";


export const postAd = adData => dispatch => {
    axios.put(API, adData)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        })
}
import { AD_INIT, AD_LOADING, GET_AD, GET_ADS, SET_SEARCH } from "../actions/types";

const initialState = {
    search: {},
    loading: false,
    ads: [],
    ad: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case AD_LOADING:
            return {
                ...state,
                loading: true
            }
        case SET_SEARCH:
            return {
                ...state,
                search: action.payload
            }   
        case GET_ADS:
            return {
                ...state,
                ads: action.payload,
                loading: false
            }
        case GET_AD:
            return {
                ...state,
                ad: action.payload
            }
        case AD_INIT:
            return {
                ...state,
                ad: {}
            }
        default:
            return state;
    }
}
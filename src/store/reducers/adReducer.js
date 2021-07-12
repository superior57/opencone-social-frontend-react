import { AD_INIT, AD_LOADING, GET_AD, GET_ADS, SET_SEARCH, UPDATE_AD } from "../actions/types";

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
                ad: action.payload,
                loading: false
            }
        case AD_INIT:
            return {
                ...state,
                ad: {}
            }
        case UPDATE_AD:
            return {
                ...state,
                ads: state.ads.map(ad => ad._id === action.payload._id ? action.payload : ad),
                ad: action.payload
            }
        default:
            return state;
    }
}
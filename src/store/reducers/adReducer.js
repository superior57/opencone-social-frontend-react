import { AD_LOADING, GET_ADS, SET_SEARCH } from "../actions/types";

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
        default:
            return state;
    }
}
import { ADD_SUB_CITY, DELETE_SUB_CITY, GET_SUB_CITIES, GET_SUB_CITY, UPDATE_SUB_CITY } from "../actions/types";

const initialState = {
    subCities: [],
    subCity: {},
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_SUB_CITIES:
            return {
                ...state,
                subCities: action.payload
            }
        case ADD_SUB_CITY:
            return {
                ...state,
                subCities: [...state.subCities, action.payload]
            }
        case UPDATE_SUB_CITY:
            return {
                ...state,
                subCities: state.subCities.map(city => city._id === action.payload._id ? action.payload : city)
            }
        case DELETE_SUB_CITY:
            return {
                ...state,
                subCities: state.subCities.filter(city => city._id !== action.payload)
            }
        case GET_SUB_CITY:
            return {
                ...state,
                subCity: action.payload
            }
        default:
            return state;
    }
}
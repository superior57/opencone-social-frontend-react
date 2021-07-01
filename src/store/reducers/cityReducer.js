import { ADD_CITY, CITY_INIT, DELETE_CITY, GET_CITIES, GET_CITY, UPDATE_CITY } from "../actions/types";

const initialState = {
    cities: [],
    city: {},
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CITY_INIT:
            return {
                ...state,
                city: ""
            }
        case GET_CITIES:
            return {
                ...state,
                cities: action.payload
            }
        case ADD_CITY:
            return {
                ...state,
                cities: [...state.cities, action.payload]
            }
        case UPDATE_CITY:
            return {
                ...state,
                cities: state.cities.map(city => city._id === action.payload._id ? action.payload : city)
            }
        case DELETE_CITY:
            return {
                ...state,
                cities: state.cities.filter(city => city._id !== action.payload)
            }
        case GET_CITY:
            return {
                ...state,
                city: action.payload
            }
        default:
            return state;
    }
}
import {
    CATEGORY_LOADING,
    ADD_CATEGORY,
    GET_CATEGORY,
    GET_CATEGORIES,
    DELETE_CATEGORY,
    UPDATE_CATEGORY,
} from "../actions/types";

const initialSate = {
    categories: [],
    category: {},
    loading: false
}

export default (state = initialSate, action) => {
    switch (action.type) {
        case CATEGORY_LOADING:
            return {
                ...state,
                loading: true
            }
        case GET_CATEGORIES: 
            return {
                ...state,
                categories: action.payload,
                loading: false
            }    
        case GET_CATEGORY: 
            return {
                ...state,
                category: action.payload,
                loading: false
            }
        case ADD_CATEGORY:
            return {
                ...state,
                categories: [...state.categories, action.payload]
            }
        case UPDATE_CATEGORY:
            return {
                ...state,
                categories: state.categories.map(cat => cat._id === action.payload._id ? action.payload : cat)
            }
        case DELETE_CATEGORY:
            return {
                ...state,
                categories: state.categories.filter(category => category._id !== action.payload)
            }
        default:
            return state;
    }
}
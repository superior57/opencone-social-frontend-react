import { ADD_SUBCATEGORY, DELETE_SUBCATEGORY, GET_SUBCATEGORIES, SUBCATEGORY_LOADING, UPDATE_SUBCATEGORY } from "../actions/types";


const initialState = {
    subCategories: [],
    subCategory: {},
    loading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SUBCATEGORY_LOADING:
            return {
                ...state,
                loading: true
            }
        case GET_SUBCATEGORIES:
            return {
                ...state,
                subCategories: action.payload,
                loading: false
            }
        case ADD_SUBCATEGORY:
            return {
                ...state,
                subCategories: [...state.subCategories, action.payload],
            }
        case UPDATE_SUBCATEGORY:
            return {
                ...state,
                subCategories: state.subCategories.map(cat => cat._id === action.payload._id ? action.payload : cat)
            }
        case DELETE_SUBCATEGORY:
            return {
                ...state,
                subCategories: state.subCategories.filter(category => category._id !== action.payload)
            }
        default:
            return state;
    }
}
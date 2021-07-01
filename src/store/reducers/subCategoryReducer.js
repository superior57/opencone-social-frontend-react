import { ADD_FIELD_TO_SUBCATEGORY, ADD_SUBCATEGORY, DELETE_FIELD_FROM_SUBCATEGORY, DELETE_SUBCATEGORY, GET_SUBCATEGORIES, GET_SUBCATEGORY, SUBCATEGORY_INIT, SUBCATEGORY_LOADING, UPDATE_SUBCATEGORY } from "../actions/types";


const initialState = {
    subCategories: [],
    subCategory: {},
    fields: [],
    loading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SUBCATEGORY_INIT:
            return {
                ...state,
                subCategory: {}
            }
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
        case GET_SUBCATEGORY:
            return {
                ...state,
                subCategory: action.payload
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
        case ADD_FIELD_TO_SUBCATEGORY:
            return {
                ...state,
                subCategory: {
                    ...state.subCategory,
                    fields: [...state.subCategory.fields, action.payload]
                }
            }
        case DELETE_FIELD_FROM_SUBCATEGORY:
            return {
                ...state,
                subCategory: {
                    ...state.subCategory,
                    fields: state.subCategory.fields.filter(field => field._id !== action.payload)
                }
            }
        default:
            return state;
    }
}
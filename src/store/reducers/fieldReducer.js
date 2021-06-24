import { ADD_FIELD, DELETE_FIELD, GET_FIELDS, UPDATE_FIELD } from "../actions/types";

const initialState = {
    fields: [],
    field: {},
    loading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_FIELDS:
            return {
                ...state,
                fields: action.payload
            }
        case ADD_FIELD: 
            return {
                ...state,
                fields: [...state.fields, action.payload]
            }
        case UPDATE_FIELD:
            return {
                ...state,
                fields: state.fields.map(field => field._id === action.payload._id ? action.payload : field)
            }
        case DELETE_FIELD:
            return {
                ...state,
                fields: state.fields.filter(filed => filed._id !== action.payload)
            }    
        default:
            return state;
    }
}
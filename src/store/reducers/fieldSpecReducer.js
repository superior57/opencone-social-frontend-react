import { ADD_FIELDSPEC, DELETE_FIELDSPEC, GET_FIELDSPECS, UPDATE_FIELDSPEC } from "../actions/types";

const initialState = {
    fieldSpecs: [],
    fieldSpec: {},
    loading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_FIELDSPECS:
            return {
                ...state,
                fieldSpecs: action.payload
            }
        case ADD_FIELDSPEC:
            return {
                ...state,
                fieldSpecs: [...state.fieldSpecs, action.payload]
            }
        case UPDATE_FIELDSPEC:
            return {
                ...state,
                fieldSpecs: state.fieldSpecs.map(spec => spec._id === action.payload._id ? action.payload : spec)
            }
        case DELETE_FIELDSPEC:
            return {
                ...state,
                fieldSpecs: state.fieldSpecs.filter(spec => spec._id !== action.payload)
            }
        default:
            return state;
    }
}
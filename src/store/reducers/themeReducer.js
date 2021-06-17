import {
    UPDATE_DIRECTION,
    UPDATE_LANGUAGE
} from "../actions/types";

const initialState = {
    direction: 'ltr',
    language: "en"
}

export default (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_DIRECTION: 
            return {
                ...state,
                direction: action.payload
            };
        case UPDATE_LANGUAGE:
            return {
                ...state,
                language: action.payload,
                direction: action.payload === "ar" ? "rtl" : "ltr"
            }
        default: return state;
    }
}
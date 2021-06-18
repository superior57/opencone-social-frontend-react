import {
    UPDATE_DEVICE
} from "../actions/types";

const initialState = {
    isMobile: false,
}

export default (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_DEVICE: 
            return {
                ...state,
                isMobile: action.payload
            }
        default: return state;
    }
}
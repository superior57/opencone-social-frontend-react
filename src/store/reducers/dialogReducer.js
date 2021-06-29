import { END_PROGRESS, START_PROGRESS } from "../actions/types";

const initialState = {
    progress: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case START_PROGRESS:
            return {
                ...state,
                progress: true
            }   
        case END_PROGRESS:
            return {
                ...state,
                progress: false
            }
        default:
            return state;
    }
}
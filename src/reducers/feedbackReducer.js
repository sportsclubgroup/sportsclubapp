import { GET_FEEDBACKS, ADD_FEEDBACK, LOADING_FEEDBACK } from '../actions/types';
const initialState = {
    feedback: '',
    loading: false
}

export default function (state = initialState, action) { 
    switch (action.type) {
        case GET_FEEDBACKS:
            return {
                ...state,
                feedback: action.payload,
                loading: false
            };

        case ADD_FEEDBACK:
            return {
                ...state,
                feedback: [action.payload, ...state.feedback]
            };
        
        case LOADING_FEEDBACK:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}
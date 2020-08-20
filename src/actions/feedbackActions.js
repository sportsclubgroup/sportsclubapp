import axios from 'axios';
import { returnErrors } from './errorActions'
import { GET_FEEDBACKS, ADD_FEEDBACK, FEEDBACK_FAILED, LOADING_FEEDBACK } from './types';

export const getFeedbacks = () => dispatch => {
    dispatch(setFeedbacksLoading());
    axios.get('http://localhost:5000/api/messages/display').then(res => dispatch({
        type: GET_FEEDBACKS,
        payload: res.data
    }))
};

// export const addFeedback = feedback => dispatch => {
//     axios.post('http://localhost:5000/api/messages/feedback', feedback).then(res => dispatch({
//         type: ADD_FEEDBACK,
//         payload: res.data
//     }))
// };

export const addFeedback = ({ subject, description }) => dispatch => {
    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    // Request body
    const body = JSON.stringify({ subject, description });

    axios.post('/api/messages/feedback', body, config)
        .then(res =>
            dispatch({
                type: ADD_FEEDBACK,
                payload: res.data
            })
        )
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'FEEDBACK_FAILED'));
            dispatch({
                type: FEEDBACK_FAILED
            });
        });
}

export const setFeedbacksLoading = () => { 
    return {
        type: LOADING_FEEDBACK
    }
}
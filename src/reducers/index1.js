import { combineReducers} from  'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import feedbackReducer from './feedbackReducer';

export default combineReducers({
    error: errorReducer,
    auth: authReducer,
    feedback: feedbackReducer
});
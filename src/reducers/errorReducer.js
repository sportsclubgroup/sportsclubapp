import { GET_ERRORS, CLEAR_ERRORS } from '../actions/types';
// msg is json comes from server, statu is comes from server.
// Id- if we want to grab a certain error and do somthing with it within a component.
const initialState = {
    msg: {},
    status: null,
    id: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ERRORS:
            return {
                // msg and status comes froms server, id target specific error
                msg: action.payload.msg,
                status: action.payload.status,
                id: action.payload.id
            };
        case CLEAR_ERRORS:
            return {
                msg: {},
                status: null,
                id: null
            };
        default:
            return state;
    }
}
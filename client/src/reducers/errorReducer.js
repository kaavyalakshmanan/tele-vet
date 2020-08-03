import {GET_ERRORS, CLEAR_ERRORS} from '../actions/types';

const initialState = {
    // Comes from server
    msg: {},
    status: null,
    // Grab certain error and do something with it
    id: null 
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ERRORS:
            // Comes from payload
            return {
                msg: action.payload.msg,
                status: action.payload.status,
                id: action.payload.id 
            };
        case CLEAR_ERRORS:
            // Set everything back to default
            return {
                msg: {},
                status: null,
                id: null
            };
        default:
            return state;
    }
}
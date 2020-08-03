import axios from 'axios';

import {returnErrors} from './errorActions'
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from "./types"

const DEV_URL = 'http://localhost:9000';
const API_BASE_URL = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ?  DEV_URL + '/users' : '/users';

const proxyurl = "https://cors-anywhere.herokuapp.com/";
// const INITIAL_STRING = 'http://localhost:9000'

const config1 = {
    "mongoURI": "mongodb+srv://televet:cpsc436i@televet-u0yv3.mongodb.net/televet?retryWrites=true&w=majority",
    "jwtSecret": "ws_myJwtSecret"
}





// Check token and load user 
export const loadUser = () => (dispatch, getState) => {
    // User loading 
    dispatch({type:  USER_LOADING});

    axios.get('/auth/user', tokenConfig(getState))
        .then(res => dispatch({
            type: USER_LOADED,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR
            });
        });
}


export const register = ({name, username, email, password}) => dispatch => {

    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    
    // Request body/data that we send
    const body = JSON.stringify({name, username, email, password});

    axios.post(proxyurl + config1, body, config) 
        .then(res => dispatch(
            {
            type: REGISTER_SUCCESS,
            payload: res.data,
            
        },
        
        
        ))
        // .then((response) => {
        //     console.log(response.request.responseURL);
        //     // dispatch(receiveUser(response.data));
        // })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'));
            dispatch({
                type: REGISTER_FAIL
            });
        })
};

// Logout User
export const logout = () => {
    return {
        type: LOGOUT_SUCCESS
    }
}


// Setup config/headers and token
export const tokenConfig = getState => {
        // Get token from localstorage
        const token = getState().auth.token;

        // Set Headers
        const config = {
            headers: {
                "Content-type": "application/json"
            }
        }
    
        // If token, add to headers
        if (token) {
            config.headers['x-auth-token'] = token;
        }

        return config;
}
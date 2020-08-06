import axios from 'axios';
const DEV_URL = 'http://localhost:9000/email';
const API_BASE_URL = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ?  DEV_URL : '/email';

export const setEmailStatusFlag = status => {
    return {
        type: 'SET_EMAIL_SUCCESS_FLAG',
        status: status
    }
}

export const sendEmail = (content) => {
    return dispatch => {
        axios.post(API_BASE_URL, content)
            .then(response => {
                dispatch(setEmailStatusFlag('success'));
            })
            .catch(err => {
                dispatch(setEmailStatusFlag('failed'));
            });
    }
}
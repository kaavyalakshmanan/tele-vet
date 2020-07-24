import axios from 'axios';
import {useDispatch, useSelector} from "react-redux";
const API_BASE_URL = 'http://localhost:9000/';

// setup config headers and token
const tokenConfig = user => {
    // Get token from local storage
    const token = user.token;

    // Headers
    const config = {
        headers: {
           "Content-Type": "application/json",
        }
    }

    if (token) {
        config.headers['x-auth-token'] = token;
    }

    return config;
}

export const receiveUser = user => {
    return {
        type: 'RECEIVE_USER',
        user: user
    }
}

export const requestUser = () => {
    return {
        type: 'REQUEST_USER'
    }
}

export const invalidateUser = () => {
    return {
        type: 'INVALIDATE_USER'
    }
}

export const logoutUser = () => {
    return dispatch => {
        dispatch(invalidateUser());
        window.location.replace("/");
    }
}

export const loginUser = userAuthData => {
    return dispatch => {
        console.log(userAuthData);
        const configuredToken = tokenConfig(userAuthData);
        dispatch(requestUser());
        return axios.get(API_BASE_URL + "auth/user", configuredToken)
            .then(response => {
                console.log('recieved user');
                console.log(response.data);
                // Add token to user
                const user = Object.assign({}, response.data, {authData: userAuthData})
                dispatch(receiveUser(user));
            })
            .catch(err => {
                console.log('error');
                console.error(err);
                alert(err);
            });
    }
}

const updateUser = (user) => {
    // Only save the user without token to database
    const objectWithoutKey = (object, key) => {
        const {[key]: deletedKey, ...otherKeys} = object;
        return otherKeys;
    }
    const userToSave = objectWithoutKey(user, 'authData');
    console.log(userToSave);
    return dispatch => {
        dispatch(requestUser());
        dispatch(receiveUser(user));
        return axios.put(API_BASE_URL + "users/id", userToSave)
            .then((response) => {
                console.log("Data Saved")
            })
            .catch(err => {
                console.error(err);
                alert("Warning, data was not saved correctly. Please check your connection")
            });
    }
}

export const addData = (type, data, user) => {
    const newUser = Object.assign({}, user);
    console.log(user);
    newUser[type] = user[type].concat(data);
    return dispatch => dispatch(updateUser(newUser));
}

export const deleteAppointment = (appointment, user) => {
    const newUser = Object.assign({}, user, {
        appointments: user.appointments.filter(userAppointment => userAppointment.id !== appointment.id)
    });
    return dispatch => dispatch(updateUser(newUser));
}

export const editImage = (image, user) => {
    let newList = [];
    user.images.forEach((existingImage) => {
        const newImage = existingImage.src === image.src ? image : existingImage;
        newList.push(newImage);
    });
    const newUser = Object.assign({}, user, {
        images: newList
    });
    return dispatch => dispatch(updateUser(newUser));
}

export const deleteImage = (image, user) => {
    const newUser = Object.assign({}, user, {
        images: user.images.filter(img => img.src !== image.src)
    });
    return dispatch => dispatch(updateUser(newUser));
}

export const updateProfilePicture = (src, user) => {
    const newUser = Object.assign({}, user, {
        profilePicture: src
    });
    return dispatch => dispatch(updateUser(newUser));
}

export const deleteDocument = (document, user) => {
    const newUser = Object.assign({}, user, {
        documents: user.documents.list.filter(doc => doc.id !== document.id)
    });
    return dispatch => dispatch(updateUser(newUser));
}
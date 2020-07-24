
import axios from 'axios';
import {useDispatch} from "react-redux";
const API_BASE_URL = 'http://localhost:9000/';


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

export const loginUser = user => {
    return dispatch => {
        console.log(user);
        dispatch(requestUser());
        return axios.get(API_BASE_URL + "auth/user", tokenConfig(user))
            .then(response => {
                console.log('recieved user');
                const newUser = Object.assign({}, response.data, {authData: user});
                dispatch(receiveUser(newUser));
            })
            .catch(err => {
                console.log('error');
                console.error(err);
                alert(err);
            });
    }
}

// setup config headers and token
const tokenConfig = user => {
    // Get token from local storage
    const token = user.token;

    // Headers
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    if (token) {
        config.headers['x-auth-token'] = token;
    }

    return config;
}

// FIXME: Remove if not needed
//export const fetchUserById = id => {
//    return dispatch => {
//        dispatch(requestUser());
//        return axios.get(API_BASE_URL + "/id/" + id)
//            .then(response => {
//                dispatch(receiveUser(response.data));
//            })
//            .catch(err => {
//                console.error(err);
//                alert("Failed to load user data");
//            });
//    }
//}

export const updateUser = user => {
    return dispatch => {
        dispatch(requestUser());
        dispatch(receiveUser(user));
        return axios.put(API_BASE_URL + "auth/user", user, tokenConfig(user.authData))
            .then((response) => {
                console.log(response);
            })
            .catch(err => {
                console.error(err);
                alert("Your data did not save correctly. Please check your connection.")
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
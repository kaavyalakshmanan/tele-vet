
import axios from 'axios';
import {useDispatch} from "react-redux";
const DEV_URL = 'http://localhost:9000';
const API_BASE_URL = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ?  DEV_URL + '/users' : '/users'


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

export const loginUser = id => {
    return dispatch => {
        dispatch(requestUser());
        return axios.get(API_BASE_URL + "/id/" + id)
            .then(response => {
                dispatch(receiveUser(response.data));
            })
            .catch(err => {
                console.error(err);
                alert(err);
                window.location.replace("/");
            });
    }
}

// FIXME: Remove if not needed
export const fetchUserById = id => {
    return dispatch => {
        dispatch(requestUser());
        return axios.get(API_BASE_URL + "/id/" + id)
            .then(response => {
                dispatch(receiveUser(response.data));
            })
            .catch(err => {
                console.error(err);
                alert("Failed to load UserDashboard data");
            });
    }
}

export const updateUser = user => {
    return dispatch => {
        dispatch(requestUser());
        // FIXME: This is not well designed, could cause inconsistency between database and frontend
        dispatch(receiveUser(user));
        return axios.put(API_BASE_URL + "/id/" + user._id, user)
            .then((response) => {
                console.log(response);
                // dispatch(receiveUser(response.data));
            })
            .catch(err => {
                // FIXME: Notify the UserDashboard if data did not load correctly
                console.error(err);
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
        documents: user.documents.filter(doc => doc.id !== document.id)
    });
    return dispatch => dispatch(updateUser(newUser));
}
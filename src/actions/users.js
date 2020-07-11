import axios from 'axios';
const API_BASE_URL = 'http://localhost:9000/users';


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
    console.log(id);
    return dispatch => {
        dispatch(requestUser());
        return axios.get(API_BASE_URL + "/id/" + id)
            .then(response => {
                dispatch(receiveUser(response.data));
            })
            .catch(err => {
                console.error(err);
                alert("Failed to load user data");
                window.location.replace("/");
            });
    }
}

export const fetchUserById = id => {
    return dispatch => {
        dispatch(requestUser());
        return axios.get(API_BASE_URL + "/id/" + id)
            .then(response => {
                dispatch(receiveUser(response.data));
            })
            .catch(err => {
                console.error(err);
                alert("Failed to load user data");
            });
    }
}

export const updateUser = user => {
    console.log(user);
    return dispatch => {
        dispatch(requestUser());
        dispatch(receiveUser(user));
        return axios.put(API_BASE_URL + "/id/" + user._id, user)
            .then((response) => {
                console.log(response);
                dispatch(receiveUser(response.data));
            })
            .catch(err => {
                console.error(err);
            });
    }
}

export const addAppointment = (appointment, user) => {
    const newUser = Object.assign({}, user, {
        appointments: {
            list: user.appointments.list.concat(appointment)
        }
    });
    return dispatch => dispatch(updateUser(newUser));
}

export const deleteAppointment = (appointment, user) => {
    const newUser = Object.assign({}, user, {
        appointments: {
            list: user.appointments.list.filter(userAppointment => userAppointment.id !== appointment.id)
        }
    });
    return dispatch => dispatch(updateUser(newUser));
}

export const addImage = (image, user) => {
    const newUser = Object.assign({}, user, {
        images: {
            list: user.images.list.concat(image)
        }
    });
    return dispatch => dispatch(updateUser(newUser));
}

export const editImage = (image, user) => {
    let newList = [];
    user.images.list.forEach((existingImage) => {
        const newImage = existingImage.src === image.src ? image : existingImage;
        newList.push(newImage);
    });
    const newUser = Object.assign({}, user, {
        images: {
            list: newList
        }
    });
    return dispatch => dispatch(updateUser(newUser));
}

export const deleteImage = (image, user) => {
    const newUser = Object.assign({}, user, {
        images: {
            list: user.images.list.filter(img => img.src !== image.src)
        }
    });
    return dispatch => dispatch(updateUser(newUser));
}
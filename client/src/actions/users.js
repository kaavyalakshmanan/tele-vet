import axios from 'axios';
const DEV_URL = 'http://localhost:9000';
const API_BASE_URL = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ?  DEV_URL : '';

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

export const createNewUser = (email, username, password) => {
    const newUser = {
        isAuthenticated: true,
        isFetching: false,
        didInvalidate: false,
        email: email,
        username: username,
        password: password,
        profilePicture: "",
        lastUpdate: Date.now(),
        images: [],
        appointments: [],
        messages: [],
        documents: []
    };
    return dispatch => {
        axios.post(API_BASE_URL + "/users", JSON.stringify(newUser), {headers:{"Content-Type" : "application/json"}})
            .then(response => {
                // Redirect to login
                window.open(`/login?username=${newUser.username}&password=${newUser.password}`);
            })
            .catch(err => {
                console.error("User Already Exists")
                window.location.replace("/petsignup?registerFailed=true")
            })
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
        dispatch(requestUser());
        return axios.get(API_BASE_URL + "/auth/user", tokenConfig(user))
            .then(response => {
                const newUser = Object.assign({}, response.data, {authData: user});
                dispatch(receiveUser(newUser));
            })
            .catch(err => {
                console.error('error');
                window.location.replace('/');
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

export const updateUser = user => {
    return dispatch => {
        dispatch(requestUser());
        dispatch(receiveUser(user));
        return axios.put(API_BASE_URL + "/auth/user", JSON.stringify(user), tokenConfig(user.authData))
            .then((response) => {
                console.log(response);
            })
            .catch(err => {
                console.error(err);
            });
    }
}

// Updating user's images, appointments, or documents
export const addData = (type, data, user) => {
    const newUser = Object.assign({}, user);
    console.log(user);
    newUser[type] = user[type].concat(data);
    return dispatch => dispatch(updateUser(newUser));
}

// Updating user info
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
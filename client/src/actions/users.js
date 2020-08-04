import axios from 'axios';
// import {useDispatch} from "react-redux";
// const API_BASE_URL = '/users';

const DEV_URL = 'https://localhost:9000';
const API_BASE_URL = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ?  DEV_URL + '/users' : '/users'
const proxyURL = "https://cors-anywhere.herokuapp.com/";


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

// New types for registering user
export const registerUser = user => {
    return {
        type: 'REGISTER_SUCCESS',
        user: user
    }
}

export const registerFail = () => {
    return {
        type: 'REGISTER_FAIL'
    }
}

export const logoutUser = () => {
    return dispatch => {
        dispatch(invalidateUser());
        window.location.replace("/");
    }
}

// export const loginUser = id => {
//     return dispatch => {
//         dispatch(requestUser());
//         return axios.get(API_BASE_URL + "/auth")
//             .then(response => {
//                 dispatch(receiveUser(response.data));
//             })
//             .catch(err => {
//                 console.error(err);
//                 alert(err);
//                 window.location.replace("/");
//             });
//     }
// }

export const loginUser = user => {
    return dispatch => {
        console.log(user);
        dispatch(requestUser());
        return axios.get(API_BASE_URL + "auth/user", tokenConfig(user))
            .then(response => {
                console.log('recieved user');
                const newUser = Object.assign({}, response.data, {authData: user});
                // dispatch(receiveUser(newUser));

                // post request to register user?
                return axios.post(API_BASE_URL + "/auth", tokenConfig(user))
                    .then(response => {
                        console.log("user about to login");
                        dispatch(receiveUser(newUser));
                    })
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

const config1 = {
    "mongoURI": "mongodb+srv://televet:cpsc436i@televet-u0yv3.mongodb.net/televet?retryWrites=true&w=majority",
    "jwtSecret": "ws_myJwtSecret"
}

export const register = ({name, username, email, password}) => {
    // let headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    // headers.append('Accept', 'application/json');
    // // headers.append('Authorization', 'Basic ' + base64.encode(username + ":" +  password));
    // headers.append('Origin','http://localhost:3000');

    const newUser = {
        name: name,
        username: username,
        email: email,
        password: password
    }
    return dispatch => {
        // Headers
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin' : 'http://localhost:3000',
                'Access-Control-Allow-Methods': 'POST',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization'
            }
        }
        return axios.post(API_BASE_URL, config)
            .then(response => {
                dispatch(registerUser(response.data));
            })
            .catch(err => {
                dispatch(registerFail())
                console.log("error is " + err);
                alert("Failed to register user data");
            });
    }
}

// FIXME: Remove if not needed
// TODO: CHANGE ENDPOINT
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

// TODO: CHANGE ENDPOINT
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
                // FIXME: Notify the user if data did not load correctly
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

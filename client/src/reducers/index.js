import { combineReducers } from 'redux';

const initialVet = {
    coverPhoto: '',
    username: '',
    firstName: '',
    lastName: '',
    description: '',
    email: '',
    businessName: '',
    profilePicture: '',
    pictures: [],
    reviews: {},
    rating: 0,
    facebook: '',
    twitter: '',
    geometry: {},
    weeklyTimeBlocks: []
}

const userReducer = (user = {}, action) => {
    switch(action.type) {
        case 'RECEIVE_USER':
            return Object.assign({}, action.user, {
                isAuthenticated: true,
                lastUpdated: Date.now(),
                isFetching: false,
                didInvalidate: false
            });
        case 'REQUEST_USER':
            return Object.assign({}, user, {
                isAuthenticated: true,
                isFetching: true,
                didInvalidate: false
            });
        case 'INVALIDATE_USER':
            return {}
        default:
            return user
    }
}

const navBarReducer = (hidden = false, action) => {
    if (action.type === 'HIDE_NAVBAR') {
        return action.hidden;
    }
    return hidden;
}

const userDashboardViewReducer = (view = '', action) => {
    if (action.type === 'SET_USER_DASHBOARD_VIEW') {
        return action.view;
    }
    return view;
}

const currentVetReducer = (vet = null, action) => {
    if (action.type === 'UPDATE_VET_PROFILE_PICTURE') {
        return Object.assign({}, vet, {profilePicture: action.image});
    } else if (action.type === 'PICTURE') {
        return Object.assign({}, vet, {pictures: vet.pictures.concat(action.image)});
    } else if (action.type === 'RECEIVE_VET') {
        return action.vet;
    }
    return vet;
}

const vetProfileReducer = (vetProfiles = initialVet, action) => {
    if (action.type === "EDIT_VET_PROFILE") {
        return vetProfiles.push(action.payload)
    }
    return vetProfiles
}

const vetListReducer = (vetList = [], action) => {
    if (action.type === 'UPDATE_VET_LIST') {
        return action.vetList;
    }
    return vetList;
}

const imageReducer = (images = {}, action) => {
    if (action.type === 'ADD_IMAGE') {
        return {
            list: images.list.concat({
                file: {
                    src: action.image.file.src,
                },
                title: action.image.title,
                description: action.image.description
            })
        }
    }
    if (action.type === 'EDIT_IMAGE') {
        let newList = [];
        images.list.forEach((img) => {
            if (img.file.src === action.image.file.src) {
                newList.push(action.image);
            } else {
                newList.push(img);
            }
        });
        return {
            list: newList
        };
    }
    if (action.type === 'DELETE_IMAGE') {
        return {
            list: images.list.filter(img => img.file.src !== action.image.file.src)
        }
    }
    return images;
}

const emailReducer = (status = null, action) => {
    console.log(action);
    if (action.type === 'SET_EMAIL_SUCCESS_FLAG') {
        return action.status;
    }
    return status;
}


export default combineReducers({
    user: userReducer,
    navBarHidden: navBarReducer,
    userDashboardView: userDashboardViewReducer,
    userDashboardSidebarOpen: userDashboardViewReducer,
    vetProfiles: vetProfileReducer,
    images: imageReducer,
    vetList: vetListReducer,
    emailStatus: emailReducer,
    loggedInVet: currentVetReducer
});
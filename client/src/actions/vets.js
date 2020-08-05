import axios from 'axios';
import {receiveUser, requestUser} from "./users";
const DEV_URL = 'http://localhost:9000';
const API_BASE_URL = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ?  DEV_URL + '/vets' : '/vets'

export const receiveVet = vet => {
    return {
        type: 'RECEIVE_VET',
        vet: vet
    }
}

export const updateVetList = vetList => {
    return {
        type: 'UPDATE_VET_LIST',
        vetList: vetList
    }
}

export const addVetImageData = (type, image) => {
    if (type === 'PROFILE_PICTURE') {
        return {
            type: 'UPDATE_VET_PROFILE_PICTURE',
            image: image
        }
    } else if (type === 'PICTURE') {
        return {
            type: 'ADD_VET_PHOTO',
            image: image
        }
    }
}

export const fetchVets = () => {
    return dispatch => {
        return axios.get(API_BASE_URL + "/profiles/all")
            .then(response => {
                dispatch(updateVetList(response.data));
            })
            .catch(err => {
                console.error(err);
                alert(err);
            });
    }
}

export const getVetById = id => {
    return dispatch => {
        return axios.get(API_BASE_URL + '/id/' + id)
            .then(response => {
                dispatch(receiveVet(response.data));
            })
            .catch(err => {
                console.error(err);
                alert(err);
            });
    }
}

export const updateVet = (id, weeklyTimeBlocks)  => {
    return dispatch => {
        return axios.put(API_BASE_URL + "/id/" + id, {"weeklyTimeBlocks": weeklyTimeBlocks})
            .then((response) => {
                console.log(response);
                dispatch(receiveVet(response.data));
            })
            .catch(err => {
                console.error(err);
            });
    }
}
// Action for editing the appointment timeslots
////  dispatch(requestUser()); // Why this? Can we remove it?
//       // FIXME: This is not well designed, could cause inconsistency between database and frontend
//       //  dispatch(receiveVet(vet));
// FIXME: Notify the UserDashboard if data did not load correctly
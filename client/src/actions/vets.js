import axios from 'axios';
const DEV_URL = 'http://localhost:9000';
const API_BASE_URL = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ?  DEV_URL + '/vets' : '/vets'

export const updateVetList = vetList => {
    return {
        type: 'UPDATE_VET_LIST',
        vetList: vetList
    }
}

export const fetchVets = () => {
    return dispatch => {
        return axios.get(API_BASE_URL + "/profiles/all")
            .then(response => {
                dispatch(updateVetList(response.data));
            })
            .catch(err => {
                // TODO: Remove before presentation
                alert(err);
            });
    }
}
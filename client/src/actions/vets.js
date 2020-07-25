import axios from 'axios';
import {useDispatch} from "react-redux";
import {receiveUser, requestUser} from "./users";
const API_BASE_URL = '/vets';

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
                console.error(err);
                alert(err);
            });
    }
}
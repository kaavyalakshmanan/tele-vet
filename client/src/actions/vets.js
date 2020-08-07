import axios from 'axios';
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

export const addVetImageData = (type, image, vet) => {
    return dispatch => {
        if (type === 'PROFILE_PICTURE') {
            const newVet = Object.assign({}, vet, {profilePicture: image});
            dispatch(updateVet(newVet));
        } else if (type === 'PICTURE') {
            const newVet = Object.assign({}, vet, {pictures: vet.pictures.concat(image)});
            dispatch(updateVet(newVet));
        }
        // If a valid type is not given, do not update the vet.
        console.error('Invalid vet image data type');
    }
}

export const updateVetTimeBlocks = (weeklyTimeBlocks, vet) => {
    return dispatch => {
        const newVet = Object.assign({}, vet, {"weeklyTimeBlocks": weeklyTimeBlocks});
        dispatch(updateVet(newVet));
    }
}

const updateVet = vet => {
    return dispatch => {
        dispatch(receiveVet(vet));
        axios.put(API_BASE_URL + "/" + vet._id, vet)
            .then((response) => {
                console.log("Vet Profile Saved");
            })
            .catch(err => {
                console.error(err);
            });
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
import { combineReducers } from 'redux';

const initialAppointments = {
    apptList: [
        {
            vet: "Johnny Reptiles",
            calendarData:
            {
                startDate: '2020-06-15T09:45',
                endDate: '2020-06-15T11:00',
                title: 'Cat Check-Up'
            }
        },
        {
            vet: "Sandy Fish",
            calendarData:
            {
                startDate: '2020-06-16T12:00',
                endDate: '2020-06-16T13:30',
                title: 'Dog Vaccines'
            }
        }
    ]
}

const initialImages = {
    list: [
        {
            src: "https://images.pexels.com/photos/110820/pexels-photo-110820.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            width: 4,
            height: 3
        },
        {
            src: "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            width: 2,
            height: 2
        },
        {
            src: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            width: 2,
            height: 2
        },
        {
            src: "https://images.pexels.com/photos/326012/pexels-photo-326012.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            width: 2,
            height: 2
        },
        {
            src: "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            width: 2,
            height: 2
        }
    ]
}

const appointmentReducer = (appointments = initialAppointments, action) => {
    if (action.type === 'UPDATE_APPOINTMENTS') {
        return action.appointmentData;
    }
    return appointments;
}

const navBarReducer = (hidden = false, action) => {
    if (action.type === 'HIDE_NAVBAR') {
        return action.hidden;
    }
    return hidden;
}

const userDashboardViewReducer = (view = 'Inbox', action) => {
    if (action.type === 'SET_USER_DASHBOARD_VIEW') {
        return action.view;
    }
    return view;
}

const userPhotosReducer = (open = false, action) => {
    if (action.type === 'SET_DROPZONE_OPEN') {
        return action.open;
    }
    return open;
}

const imageReducer = (images = initialImages, action) => {
    console.log(images);
    if (action.type === 'ADD_IMAGE') {
        // TODO: Make an AJAX request to server, store image in database
        // TODO: Get path for Image
        return {
            list: images.list.concat({
                src: '/resources/' + action.image.path,
                height: 2,
                width: 2
            })
        }
    }
    return images;
}

export default combineReducers({
    appointmentData: appointmentReducer,
    navBarHidden: navBarReducer,
    userDashboardView: userDashboardViewReducer,
    userDashboardSidebarOpen: userDashboardViewReducer,
    images: imageReducer,
    photoDropzoneOpen: userPhotosReducer
});
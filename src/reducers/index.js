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

const userDashboardViewReducer = (view = 'profile', action) => {
    if (action.type === 'SET_USER_DASHBOARD_VIEW') {
        return action.view;
    }
    return view;
}

export default combineReducers({
    appointmentData: appointmentReducer,
    navBarHidden: navBarReducer,
    userDashboardView: userDashboardViewReducer
});
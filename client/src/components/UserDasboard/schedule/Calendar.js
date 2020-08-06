import React from 'react';

import Scheduler from 'devextreme-react/scheduler';

import {useDispatch, useSelector} from "react-redux";
import {addData, deleteAppointment} from "../../../actions";

const views = ['week', 'month'];

// EFFECTS: Render the calendar tab in the user dashboard
export default function Calendar() {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const DATA_TYPE_APPOINTMENTS = "appointments";

    const onAppointmentAdded = (event) => {
        event.appointmentData.id = Date.now();
        dispatch(addData(DATA_TYPE_APPOINTMENTS, event.appointmentData, user));
    }

    const onAppointmentDeleted = (event) => {
        dispatch(deleteAppointment(event.appointmentData, user));
    }

    return (
        <Scheduler
            dataSource={user.appointments}
            activeStateEnabled={false} // Disable internal state so we can use our own
            views={views}
            defaultCurrentView="month"
            defaultCurrentDate={Date.now()}
            height={600}
            startDayHour={9}
            onAppointmentAdding={onAppointmentAdded}
            onAppointmentDeleting={onAppointmentDeleted}
        />
    );
}
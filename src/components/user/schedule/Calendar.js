import React from 'react';

import Scheduler from 'devextreme-react/scheduler';

import {useDispatch, useSelector} from "react-redux";
import {addAppointment, deleteAppointment} from "../../../actions";

const views = ['week', 'month'];

export default function Calendar() {
    const user = useSelector(state => state.user);
    const [appointmentList, setAppointmentList] = React.useState(user.appointments.list)
    const dispatch = useDispatch();

    const onAppointmentAdded = (event) => {
        event.appointmentData.id = Date.now();
        dispatch(addAppointment(event.appointmentData, user));
    }

    const onAppointmentDeleted = (event) => {
        dispatch(deleteAppointment(event.appointmentData, user));
    }

    return (
        <Scheduler
            dataSource={appointmentList}
            views={views}
            defaultCurrentView="month"
            defaultCurrentDate={Date.now()}
            height={600}
            startDayHour={9}
            onAppointmentAdded={onAppointmentAdded}
            onAppointmentDeleted={onAppointmentDeleted}
        />
    );
}
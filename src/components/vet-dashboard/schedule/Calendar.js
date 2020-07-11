import React from 'react';

import Scheduler from 'devextreme-react/scheduler';

import {useDispatch, useSelector} from "react-redux";
import {addData, deleteAppointment, updateAppointments} from "../../../actions";

const views = ['week', 'month'];

export default function Calendar() {
    const dispatch = useDispatch();
    const appointments = useSelector(state => state.appointmentData);

    //const onAppointmentAdded = (event) => {
    //    console.log(event);
    //}

    //const onAppointmentDeleted = (event) => {
    //    console.log(event);
    //}

    return (
        <Scheduler
            dataSource={appointments}
            views={views}
            defaultCurrentView="month"
            defaultCurrentDate={Date.now()}
            height={600}
            startDayHour={9}
            // onAppointmentAdding={onAppointmentAdded}
            // onAppointmentDeleting={onAppointmentDeleted}
        />
    );
}
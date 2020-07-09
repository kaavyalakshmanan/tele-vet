import React from 'react';

import Scheduler from 'devextreme-react/scheduler';

import {useSelector} from "react-redux";

const views = ['week', 'month'];

export default function Calendar() {
    const appointments = useSelector(state => state.appointmentData);

    return (
        <Scheduler
            dataSource={appointments.apptList}
            views={views}
            defaultCurrentView="month"
            defaultCurrentDate={Date.now()}
            height={600}
            startDayHour={9}/>
    );
}
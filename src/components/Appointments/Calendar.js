import React from 'react';
import { connect } from "react-redux";
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    DayView,
    WeekView,
    MonthView,
    Appointments,
    Toolbar,
    ViewSwitcher,
} from '@devexpress/dx-react-scheduler-material-ui';

/*
This component is using the devExtreme react scheduler. We can sync with to external cals using AJAx requests
 */
class Calendar extends React.Component {


    getDataFromAppointments() {
        console.log(this.props.appointmentData.apptList);
        return this.props.appointmentData.apptList.map(appt => {
            return {
                startDate: appt.calendarData.startDate,
                endDate: appt.calendarData.endDate,
                title: appt.calendarData.title
            }
        });
    }

    getCurrentDate() {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0
        const yyyy = today.getFullYear();
        return `${yyyy}-${mm}-${dd}`;
    }

    render(){
        return (
            <Paper elevation={3}>
                <Scheduler
                    data={this.getDataFromAppointments()}
                    height='100%'
                >
                    <ViewState
                        currentDate={this.getCurrentDate()}
                        defaultCurrentViewName='Month'
                    />
                    <DayView
                        startDayHour={9}
                        endDayHour={14}
                    />
                    <WeekView
                        startDayHour={9}
                        endDayHour={14}
                    />
                    <MonthView/>
                    <Toolbar/>
                    <ViewSwitcher/>
                    <Appointments/>
                </Scheduler>
            </Paper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        appointmentData: state.appointmentData
    }
}

export default connect(mapStateToProps, null)(Calendar);
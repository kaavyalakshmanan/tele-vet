import React from 'react';
import { connect } from "react-redux";
import Calendar from "../UserDashboard/Schedule/Calendar";
import Appointment from "./Appointment";

class AppointmentsView extends React.Component {

    render(){
        return (
            <div className='appointments'>
                <div className='appointment-list-container'>
                    <ul className='appointment-list'>
                    {
                        this.props.appointmentData.apptList.map(appt => <Appointment appointment={appt}/>)
                    }
                    </ul>
                </div>
                <div className='appointment-calendar'>
                    <Calendar/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        appointmentData: state.appointmentData
    }
}

export default connect(mapStateToProps, null)(AppointmentsView);
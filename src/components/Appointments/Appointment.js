import React from 'react';

class Appointment extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <li className="appointment-container">
                <div className="appt-details-container">
                    <h3 className="appt-title">{ this.props.appointment.calendarData.title }</h3>
                    <p className="vet-name">{ this.props.appointment.vet }</p>
                    <p className="appt-start">{ this.props.appointment.calendarData.startDate }</p>
                    <p className="appt-end">{ this.props.appointment.calendarData.startDate }</p>
                </div>
            </li>
        )
    }
}

export default Appointment;
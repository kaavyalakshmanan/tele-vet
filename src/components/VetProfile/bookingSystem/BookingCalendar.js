import Calendar from 'react-calendar';
import React from "react";
import 'react-calendar/dist/Calendar.css';
// import { useState } from 'react'


 class BookingCalendar extends React.Component {
    constructor(props) {
        super(props);
        // let today = new Date();
        // let currentDay = today.getFullYear() + '-' + (today.getMonth()) + '-' + today.getDate()
        // this.state = {currentDay};
        // this.onDayPress = this.onDayPress.bind(this);
        // const [value, onChange] = useState(new Date());
    }

     processPick(day, event) {
        this.setState({
            date: day
        })
        console.log(day)
    }

    render() {
        return (
            // <div>
            <Calendar ClassName= "Calendar"
                // firstDay={1}
                // onPressArrowLeft={substractMonth => substractMonth()}
                // onPressArrowRight={addMonth => addMonth()}
                      size={12}
                      onClickDay={(day, event) =>  this.processPick(day, event)}
            />
            // </div>
        )
    }
}

export default BookingCalendar
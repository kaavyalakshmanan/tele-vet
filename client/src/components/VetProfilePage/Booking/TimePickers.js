import React from "react";
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
} from '@material-ui/pickers';
import ScheduleSelector from 'react-schedule-selector'
import {updateVet} from "../../../actions";

class TimePickers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            schedule: [],
            weeklyTimeBlocks: [["17:00", "18:00", "19:00"],
                ["17:00", "18:00", "19:00"],
                ["17:00", "18:00", "19:00"],
                ["17:00", "18:00", "19:00"],
                ["17:00", "18:00", "19:00"],
                ["17:00", "18:00", "19:00"],
                ["17:00", "18:00", "19:00"]],
        }
    }

    handleTimeslotsChange = newSchedule => {
        this.setState({schedule: newSchedule})
    }

    handleSubmission = (id) => {
        const monday = [];
        const tuesday = [];
        const wednesday = [];
        const thursday = [];
        const friday = [];
        const saturday = [];
        const sunday = [];
        let temp = [monday, tuesday, wednesday, thursday, friday, saturday, sunday]
        const helperSchedule = this.state.schedule.slice();
        helperSchedule.map((selected) => {
            if (String(selected).substring(0, 3) === "Mon") {
                monday.push(String(selected).substring(16, 21))

            } else if (String(selected).substring(0, 3) === "Tue") {
                tuesday.push(String(selected).substring(16, 21))
            } else if (String(selected).substring(0, 3) === "Wed") {
                wednesday.push(String(selected).substring(16, 21))
            } else if (String(selected).substring(0, 3) === "Thu") {
                thursday.push(String(selected).substring(16, 21))
            } else if (String(selected).substring(0, 3) === "Fri") {
                friday.push(String(selected).substring(16, 21))
            } else if (String(selected).substring(0, 3) === "Sat") {
                saturday.push(String(selected).substring(16, 21))
            } else if (String(selected).substring(0, 3) === "Sun") {
                sunday.push(String(selected).substring(16, 21))
            }
        })
        this.setState({weeklyTimeBlocks: temp}, () => {
                updateVet(id, temp)
        })
    }

    handleInfoChange = (field, event) => {
        this.setState({
            [field]: event
        });
    }

    render() {
        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <div>
                    <h3>Virtual Appointments timeslot availabilities</h3>
                    <ScheduleSelector
                        selection={this.state.schedule}
                        numDays={7}
                        startDate={new Date("2020-07-07")}
                        minTime={6}
                        maxTime={23}
                        dateFormat={"dddd"}
                        margin={2}
                        selectedColor={'rgba(162, 198, 248, 1)'}
                        onChange={this.handleTimeslotsChange}
                    />
                </div>
            </MuiPickersUtilsProvider>
        )
    }
}

export default TimePickers
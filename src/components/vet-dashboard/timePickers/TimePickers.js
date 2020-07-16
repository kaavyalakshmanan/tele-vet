import React from "react";
import {connect} from "react-redux";
import {editVetProfile} from '../../../actions/index';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    // KeyboardDatePicker,
} from '@material-ui/pickers';
import {Grid} from "@material-ui/core";
import ScheduleSelector from 'react-schedule-selector'
import axios from "axios"
import {Button} from "reactstrap";

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
            sundayOpen: "2014-08-18T08:00:00",
            sundayClose: "2014-08-18T18:00:00",
            mondayOpen: "2014-08-18T08:00:00",
            mondayClose: "2014-08-18T18:00:00",
            tuesdayOpen: "2014-08-18T08:00:00",
            tuesdayClose: "2014-08-18T18:00:00",
            wednesdayOpen: "2014-08-18T08:00:00",
            wednesdayClose: "2014-08-18T18:00:00",
            thursdayOpen: "2014-08-18T08:00:00",
            thursdayClose: "2014-08-18T18:00:00",
            fridayOpen: "2014-08-18T08:00:00",
            fridayClose: "2014-08-18T18:00:00",
            saturdayOpen: "2014-08-18T08:00:00",
            saturdayClose: "2014-08-18T18:00:00",
        }
    }

    componentDidMount() {
        const id = "5f109bf455e8e827aa4ec530"
        axios.get("http://localhost:9000/vet/id/" + this.id)
            .then(response => {
                this.setState(
                    {
                        schedule: response.data.spareField1
                        // weeklyTimeBlocks: response.data.weeklyTimeBlocks
                    })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    handleTimeslotsChange = newSchedule => {
        this.setState({schedule: newSchedule})
    }

    handleSubmission = (e) => {
        e.preventDefault();
        const monday = [];
        const tuesday = [];
        const wednesday = [];
        const thursday = [];
        const friday = [];
        const saturday = [];
        const sunday = [];
        let temp = [monday, tuesday, wednesday, thursday, friday, saturday, sunday]
        // console.log(this.state.schedule)
        const helperSchedule = this.state.schedule.slice();
        // console.log(helperSchedule)
        console.log(temp)
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
        console.log(temp)
        this.setState({weeklyTimeBlocks: temp}, () => {
            const id = "5f07b082acd85550aa1b19a9"
            console.log(this.state.weeklyTimeBlocks)
            axios.put("http://localhost:9000/vets/" + id, {"weeklyTimeBlocks": this.state.weeklyTimeBlocks})
                .then(res => console.log(res.data))
                .catch(() => console.log("The axios.post call in itemBlock failed"))
        })
    }

    //     this.setState({weeklyTimeBlocks: temp})
    //         .then(() => {
    //             const update = this.state.weeklyTimeBlocks //Not sure this is how update works
    //             const id = "5f07b082acd85550aa1b19a9"
    //             axios.put("http://localhost:9000/vet/id" + id, update)
    //                 .then(res => console.log(res.data))
    //                 .catch(() => console.log("The axios.post call in itemBlock failed"))
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })


    //     // this.state.editVetProfile(this.state.weeklyTimeBlocks); // not sure the this.props is the way to go here!! CAUTIOIN!!!
    //     console.log(this.state.weeklyTimeBlocks)
    // }

    handleInfoChange = (field, event) => {
        this.setState({
            [field]: event //square bracket means get value, not array here.
        });
    }

    render() {
        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <h3>Physical Clinic Hours of Operation</h3>
                <div className="formGroup">
                    <Grid container
                          spacing={3}
                          direction="row"
                          justify="left"
                          alignItems="flex-end">
                        <title>Hours of Operation</title>
                        <Grid container
                              spacing={3}
                              xs={12}
                              direction="row"
                              justify="left"
                              alignItems="flex-end">
                            <Grid item>
                                <label>Tuesday:</label>
                            </Grid>
                            <Grid item={6}>
                                <KeyboardTimePicker
                                    margin="normal"
                                    className="time-picker"
                                    label="Start Time"
                                    value={this.state.tuesdayOpen}
                                    onChange={(e) => this.handleInfoChange("tuesdayOpen", e)}
                                />
                            </Grid>
                            <Grid item={6}>
                                <KeyboardTimePicker
                                    margin="normal"
                                    className="time-picker"
                                    label="Close Time"
                                    value={this.state.tuesdayClose}
                                    onChange={(e) => this.handleInfoChange("tuesdayClose", e)}
                                />
                            </Grid>
                        </Grid>
                        <Grid container
                              spacing={3}
                              xs={12}
                              direction="row"
                              justify="left"
                              alignItems="flex-end">
                            <Grid item>
                                <label>Tuesday:</label>
                            </Grid>
                            <Grid item={6}>
                                <KeyboardTimePicker
                                    margin="normal"
                                    className="time-picker"
                                    label="Start Time"
                                    value={this.state.tuesdayOpen}
                                    onChange={(e) => this.handleInfoChange("tuesdayOpen", e)}
                                />
                            </Grid>
                            <Grid item={6}>
                                <KeyboardTimePicker
                                    margin="normal"
                                    className="time-picker"
                                    label="Close Time"
                                    value={this.state.tuesdayClose}
                                    onChange={(e) => this.handleInfoChange("tuesdayClose", e)}
                                />
                            </Grid>
                        </Grid>
                        <Grid container
                              spacing={3}
                              xs={12}
                              direction="row"
                              justify="left"
                              alignItems="flex-end">
                            <Grid item>
                                <label>Wednesday:</label>
                            </Grid>
                            <Grid item={6}>
                                <KeyboardTimePicker
                                    margin="normal"
                                    className="time-picker"
                                    label="Start Time"
                                    value={this.state.wednesdayOpen}
                                    onChange={(e) => this.handleInfoChange("wednesdayOpen", e)}
                                />
                            </Grid>
                            <Grid item={6}>
                                <KeyboardTimePicker
                                    margin="normal"
                                    className="time-picker"
                                    label="Close Time"
                                    value={this.state.wednesdayClose}
                                    onChange={(e) => this.handleInfoChange("wednesdayClose", e)}
                                />
                            </Grid>
                        </Grid>
                        <Grid container
                              spacing={3}
                              xs={12}
                              direction="row"
                              justify="left"
                              alignItems="flex-end">
                            <Grid item>
                                <label>Thursday:</label>
                            </Grid>
                            <Grid item={6}>
                                <KeyboardTimePicker
                                    margin="normal"
                                    className="time-picker"
                                    label="Start Time"
                                    value={this.state.thursdayOpen}
                                    onChange={(e) => this.handleInfoChange("thursdayOpen", e)}
                                />
                            </Grid>
                            <Grid item={6}>
                                <KeyboardTimePicker
                                    margin="normal"
                                    className="time-picker"
                                    label="Close Time"
                                    value={this.state.thursdayClose}
                                    onChange={(e) => this.handleInfoChange("thursdayClose", e)}
                                />
                            </Grid>
                        </Grid>
                        <Grid container
                              spacing={3}
                              xs={12}
                              direction="row"
                              justify="left"
                              alignItems="flex-end">
                            <Grid item>
                                <label>Friday:</label>
                            </Grid>
                            <Grid item={6}>
                                <KeyboardTimePicker
                                    margin="normal"
                                    className="time-picker"
                                    label="Start Time"
                                    value={this.state.fridayOpen}
                                    onChange={(e) => this.handleInfoChange("fridayOpen", e)}
                                />
                            </Grid>
                            <Grid item={6}>
                                <KeyboardTimePicker
                                    margin="normal"
                                    className="time-picker"
                                    label="Close Time"
                                    value={this.state.fridayClose}
                                    onChange={(e) => this.handleInfoChange("fridayClose", e)}
                                />
                            </Grid>
                        </Grid>
                        <Grid container
                              spacing={3}
                              xs={12}
                              direction="row"
                              justify="left"
                              alignItems="flex-end">
                            <Grid item>
                                <label>Saturday:</label>
                            </Grid>
                            <Grid item={6}>
                                <KeyboardTimePicker
                                    margin="normal"
                                    className="time-picker"
                                    label="Start Time"
                                    value={this.state.saturdayOpen}
                                    onChange={(e) => this.handleInfoChange("saturdayOpen", e)}
                                />
                            </Grid>
                            <Grid item={6}>
                                <KeyboardTimePicker
                                    margin="normal"
                                    className="time-picker"
                                    label="Close Time"
                                    value={this.state.saturdayClose}
                                    onChange={(e) => this.handleInfoChange("saturdayClose", e)}
                                />
                            </Grid>
                        </Grid>
                        <Grid container
                              spacing={3}
                              xs={12}
                              direction="row"
                              justify="left"
                              alignItems="flex-end">
                            <Grid item>
                                <label>Sunday:</label>
                            </Grid>
                            <Grid item={6}>
                                <KeyboardTimePicker
                                    margin="normal"
                                    className="time-picker"
                                    label="Start Time"
                                    value={this.state.sundayOpen}
                                    onChange={(e) => this.handleInfoChange("sundayOpen", e)}
                                />
                            </Grid>
                            <Grid item={6}>
                                <KeyboardTimePicker
                                    margin="normal"
                                    className="time-picker"
                                    label="Close Time"
                                    value={this.state.sundayClose}
                                    onChange={(e) => this.handleInfoChange("sundayClose", e)}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
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
                        // selectionScheme={"linear"}
                        // hourlyChunks={2}
                        onChange={this.handleTimeslotsChange}
                    />
                </div>
                <button className="mr-4"
                        color="purple"
                        onClick={e => this.handleSubmission(e)}>Save
                </button>
            </MuiPickersUtilsProvider>
        )
    }
}

export default TimePickers
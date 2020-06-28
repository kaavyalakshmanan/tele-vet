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

class EditForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            username: "",
            businessAddress: "",
            website: "",
            acceptEmergency: false,
            sundayOpen: "",
            sundayClose: "",
            mondayOpen: "",
            mondayClose: "",
            tuesdayOpen: "",
            tuesdayClose: "",
            wednesdayOpen: "",
            wednesdayClose: "",
            thursdayOpen: "",
            thursdayClose: "",
            fridayOpen: "",
            fridayClose: "",
            saturdayOpen: "",
            saturdayClose: "",
        }
    }

    handleSubmission = (e) => {
        e.preventDefault();
        this.props.editVetProfile(this.state);
    }

    handleTimeChange = (day, e) => {
        const {target: value} = e;
        this.setState({
            [day]: value
        });
    }

    render() {
        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <div>
                    <form id="editProfileForm">
                        <div>
                            <p>
                                <h2>Update your profile!</h2>
                            </p>
                        </div>
                        <div className="formGroup">
                            <label>First Name:</label>
                            <input
                                onChange={e => this.state.profile.firstName.setState(e.target.value)}
                            />
                        </div>
                        <div className="formGroup">
                            <label>Last Name:</label>
                            <input
                                onChange={e => this.state.lastName.setState(e.target.value)}
                            />
                        </div>
                        <div className="formGroup">
                            <label>User Name:</label>
                            <input
                                onChange={e => this.state.username.setState(e.target.value)}
                            />
                        </div>
                        <div className="formGroup">
                            <label>Business Address:</label>
                            <input
                                onChange={e => this.state.businessAddress.setState(e.target.value)}
                            />
                        </div>
                        <div className="formGroup">
                            <label>Website:</label>
                            <input
                                onChange={e => this.state.website.setState(e.target.value)}
                            />
                        </div>
                        <div className="formGroup">
                            <label>Emergency call accepted?</label>
                            <input
                                onChange={e => this.state.acceptEmergency.setState(e.target.value)}
                            />
                        </div>
                        <div className="formGroup">
                            <label>Profile Write-up:</label>
                            <textarea
                                onChange={e => this.state.profile.setState(e.target.value)}
                                cols={10}
                                rows={10}
                            />
                        </div>
                        <div className="formGroup">
                            <Grid container
                                  spacing={3}
                                  xs={12}
                                  direction="row"
                                  justify="left"
                                  alignItems="flex-end">
                                <h6>Hours of Operation</h6>
                                <Grid container
                                      spacing={3}
                                      xs={12}
                                      direction="row"
                                      justify="left"
                                      alignItems="flex-end">
                                    <Grid item>
                                        <label>Monday:</label>
                                    </Grid>
                                    <Grid item={6}>
                                        <KeyboardTimePicker
                                            margin="normal"
                                            className="time-picker"
                                            label="Start Time"
                                            value={this.selectedDate}
                                            onChange={(e) => this.handleTimeChange("mondayOpen", e)}
                                        />
                                    </Grid>
                                    <Grid item={6}>
                                        <KeyboardTimePicker
                                            margin="normal"
                                            className="time-picker"
                                            label="Close Time"
                                            value={this.selectedDate}
                                            onChange={(e) => this.handleTimeChange("mondayClose", e)}
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
                                            value={this.selectedDate}
                                            onChange={(e) => this.handleTimeChange("tuesdayOpen", e)}
                                        />
                                    </Grid>
                                    <Grid item={6}>
                                        <KeyboardTimePicker
                                            margin="normal"
                                            className="time-picker"
                                            label="Close Time"
                                            value={this.selectedDate}
                                            onChange={(e) => this.handleTimeChange("tuesdayClose", e)}
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
                                            value={this.selectedDate}
                                            onChange={(e) => this.handleTimeChange("wednesdayOpen", e)}
                                        />
                                    </Grid>
                                    <Grid item={6}>
                                        <KeyboardTimePicker
                                            margin="normal"
                                            className="time-picker"
                                            label="Close Time"
                                            value={this.selectedDate}
                                            onChange={(e) => this.handleTimeChange("wednesdayClose", e)}
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
                                            value={this.selectedDate}
                                            onChange={(e) => this.handleTimeChange("thursdayOpen", e)}
                                        />
                                    </Grid>
                                    <Grid item={6}>
                                        <KeyboardTimePicker
                                            margin="normal"
                                            className="time-picker"
                                            label="Close Time"
                                            value={this.selectedDate}
                                            onChange={(e) => this.handleTimeChange("thursdayClose", e)}
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
                                            value={this.selectedDate}
                                            onChange={(e) => this.handleTimeChange("fridayOpen", e)}
                                        />
                                    </Grid>
                                    <Grid item={6}>
                                        <KeyboardTimePicker
                                            margin="normal"
                                            className="time-picker"
                                            label="Close Time"
                                            value={this.selectedDate}
                                            onChange={(e) => this.handleTimeChange("fridayClose", e)}
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
                                            value={this.selectedDate}
                                            onChange={(e) => this.handleTimeChange("saturdayOpen", e)}
                                        />
                                    </Grid>
                                    <Grid item={6}>
                                        <KeyboardTimePicker
                                            margin="normal"
                                            className="time-picker"
                                            label="Close Time"
                                            value={this.selectedDate}
                                            onChange={(e) => this.handleTimeChange("saturdayClose", e)}
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
                                            value={this.selectedDate}
                                            onChange={(e) => this.handleTimeChange("sundayOpen", e)}
                                        />
                                    </Grid>
                                    <Grid item={6}>
                                        <KeyboardTimePicker
                                            margin="normal"
                                            className="time-picker"
                                            label="Close Time"
                                            value={this.selectedDate}
                                            onChange={(e) => this.handleTimeChange("sundayClose", e)}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </div>
                        <button id="submitButton" onClick={e => this.handleSubmission(e)}>Save</button>
                    </form>
                </div>
            </MuiPickersUtilsProvider>
        )
    }
}

export default connect(null, {editVetProfile})(EditForm);

{/*//===========================================================*/
}
{/*///!*    add https://www.npmjs.com/package/react-geosuggest*!/*/
}
{/*//=============================================================*/
}

// const handleDateChange = (date) => {
//     setSelectedDate(date);
// };
//
// export default function MaterialUIPickers() {
//     // The first commit of Material-UI
//     const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

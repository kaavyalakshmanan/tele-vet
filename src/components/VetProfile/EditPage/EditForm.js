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
            description: "",
            businessAddress: "",
            neighbourhood: "",
            postalCode: "",
            website: "",
            email: "",
            certification: "",
            specialization: "",
            acceptEmergency: false,
            sundayOpen: '2014-08-18T08:00:00',
            sundayClose: '2014-08-18T18:00:00',
            mondayOpen: '2014-08-18T08:00:00',
            mondayClose: '2014-08-18T18:00:00',
            tuesdayOpen: '2014-08-18T08:00:00',
            tuesdayClose: '2014-08-18T18:00:00',
            wednesdayOpen: '2014-08-18T08:00:00',
            wednesdayClose: '2014-08-18T18:00:00',
            thursdayOpen: '2014-08-18T08:00:00',
            thursdayClose: '2014-08-18T18:00:00',
            fridayOpen: '2014-08-18T08:00:00',
            fridayClose: '2014-08-18T18:00:00',
            saturdayOpen: '2014-08-18T08:00:00',
            saturdayClose: '2014-08-18T18:00:00',
            profilePicture: "",
            carouselPictures: [],
            reviewMessages: [],
            rating: ""
        }
        console.log("hello" + this.state.mondayOpen);
    }

    handleSubmission = (e) => {
        e.preventDefault();
        this.props.editVetProfile(this.state);
    }

    handleInfoChange = (field, event) => {
        // const {target: value} = event
        this.setState({
            [field]: event //square bracket means get value, not array here.
        });
        console.log(this.state.mondayOpen)
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
                                value={this.state.firstName}
                                onChange={e => this.handleInfoChange("firstName", e)}
                            />
                        </div>
                        <div className="formGroup">
                            <label>Last Name:</label>
                            <input
                                value={this.state.lastName}
                                onChange={e => this.handleInfoChange("lastName", e)}
                            />
                        </div>
                        <div className="formGroup">
                            <label>User Name:</label>
                            <input
                                value={this.state.username}
                                onChange={e => this.handleInfoChange("username", e)}
                            />
                        </div>
                        <div className="formGroup">
                            <label>Business Address:</label>
                            <input
                                value={this.state.businessAddress}
                                onChange={e => this.handleInfoChange("businessAddress", e)}
                            />
                        </div>
                        <div className="formGroup">
                            <label>Website:</label>
                            <input
                                value={this.state.website}
                                onChange={e => this.handleInfoChange("website", e)}
                            />
                        </div>
                        <div className="formGroup">
                            <label>Emergency call accepted?</label>
                            <input
                                value={this.state.acceptEmergency} //careful with boolean bullet implementation
                                onChange={e => this.handleInfoChange("acceptEmergency", e)}
                            />
                        </div>
                        <div className="formGroup">
                            <label>Profile Write-up:</label>
                            <textarea
                                value={this.state.description}
                                onChange={e => this.handleInfoChange("description", e)}
                                cols={10}
                                rows={10}
                            />
                        </div>
                        <div className="formGroup">
                            <Grid container
                                  spacing={3}
                                  direction="row"
                                  justify="left"
                                  alignItems="flex-end">
                                <title>Hours of Operation</title>
                                <Grid container
                                      xs={12}
                                      spacing={0}
                                      direction="row"
                                      justify="left"
                                      alignItems="flex-end">

                                    <Grid item xs={12}>
                                        <Grid item spacing={0} xs={12}>
                                            <paper>Monday:</paper>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <KeyboardTimePicker
                                                // margin="normal"
                                                className="time-picker"
                                                label="Start Time"
                                                // helperText={''}
                                                // type="time"
                                                // defaultValue="07:30 AM"
                                                value={this.state.mondayOpen}
                                                onChange={(e) => this.handleInfoChange("mondayOpen", e)}
                                            />
                                        </Grid>
                                        <Grid item={12}>
                                            <KeyboardTimePicker
                                                margin="normal"
                                                className="time-picker"
                                                label="Close Time"
                                                value={this.state.mondayClose}
                                                onChange={(e) => this.handleInfoChange("mondayClose", e)}
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

import React from "react";
import {connect} from "react-redux";
import Timekeeper from 'react-timekeeper';
import {editVetProfile} from '../../../actions/index';

class EditForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            username: "",
            businessAddress: "",
            website: "",
            openTimes: {
                sunday: "",
                monday: "",
                tuesday: "",
                wednesday: "",
                thursday: "",
                friday: "",
                saturday: "",
            },
            acceptEmergency: false
        }
    }

    handleSubmission = (e) => {
        e.preventDefault();
        this.props.editVetProfile(this.state.profile);
    }

    render() {
        return (
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
                    <h6>Hours of Operation</h6>
                    <div className="formGroup">
                        <label>Sunday</label>
                        <Timekeeper
                            time={e => this.state.openTimes.sunday.setState(e.target.value)}
                        />
                        <label>Monday</label>
                        <Timekeeper
                            time={e => this.state.openTimes.monday.setState(e.target.value)}
                        />
                        <label>Tuesday</label>
                        <Timekeeper
                            time={e => this.state.openTimes.tuesday.setState(e.target.value)}
                        />
                        <label>Wednesday</label>
                        <Timekeeper
                            time={e => this.state.openTimes.wednesday.setState(e.target.value)}
                        />
                        <label>Thursday</label>
                        <Timekeeper
                            time={e => this.state.openTimes.thursday.setState(e.target.value)}
                        />
                        <label>Friday</label>
                        <Timekeeper
                            time={e => this.state.openTimes.friday.setState(e.target.value)}
                        />
                        <label>Saturday</label>
                        <Timekeeper
                            time={e => this.state.openTimes.saturday.setState(e.target.value)}
                        />
                    </div>
                    <button id="submitButton" onClick={e => this.handleSubmission(e)}>Save</button>
                </form>
            </div>
        )
    }
}

export default connect(null, {editVetProfile})(EditForm);

//===========================================================
//{/*    add https://www.npmjs.com/package/react-geosuggest*/}
//=============================================================
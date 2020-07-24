import React, { Component } from "react";
import { connect } from "react-redux";
import {hideNavigation, selectInbox, setUserDashboardView, setPhotoDropzoneOpen} from "../../actions";
import Calendar from "./schedule/Calendar";
import MailIcon from "@material-ui/icons/Mail";
import VideocamIcon from "@material-ui/icons/Videocam";
import EventIcon from "@material-ui/icons/Event";
import MapIcon from "@material-ui/icons/Map";
import PersonIcon from '@material-ui/icons/Person';
import ScheduleIcon from '@material-ui/icons/Schedule';
import DescriptionIcon from "@material-ui/icons/Description";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import {NavBar} from "./sidebar/NavBar";
import Gallery from "./photos/PhotoGallery";
import Messages from "./messages/Messages";
import FindVet from "../maps/FindVet";
import VetProfile from "./profile/VetProfile"
import VetVideoConference from "./VetVideoConference/VetVideoConference";
import TimePickers from "./timePickers/TimePickers";

const viewMap = {
    'Profile': <VetProfile/>,
    'Schedule': <TimePickers/>,
    'Messages': <Messages/>,
    'Calendar': <Calendar style={ { padding: '50px'} }/>,
    'Visit-Summary': 'Visit-Summary',
    'E-Visit': <VetVideoConference/>
}

const iconMap = {
    'Profile':  <PersonIcon color={ 'inherit' }/>,
    'Schedule': <ScheduleIcon color={ 'inherit' }/>,
    // 'Messages':  <MailIcon color={ 'inherit' }/>,
    'Calendar': <EventIcon color={ 'inherit' }/>,
    // 'Find a Vet': <MapIcon color={ 'inherit' }/>,
    'E-Visit': <VideocamIcon color={ 'inherit' } />,
    // 'Visit-Summary': <DescriptionIcon color={ 'inherit' }/>,
    // 'Photo Gallery': <PhotoCameraIcon color={ 'inherit' }/>,

}

class UserDashboard extends Component {




    render() {
        this.props.hideNavigation(true);
        // FIXME: Change colors to match home screen
        return (
            <div>
                <NavBar
                    handleViewChange={ view => {
                        if (view === 'Messages') {
                            this.props.selectInbox(null);
                        }
                        this.props.setUserDashboardView(view);
                    } }
                    renderView = { () => viewMap[this.props.view] }
                    iconMap = { iconMap }
                    userName={ "Arnob Mukherjee" }
                    email={ "arnob@MockUser.com" }
                    currentView={this.props.view}
                    uploadPhoto={() => this.props.setPhotoDropzoneOpen(true)}
                />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    selectInbox: inbox => {
        dispatch(selectInbox(inbox));
    },
    setUserDashboardView: view => {
        dispatch(setUserDashboardView(view));
    },
    hideNavigation: hidden => {
        dispatch(hideNavigation(hidden));
    },
    setPhotoDropzoneOpen: open => {
        dispatch(setPhotoDropzoneOpen(open))
    }
});

const mapStateToProps = state => {
    return {
        view: state.userDashboardView,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard);
import React, { Component } from "react";
import { connect } from "react-redux";
import {hideNavigation, setUserDashboardView} from "../../actions";
import Calendar from "./schedule/Calendar";
import Maps from "../Maps";
import MailIcon from "@material-ui/icons/Mail";
import VideocamIcon from "@material-ui/icons/Videocam";
import EventIcon from "@material-ui/icons/Event";
import MapIcon from "@material-ui/icons/Map";
import DescriptionIcon from "@material-ui/icons/Description";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import PublishIcon from '@material-ui/icons/Publish';
import {NavBar} from "./sidebar/NavBar";
import Gallery from "./photos/PhotoGallery";
import PhotoLoader from "./photos/PhotoLoader";

const viewMap = {
    'Messages': 'Messages',
    'Calendar': <Calendar style={ { padding: '50px'} }/>,
    'Maps': <Maps/>,
    'Visit-Summary': 'Visit-Summary',
    'E-Visit': 'E-Visit',
    'Photo Gallery': <Gallery/>,
}

const iconMap = {
    'Messages':  <MailIcon color={ 'inherit' }/>,
    'Calendar': <EventIcon color={ 'inherit' }/>,
    'Maps': <MapIcon color={ 'inherit' }/>,
    'E-Visit': <VideocamIcon color={ 'inherit' } />,
    'Visit-Summary': <DescriptionIcon color={ 'inherit' }/>,
    'Photo Gallery': <PhotoCameraIcon color={ 'inherit' }/>,
}

class UserDashboard extends Component {

    render() {
        this.props.hideNavigation(true);
        // FIXME: Change colors to match home screen
        return (
            <div>
                <NavBar
                    handleViewChange={ this.props.setUserDashboardView }
                    renderView = { () => viewMap[this.props.view] }
                    iconMap = { iconMap }
                    userName={ "Arnob Mukherjee" }
                    email={ "arnob@MockUser.com" }
                />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    setUserDashboardView: view => {
        dispatch(setUserDashboardView(view));
    },
    hideNavigation: hidden => {
        dispatch(hideNavigation(hidden));
    }
});

const mapStateToProps = state => {
    return {
        view: state.userDashboardView,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard);
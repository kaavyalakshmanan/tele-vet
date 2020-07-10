import React, { Component } from "react";
import { connect } from "react-redux";
import { hideNavigation, selectInbox, setUserDashboardView } from "../../actions";
import Calendar from "./schedule/Calendar";
import MailIcon from "@material-ui/icons/Mail";
import VideocamIcon from "@material-ui/icons/Videocam";
import EventIcon from "@material-ui/icons/Event";
import MapIcon from "@material-ui/icons/Map";
import DescriptionIcon from "@material-ui/icons/Description";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import {NavBar} from "./sidebar/NavBar";
import Messages from "./messages/Messages";
import FindVet from "../maps/FindVet";
import Album from "./photos/Album";
import {Footer} from "../Footer";
import VideoConference from "../videoConference/VideoConference"

const viewMap = {
    'Messages': <Messages/>,
    'Calendar': <Calendar style={ { padding: '50px'} }/>,
    'Find a Vet': <FindVet/>,
    'Visit-Summary': 'Visit-Summary',
    'E-Visit': <VideoConference/>,
    'Photo Gallery': <Album/>,
}

const iconMap = {
    'Messages':  <MailIcon color={ 'inherit' }/>,
    'Calendar': <EventIcon color={ 'inherit' }/>,
    'Find a Vet': <MapIcon color={ 'inherit' }/>,
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
                />
                <Footer/>
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
    }
});

const mapStateToProps = state => {
    return {
        view: state.userDashboardView,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard);
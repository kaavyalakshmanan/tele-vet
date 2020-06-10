import React, { Component } from "react";
import { connect } from "react-redux";
import {hideNavigation, setUserDashboardView} from "../../actions";
import Calendar from "./schedule/Calendar";
import Maps from "../Maps";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import DraftsIcon from "@material-ui/icons/Drafts";
import VideocamIcon from "@material-ui/icons/Videocam";
import EventIcon from "@material-ui/icons/Event";
import MapIcon from "@material-ui/icons/Map";
import DescriptionIcon from "@material-ui/icons/Description";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import {MiniDrawer} from "./sidebar/MiniDrawer";

const viewMap = {
    'Inbox': 'Inbox',
    'Send Message': 'Send Message',
    'Drafts': 'Drafts',
    'Calendar': (<Calendar style={ { padding: '50px'} }/>),
    'Maps': (<Maps/>),
    'Documents': 'Documents',
    'E-Visit': 'E-Visit',
    'Photos': 'Photos'
}

const iconMap = {
    'Inbox': <InboxIcon />,
    'Send Message':  <MailIcon />,
    'Drafts': <DraftsIcon/>,
    'E-Visit': <VideocamIcon/>,
    'Calendar': <EventIcon/>,
    'Maps': <MapIcon/>,
    'Visit-Summary': <DescriptionIcon/>,
    'Photos': <PhotoCameraIcon/>
}

class UserDashboard extends Component {
    render() {
        this.props.hideNavigation(true);
        // FIXME: Change colors to match home screen
        return (
            <div>
                <MiniDrawer
                    handleViewChange={ this.props.setUserDashboardView }
                    renderView = { () => viewMap[this.props.view] }
                    iconMap = { iconMap }
                    upperItems = { ['Inbox', 'Send Message', 'Drafts'] }
                    lowerItems = { ['Calendar', 'Maps', 'Photos', 'E-Visit'] }
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
        view: state.userDashboardView
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard);
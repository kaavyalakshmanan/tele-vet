import React, { Component } from "react";
import { connect } from "react-redux";
import {hideNavigation, setUserDashboardView} from "../../actions";
import Calendar from "./schedule/Calendar";
import Maps from "../Maps";
import MiniDrawer from "./sidebar/MiniDrawer";

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

class UserDashboard extends Component {
    render() {
        this.props.hideNavigation(true);
        // FIXME: Find a way to make this more responsive, looks bad on small screens
        return (
            <div>
                <MiniDrawer
                    handleViewChange={ this.props.setUserDashboardView }
                    renderView = { () => viewMap[this.props.view] }
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
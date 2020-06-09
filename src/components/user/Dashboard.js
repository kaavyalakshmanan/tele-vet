import React, { Component } from "react";
import { connect } from "react-redux";
import { hideNavigation } from "../../actions";
import Sidebar from "./Sidebar";

const viewMap = {
    'profile': (<div style={ {float: 'right'} }>Profile</div>),
    'inbox': (<div style={ {float: 'right'} }>Inbox</div>),
    'schedule': (<div style={ {float: 'right'} }>Schedule</div>),
    'documents': (<div style={ {float: 'right'} }>Documents</div>),
    'findvets': (<div style={ {float: 'right'} }>Find Vets</div>),
    'connect': (<div style={ {float: 'right'} }>Connect</div>)
}

class UserDashboard extends Component {
    render() {
        this.props.hideNavigation(true);
        return (
            <div>
                { viewMap[this.props.view] }
                <Sidebar/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
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
import React, { Component } from "react";
import { connect } from "react-redux";
import { hideNavigation } from "../../actions";
import Sidebar from "./Sidebar";

class UserDashboard extends Component {
    render() {
        this.props.hideNavigation(true);
        return (
            <Sidebar/>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    hideNavigation: hidden => {
        dispatch(hideNavigation(hidden));
    }
})

export default connect(null, mapDispatchToProps)(UserDashboard);
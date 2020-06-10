import React, { Component } from "react";
import { connect } from "react-redux";
import { hideNavigation } from "../../actions";
import Sidebar from "./sidebar/Sidebar";
import Calendar from "./Calendar";
import {Grid} from "@material-ui/core";

const viewMap = {
    'profile': (<div style={ {float: 'right'} }>Profile</div>),
    'inbox': (<div style={ {float: 'right'} }>Inbox</div>),
    'schedule': (<Calendar/>),
    'documents': (<div style={ {float: 'right'} }>Documents</div>),
    'findvets': (<div style={ {float: 'right'} }>Find Vets</div>),
    'connect': (<div style={ {float: 'right'} }>Connect</div>)
}

class UserDashboard extends Component {
    render() {
        this.props.hideNavigation(true);
        return (
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <Sidebar/>
                </Grid>
                <Grid item xs={10}>
                    { viewMap[this.props.view]}
                </Grid>
            </Grid>
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
import React, {Component} from "react";
import { connect } from "react-redux";
import {
    MenuLogo,
    MenuSignOut,
    SidebarContainer,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuItemLabel
} from "./SidebarStyles";
import EmailIcon from '@material-ui/icons/Email';
import PersonIcon from '@material-ui/icons/Person';
import EventIcon from '@material-ui/icons/Event';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ChatIcon from '@material-ui/icons/Chat';
import PetsIcon from '@material-ui/icons/Pets';
import { setUserDashboardView } from "../../../actions";


class Sidebar extends Component {
    render() {
        return (
            <SidebarContainer>
                <SidebarMenu>
                    <MenuLogo>
                        <PetsIcon style={{padding: "5px"}}/> User Name
                    </MenuLogo>
                    <SidebarMenuItem onClick={ () => this.props.setUserDashboardView('profile') }>
                        <PersonIcon/>
                        <SidebarMenuItemLabel>Profile</SidebarMenuItemLabel>
                    </SidebarMenuItem>
                    <SidebarMenuItem onClick={ () => this.props.setUserDashboardView('inbox') }>
                        <EmailIcon/>
                        <SidebarMenuItemLabel>Inbox</SidebarMenuItemLabel>
                    </SidebarMenuItem>
                    <SidebarMenuItem onClick={ () => this.props.setUserDashboardView('schedule') }>
                        <EventIcon/>
                        <SidebarMenuItemLabel>Schedule</SidebarMenuItemLabel>
                    </SidebarMenuItem>
                    <SidebarMenuItem onClick={ () => this.props.setUserDashboardView('documents') }>
                        <InsertDriveFileIcon/>
                        <SidebarMenuItemLabel>Documents</SidebarMenuItemLabel>
                    </SidebarMenuItem>
                    <SidebarMenuItem onClick={ () => this.props.setUserDashboardView('findvets') }>
                        <PersonAddIcon/>
                        <SidebarMenuItemLabel>Find Vets</SidebarMenuItemLabel>
                    </SidebarMenuItem>
                    <SidebarMenuItem onClick={ () => this.props.setUserDashboardView('connect') }>
                        <ChatIcon/>
                        <SidebarMenuItemLabel>Connect</SidebarMenuItemLabel>
                    </SidebarMenuItem>
                    <MenuSignOut href="/">Sign Out</MenuSignOut>
                </SidebarMenu>
            </SidebarContainer>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    setUserDashboardView: view => {
        dispatch(setUserDashboardView(view));
    }
});


const mapStateToProps = state => {
    return {
        view: state.userDashboardView
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
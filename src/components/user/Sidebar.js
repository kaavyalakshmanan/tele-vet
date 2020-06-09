import React, {Component} from "react";
import "../../css/App.css"
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


class Sidebar extends Component {
    render() {
        return (
            <SidebarContainer>
                <SidebarMenu>
                    <MenuLogo>
                        <PetsIcon style={{padding: "5px"}}/> User Name
                    </MenuLogo>
                    <SidebarMenuItem>
                        <PersonIcon/>
                        <SidebarMenuItemLabel>Profile</SidebarMenuItemLabel>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <EmailIcon/>
                        <SidebarMenuItemLabel>Inbox</SidebarMenuItemLabel>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <EventIcon/>
                        <SidebarMenuItemLabel>Schedule</SidebarMenuItemLabel>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <InsertDriveFileIcon/>
                        <SidebarMenuItemLabel>Documents</SidebarMenuItemLabel>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <PersonAddIcon/>
                        <SidebarMenuItemLabel>Find Vets</SidebarMenuItemLabel>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <ChatIcon/>
                        <SidebarMenuItemLabel>Connect</SidebarMenuItemLabel>
                    </SidebarMenuItem>
                    <MenuSignOut>Sign Out</MenuSignOut>
                </SidebarMenu>
            </SidebarContainer>
        );
    }
}

export default Sidebar;
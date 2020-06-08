import React, { Component } from "react";
import Styles from "./SidebarStyles";

class Sidebar extends Component {
    render() {
        return (
            <Styles.SidebarContainer>
                <Styles.SidebarMenu>
                    <Styles.SidebarMenuItem>
                        <Styles.Icon/>
                        <Styles.SidebarMenuItemLabel>Profile</Styles.SidebarMenuItemLabel>
                    </Styles.SidebarMenuItem>
                    <Styles.SidebarMenuItem>
                        <Styles.Icon/>
                        <Styles.SidebarMenuItemLabel>Inbox</Styles.SidebarMenuItemLabel>
                    </Styles.SidebarMenuItem>
                    <Styles.SidebarMenuItem>
                        <Styles.Icon/>
                        <Styles.SidebarMenuItemLabel>Schedule</Styles.SidebarMenuItemLabel>
                    </Styles.SidebarMenuItem>
                    <Styles.SidebarMenuItem>
                        <Styles.Icon/>
                        <Styles.SidebarMenuItemLabel>Documents</Styles.SidebarMenuItemLabel>
                    </Styles.SidebarMenuItem>
                    <Styles.SidebarMenuItem>
                        <Styles.Icon/>
                        <Styles.SidebarMenuItemLabel>Find Vets</Styles.SidebarMenuItemLabel>
                    </Styles.SidebarMenuItem>
                    <Styles.SidebarMenuItem>
                        <Styles.Icon/>
                        <Styles.SidebarMenuItemLabel>Connect</Styles.SidebarMenuItemLabel>
                    </Styles.SidebarMenuItem>
                </Styles.SidebarMenu>
            </Styles.SidebarContainer>
        );
    }
}

export default Sidebar;
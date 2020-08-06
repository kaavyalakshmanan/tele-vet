import React, {useState} from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import {Apps, CloudDownload, FeaturedVideo} from "@material-ui/icons";

// core components
import CustomDropdown from "../../../material-ui-assets/components/CustomDropdown/CustomDropdown.js";
import Button from "../../../material-ui-assets/components/CustomButtons/Button.js";
import styles from "../../../material-ui-assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks({auth, id, handleAddProfilePicture, handleAddPhoto, handleAvailabilities, startVideoConference}) {
    const classes = useStyles();
    let dropdownList = auth ?
        [
            <a
                target="_blank"
                className={classes.dropdownLink}
                onClick={handleAddProfilePicture}
            >
                Upload Profile Picture
            </a>,
            <a
                target="_blank"
                className={classes.dropdownLink}
                onClick={handleAddPhoto}
            >
                Edit Photos
            </a>,
            <a
                target="_blank"
                className={classes.dropdownLink}
                onClick={handleAvailabilities}
            >
                Edit Appointment Availabilities
            </a>
        ] : [
            <a
                target="_blank"
                className={classes.dropdownLink}
            >
                Review This Vet
            </a>,
            <a
                target="_blank"
                className={classes.dropdownLink}
                href={'/login/vet' + '?id=' + id}
            >
                Login
            </a>,
            <a
                target="_blank"
                className={classes.dropdownLink}
            >
                Contact Televet to Sign Up
            </a>
        ]

    let videoButton = !auth ? null : (
        <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
            onClick={startVideoConference}>
            <FeaturedVideo className={classes.icons}/>
            Video Appointment
        </Button>)

    return (
        <List className={classes.list}>
            <ListItem className={classes.listItem}>
                <CustomDropdown
                    noLiPadding
                    buttonText="Your clinic?"
                    buttonProps={{
                        className: classes.navLink,
                        color: "transparent"
                    }}
                    buttonIcon={Apps}
                    dropdownList={dropdownList}
                />
            </ListItem>
            <ListItem className={classes.listItem}>
                {videoButton}
            </ListItem>
        </List>
    );
}
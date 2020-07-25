/*eslint-disable*/
import React from "react";
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
import CustomDropdown from "../../../components/material-kit/CustomDropdown/CustomDropdown.js";
import Button from "../../../components/material-kit/CustomButtons/Button.js";

import styles from "../../../assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
    const classes = useStyles();
    return (
        <List className={classes.list}>
            <ListItem className={classes.listItem}>
                <CustomDropdown
                    noLiPadding
                    buttonText="Edit Page"
                    buttonProps={{
                        className: classes.navLink,
                        color: "transparent"
                    }}
                    buttonIcon={Apps}
                    dropdownList={[
                        <Link to="/" className={classes.dropdownLink}>
                            Log Out
                        </Link>,
                        <a
                            target="_blank"
                            className={classes.dropdownLink}
                        >
                            Update Availability
                        </a>,
                        <a
                            target="_blank"
                            className={classes.dropdownLink}
                        >
                            Edit Description
                        </a>,
                        <a
                            target="_blank"
                            className={classes.dropdownLink}
                        >
                            Edit Photos
                        </a>,
                        <a
                            target="_blank"
                            className={classes.dropdownLink}
                        >
                            Edit Contact Information
                        </a>
                    ]}
                />
            </ListItem>
            <ListItem className={classes.listItem}>
                <Tooltip
                    id="Video-Appointment"
                    title="Start a Video Appointment"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{tooltip: classes.tooltip}}
                >
                    <Button
                        color="transparent"
                        target="_blank"
                        className={classes.navLink}
                    >
                        <FeaturedVideo className={classes.icons}/> Video Appointment
                    </Button>
                </Tooltip>
            </ListItem>
        </List>
    );
}

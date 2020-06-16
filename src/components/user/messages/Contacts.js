import React from 'react';
import { connect } from "react-redux";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import {makeStyles} from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";

const useStyles = makeStyles((theme) => ({
    text: {
        padding: theme.spacing(2, 2, 0),
    },
    paper: {
        paddingBottom: 50,
    },
    list: {
        marginBottom: theme.spacing(2),
    },
    subheader: {
        backgroundColor: theme.palette.background.paper,
    },
    grow: {
        flexGrow: 1,
    },
}));

export default function Contacts({ contacts, onclick }) {
    const classes = useStyles();
    return (
        <List className={classes.list}>
            {
                contacts.map(( contact ) => (
                <React.Fragment>
                    <ListItem button onClick={() => {
                        onclick(contact);
                    }}>
                        <ListItemAvatar>
                            <Avatar alt="Profile Picture" src={contact.avatar} />
                        </ListItemAvatar>
                        <ListItemText primary={contact.name} />
                    </ListItem>
                </React.Fragment>
            ))}
        </List>
    )
}
import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { loginUser, logoutUser, selectInbox } from "../../actions";
import Calendar from "./schedule/Calendar";
import VideocamIcon from "@material-ui/icons/Videocam";
import EventIcon from "@material-ui/icons/Event";
import MapIcon from "@material-ui/icons/Map";
import DescriptionIcon from "@material-ui/icons/Description";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import NavBar from "./sidebar/NavBar";
import Album from "./photos/Album";
import VideoConference from "../VideoConference/VideoConference"
import DocumentList from "./Documents/DocumentList";
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from "@material-ui/core/styles";

const viewMap = {
    'Calendar': <Calendar style={ { padding: '50px'} }/>,
    'Visit-Summary': <DocumentList/>,
    'E-Visit': <VideoConference/>,
    'Photo Gallery': <Album/>,
    'loader': <div className="loader"/>
}

const iconMap = {
    'Calendar': <EventIcon color={ 'inherit' }/>,
    'Find a Vet': <MapIcon color={ 'inherit' }/>,
    'E-Visit': <VideocamIcon color={ 'inherit' } />,
    'Visit-Summary': <DescriptionIcon color={ 'inherit' }/>,
    'Photo Gallery': <PhotoCameraIcon color={ 'inherit' }/>,
}

const useStyles = makeStyles((theme) => ({
    spinner: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

// EFFECTS: Render the user dashboard
// REQUIRED PROPS: userAuthData
// LOCATION: /login
export default function UserDashboard(props) {
    const classes = useStyles();
    const [currentView, setView] = React.useState('Photo Gallery');
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const onLogout = (e) => {
        dispatch(logoutUser());
    }

    useEffect(() => {
        return props.userAuthData.then(userAuthData => {
            dispatch(loginUser(userAuthData));
        });
    }, []);

    const renderView = () => viewMap[currentView];

    if (!user.isAuthenticated || user.isFetching) {
        return (
            <div className={classes.spinner}>
                <LinearProgress />
            </div>
        )
    }
    return (
        <div>
            <NavBar
                handleViewChange={view => {
                    // FIXME: what is going on here?
                    if (view === 'Messages') {
                        dispatch(selectInbox(null));
                    } else if (view === 'Find a Vet') {
                        let win = window.open(`/find/vets`, '_blank');
                        win.focus();
                    } else {
                        setView(view);
                    }
                }
                }
                renderView={renderView}
                iconMap={iconMap}
                userName={user.username}
                email={user.email}
                currentView={currentView}
                onLogout={onLogout}
            />
        </div>
    )
}
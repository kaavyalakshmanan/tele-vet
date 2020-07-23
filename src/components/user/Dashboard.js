import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginUser, logoutUser, selectInbox} from "../../actions";
import Calendar from "./schedule/Calendar";
import MailIcon from "@material-ui/icons/Mail";
import VideocamIcon from "@material-ui/icons/Videocam";
import EventIcon from "@material-ui/icons/Event";
import MapIcon from "@material-ui/icons/Map";
import DescriptionIcon from "@material-ui/icons/Description";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import {NavBar} from "./sidebar/NavBar";
import Messages from "./messages/Messages";
import Album from "./photos/Album";
import VideoConference from "../videoConference/VideoConference"
import DocumentList from "./documents/DocumentList";
import LoadingOverlay from 'react-loading-overlay';

const viewMap = {
    'Messages': <Messages/>,
    'Calendar': <Calendar style={ { padding: '50px'} }/>,
    'Find a Vet': <NewFindVet/>,
    'Visit-Summary': <DocumentList/>,
    'E-Visit': <VideoConference/>,
    'Photo Gallery': <Album/>,
    'loader': <div className="loader"/>
}

const iconMap = {
    'Messages':  <MailIcon color={ 'inherit' }/>,
    'Calendar': <EventIcon color={ 'inherit' }/>,
    'Find a Vet': <MapIcon color={ 'inherit' }/>,
    'E-Visit': <VideocamIcon color={ 'inherit' } />,
    'Visit-Summary': <DescriptionIcon color={ 'inherit' }/>,
    'Photo Gallery': <PhotoCameraIcon color={ 'inherit' }/>,
}

export default function UserDashboard({id}) {
    const [currentView, setView] = React.useState('Photo Gallery');
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const onLogout = (e) => {
        dispatch(logoutUser());
    }

    useEffect(() => {
        dispatch(loginUser(id));
    }, [])

    return (
        <div>
            <LoadingOverlay
                active={user.isFetching}
                spinner
            >
            <NavBar
                handleViewChange={view => {
                    // FIXME: what is going on here?
                    if (view === 'Messages') {
                        dispatch(selectInbox(null));
                    }
                    setView(view);
                }
                }
                renderView={() => viewMap[currentView]}
                iconMap={iconMap}
                userName={user.username}
                email={user.email}
                currentView={currentView}
                onLogout={onLogout}
            />
            </LoadingOverlay>
        </div>
    )
}
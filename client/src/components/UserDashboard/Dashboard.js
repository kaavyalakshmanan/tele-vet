import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginUser, logoutUser, selectInbox} from "../../actions";
import Calendar from "./Schedule/Calendar";
import MailIcon from "@material-ui/icons/Mail";
import VideocamIcon from "@material-ui/icons/Videocam";
import EventIcon from "@material-ui/icons/Event";
import MapIcon from "@material-ui/icons/Map";
import DescriptionIcon from "@material-ui/icons/Description";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import {NavBar} from "./Sidebar/NavBar";
import Messages from "./Messages/Messages";
import Album from "./Photos/Album";
import VideoConference from "../VideoConference/VideoConference"
import DocumentList from "./Documents/DocumentList";
import VetFinder from "../VetFinder/VetFinder";

const viewMap = {
    'Messages': <Messages/>,
    'Calendar': <Calendar style={ { padding: '50px'} }/>,
    'Find a Vet': <VetFinder/>,
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

export default function UserDashboard({petId}) {
    const [currentView, setView] = React.useState('Photo Gallery');
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const onLogout = (e) => {
        dispatch(logoutUser());
    }

    useEffect(() => {
        dispatch(loginUser(petId));
    }, [])

    const renderView = () => viewMap[currentView];

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
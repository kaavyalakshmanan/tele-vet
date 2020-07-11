import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {addImage, hideNavigation, loginUser, logoutUser, selectInbox, updateProfilePicture} from "../../actions";
import Calendar from "./schedule/Calendar";
import MailIcon from "@material-ui/icons/Mail";
import VideocamIcon from "@material-ui/icons/Videocam";
import EventIcon from "@material-ui/icons/Event";
import MapIcon from "@material-ui/icons/Map";
import DescriptionIcon from "@material-ui/icons/Description";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import {NavBar} from "./sidebar/NavBar";
import Messages from "./messages/Messages";
import FindVet from "../maps/FindVet";
import Album from "./photos/Album";
import {Footer} from "../Footer";
import DocumentAlbum from "./documents/DocumentAlbum";
let initialFetch = true;

const viewMap = {
    'Messages': <Messages/>,
    'Calendar': <Calendar style={ { padding: '50px'} }/>,
    'Find a Vet': <FindVet/>,
    'Visit-Summary': <DocumentAlbum/>,
    'E-Visit': 'E-Visit',
    'Photo Gallery': <Album/>,
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
    const [currentView, setView] = React.useState('');
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const onLogout = (e) => {
        dispatch(logoutUser());
    }

    dispatch(hideNavigation(true));
    if (initialFetch) {
        initialFetch = false;
        dispatch(loginUser(id));
    }

    if (user.isFetching) {
        return (<div className="loader"/>)
    }

    if (!user.isAuthenticated) {
        return (<div className="loader"/>)
    } else {
        // FIXME: Change colors to match home screen
        return (
            <div>
                <NavBar
                    handleViewChange={view => {
                        if (view === 'Messages') {
                            dispatch(selectInbox(null));
                        }
                        setView(view);
                    }}
                    renderView={() => viewMap[currentView]}
                    iconMap={iconMap}
                    userName={user.username}
                    email={user.email}
                    currentView={currentView}
                    onLogout={onLogout}
                />
            </div>
        )
    }
}
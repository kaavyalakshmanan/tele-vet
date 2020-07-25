import React, { useState, useEffect } from 'react';
import ProgressComponent from '@material-ui/core/CircularProgress';
import axios from "axios";
const { v4: uuidv4 } = require('uuid');



function JitsiMeetComponentUser() {
    // const [loading, setLoading] = useState(true);
    const [videoConferenceId, setId] = useState("192837465135792468");
    const containerStyle = {
        // width: '800px',
        // height: '400px',
        width: "100%",
        height: "100%",
    };

    const jitsiContainerStyle = {
        display: "block",
        // (loading ? 'none' : 'block'),
        width: '100%',
        height: '100%',
        // width: '800px',
        // height: '400px',
    }

    function startConference() {
        try {
            const domain = 'meet.jit.si/';
            const options = {
                roomName: videoConferenceId,
                height: 800,
                // security: Need to find this option in the API and implement itS
                parentNode: document.getElementById('jitsi-container'),
                interfaceConfigOverwrite: {
                    filmStripOnly: false,
                    SHOW_JITSI_WATERMARK: false,
                },
                configOverwrite: {
                    disableSimulcast: false,
                },
            };

            const api = new window.JitsiMeetExternalAPI(domain, options);
            api.addEventListener('videoConferenceJoined', () => {
                console.log('Local User Joined');
                // setLoading(false);
                api.executeCommand('displayName', 'Dr. Shawarma');
            });
        } catch (error) {
            console.error('Failed to load Jitsi API', error);
        }
    }

    useEffect(() => {
        // verify the JitsiMeetExternalAPI constructor is added to the global..
        if (window.JitsiMeetExternalAPI) startConference();
        else alert('Jitsi Meet API script not loaded');
    }, []);

    return (
        <div
            style={containerStyle}
        >
            {/*{loading && <ProgressComponent />}*/}
            <div
                id="jitsi-container"
                style={jitsiContainerStyle}
            />
        </div>
    );
}

export default JitsiMeetComponentUser;

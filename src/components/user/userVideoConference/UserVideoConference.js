import axios from "axios";
import React, { useState, useEffect } from 'react';
import ProgressComponent from '@material-ui/core/CircularProgress';
const { v4: uuidv4 } = require('uuid');



function JitsiMeetComponentUser() {
    // const [loading, setLoading] = useState(true);
    // const [videoConferenceId, setId] = useState(callId);
    const containerStyle = {
        // width: '800px',
        // height: '400px',
        width: "100%",
        height: "100%",
    };

    // const callId = () => {
    //     const id = "5f1a0c96670fb32eca6b3d0e"
    //     return axios.get("http://localhost:9000/users/" + id)
    //         .then(response => {
    //             startConference(response.data.videoConferenceId)
    //             // return response.data.videoConferenceId
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // }
      //{"isVetConnected": true}


    const jitsiContainerStyle = {
        display: "block",
        // (loading ? 'none' : 'block'),
        width: '100%',
        height: '100%',
        // width: '800px',
        // height: '400px',
    }

    function startConference(callId) {
        try {
            const domain = 'meet.jit.si/';
            const options = {
                roomName: callId,
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

    useEffect(async() => {
        // verify the JitsiMeetExternalAPI constructor is added to the global..
        await callId;
        if (window.JitsiMeetExternalAPI) startConference(callId);
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

const callId = () => {
    const id = "5f1a0c96670fb32eca6b3d0e"
    return axios.get("http://localhost:9000/users/" + id)
        .then(response => {
            // startConference(response.data.videoConferenceId)
            return response.data.videoConferenceId
        })
        .catch((err) => {
            console.log(err)
        })
}
//
// function startConference(roomId) {
//     try {
//         const domain = 'meet.jit.si/';
//         const options = {
//             roomName: roomId,
//             height: 800,
//             // security: Need to find this option in the API and implement itS
//             parentNode: document.getElementById('jitsi-container'),
//             interfaceConfigOverwrite: {
//                 filmStripOnly: false,
//                 SHOW_JITSI_WATERMARK: false,
//             },
//             configOverwrite: {
//                 disableSimulcast: false,
//             },
//         };
//
//         const api = new window.JitsiMeetExternalAPI(domain, options);
//         api.addEventListener('videoConferenceJoined', () => {
//             console.log('Local User Joined');
//             // setLoading(false);
//             api.executeCommand('displayName', 'Dr. Shawarma');
//         });
//     } catch (error) {
//         console.error('Failed to load Jitsi API', error);
//     }
// }

export default JitsiMeetComponentUser;

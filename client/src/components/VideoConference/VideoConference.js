import React, { useEffect } from 'react';
const { v4: uuidv4 } = require('uuid');

function JitsiMeetComponent() {
    const containerStyle = {
        width: "100%",
        height: "100%",
    };

    const jitsiContainerStyle = {
        display: "block",
        width: '100%',
        height: '100%',
    }

    function startConference() {
        try {
            const id = uuidv4();
            const domain = 'meet.jit.si/';
            const options = {
                roomName: id,
                height: 800,
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
                api.executeCommand('displayName');
            });
        } catch (error) {
            console.error('Failed to load Jitsi API', error);
        }
    }

    useEffect(() => {
        if (window.JitsiMeetExternalAPI) startConference();
        else alert('Jitsi Meet API script not loaded');
    }, []);

    return (
        <div
            style={containerStyle}
        >
            <div
                id="jitsi-container"
                style={jitsiContainerStyle}
            />
        </div>
    );
}

export default JitsiMeetComponent;

//Code for building this component was taken from these sources:
// - https://jitsi.github.io/handbook/docs/dev-guide/dev-guide-iframe
// - https://github.com/jitsi/lib-jitsi-meet/blob/master/doc/API.md#installation
// - https://gitee.com/huangranrumeng/jitsi-meet/raw/a9bdde193da5d57cbbd4e8c89afebe6de71544a5/doc/api.md
// - https://meetrix.io/blog/webrtc/integrate-jitsi-meet-to-react-app.html
// - https://jitsi.org/api/
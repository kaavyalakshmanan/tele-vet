import React, { useState, useEffect } from 'react';
import JitsiMeetExternalAPI from "lib-jitsi-meet-dist"
// import JitsiMeetJS from "lib-jitsi-meet-dist"

function VideoConference() {
    const [loading, setLoading] = useState(true);
    const containerStyle = {
        width: '100%',
        height: '100vh',
        padding: '0',
        margin: '0'
    };

    const jitsiContainerStyle = {
        display: (loading ? 'none' : 'block'),
        width: '100%',
        height: '100%',
        padding: '0',
        margin: '0'
    }

    function startConference() {
        try {
            const domain = 'meet.jit.si';
            const options = {
                roomName: 'roomName22',
                height: '100vh',
                parentNode: document.getElementById('jitsi-container'),
                interfaceConfigOverwrite: {
                    filmStripOnly: false,
                    SHOW_JITSI_WATERMARK: false,
                    SHOW_BRAND_WATERMARK: false,
                    SHOW_WATERMARK_FOR_GUESTS: false,
                    defaultLanguage: 'es',
                    TOOLBAR_BUTTONS: [
                        "microphone", "camera", "desktop",
                        "chat", "filmstrip","settings",'etherpad','titleview','hangup'
                    ],
                    MAIN_TOOLBAR_BUTTONS: ['microphone', 'camera', 'desktop'],
                },
                configOverwrite: {
                    disableSimulcast: false,
                    defaultLanguage: 'es',
                },
            };

            const api = new window.JitsiMeetExternalAPI(domain, options);
            api.addEventListener('videoConferenceJoined', () => {
                console.log('Local User Joined');
                setLoading(false);
                api.executeCommand('displayName', 'MyName');
            });
        } catch (error) {
            console.error('Failed to load Jitsi API', error);
        }
    }

    useEffect(() => {
        // verify the JitsiMeetExternalAPI constructor is added to the global..
        if (window.JitsiMeetExternalAPI){ startConference();}
        else {
            alert('Ha ocurrido un error por favor intenté más tarde o pruebe en otro navegador');
            window.location.replace('../index.html');
        }
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

export default VideoConference
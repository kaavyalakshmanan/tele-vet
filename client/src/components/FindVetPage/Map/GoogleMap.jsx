import React from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';

const Wrapper = styled.main`
    height: 90vh;
    width: 100vw;
    display: flex;
    
`;

// EFFECTS: RENDERS A GOOGLE MAP PAGE
// REQUIRED PROPS: defaultZoom, defaultCenter, bootstrapURLKeys, yesIWantToUseGoogleMapApiInternals, onGoogleApiLoaded
const GoogleMap = ({ children, ...props }) => (
    <Wrapper>
        <GoogleMapReact
            {...props}
        >
            {children}
        </GoogleMapReact>
    </Wrapper>
);

GoogleMap.defaultProps = {
    children: null,
};

export default GoogleMap;
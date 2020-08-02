import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';

const Wrapper = styled.main`
    height: 50vh;
    width: 90vw;
    display: flex;
    
`;

const GoogleMap = ({ children, ...props }) => (
    <Wrapper>
        <GoogleMapReact
            bootstrapURLKeys={{
                key: 'AIzaSyBREwvARS3lmrahtK3OFrNG2Ev3QUm1Spw',
            }}
            {...props}
        >
            {children}
        </GoogleMapReact>
    </Wrapper>
);

GoogleMap.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
    ]),
};

GoogleMap.defaultProps = {
    children: null,
};

export default GoogleMap;
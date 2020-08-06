import React, { Fragment } from 'react';
import isEmpty from 'lodash.isempty';
import GoogleMap from "./GoogleMap";

const VANCOUVER_COORDINATES = [49.257803, -123.119299];
let CURRENT_LOCATION = null;

const positionOptions = {
    timeout: 3000,
    MaximumAge: 0
};

const positionSuccess = position => {
    CURRENT_LOCATION = [position.coords.latitude, position.coords.longitude]
}

const positionError = () => {
    CURRENT_LOCATION = VANCOUVER_COORDINATES;
}

navigator.geolocation.getCurrentPosition(positionSuccess, positionError, positionOptions);

// The info window that appears when a marker is clicked
const getInfoWindowString = place => `
      <div style="font-size: 16px;">
        ${place.businessName}
      </div>
      <div style="font-size: 14px;">
        <span style="color: grey;">
        ${place.rating}
        </span>
        <span style="color: orange;">${String.fromCharCode(9733).repeat(Math.floor(place.rating))}</span>
        <span style="color: lightgrey;">${String.fromCharCode(9733).repeat(5 - Math.floor(place.rating))}</span>
      </div>
    </div>`;

// Place markers and add listeners
// This function is called after the google api is finished loading
const handleApiLoaded = (map, maps, places) => {
    const markers = [];
    const infowindows = [];

    places.forEach((place) => {
        markers.push(new maps.Marker({
            id: place.id,
            position: {
                lat: place.geometry.location.lat,
                lng: place.geometry.location.lng,
            },
            map,
        }));

        infowindows.push(new maps.InfoWindow({
            content: getInfoWindowString(place),
        }));
    });

    markers.forEach((marker, i) => {
        marker.addListener('click', () => {
            infowindows[i].open(map, marker);
        });
    });
};

// EFFECTS: Renders a google map with markers at specified locations
// REQUIRED PROPS: markers
function Map(props) {
    if (props.markers) {
        return (
            <Fragment>
                {!isEmpty(props.markers) && (
                    <GoogleMap
                        defaultZoom={11}
                        defaultCenter={CURRENT_LOCATION}
                        bootstrapURLKeys={ {key: 'AIzaSyBREwvARS3lmrahtK3OFrNG2Ev3QUm1Spw'} }
                        yesIWantToUseGoogleMapApiInternals
                        onGoogleApiLoaded={({map, maps}) => handleApiLoaded(map, maps, props.markers)}
                    />
                )}
            </Fragment>
        );
    } else {
        return (
            <Fragment>
                <GoogleMap/>
            </Fragment>
        )
    }
}

export default Map;
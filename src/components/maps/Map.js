import React, { Component, Fragment } from 'react';
import isEmpty from '../../../node_modules/lodash.isempty';
import vetData from "../../resources/vet_data";
import GoogleMap from './GoogleMap';

const VANCOUVER_COORDINATES = [49.257803, -123.119299];
let CURRENT_LOCATION = null;

const positionOptions = {
    timeout: 3000,
    MaximumAge: 0
};

const positionSuccess = position => {
    CURRENT_LOCATION = [position.coords.latitude, position.coords.longitude]
}

const positionError = err => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
    CURRENT_LOCATION = VANCOUVER_COORDINATES;
}

navigator.geolocation.getCurrentPosition(positionSuccess, positionError, positionOptions);

const getInfoWindowString = place => `
      <div style="font-size: 16px;">
        ${place.name}
      </div>
      <div style="font-size: 14px;">
        <span style="color: grey;">
        ${place.rating}
        </span>
        <span style="color: orange;">${String.fromCharCode(9733).repeat(Math.floor(place.rating))}</span>
        <span style="color: lightgrey;">${String.fromCharCode(9733).repeat(5 - Math.floor(place.rating))}</span>
      </div>
      <div style="font-size: 14px; color: grey;">
        ${place.types[0].replace('_', ' ')}
      </div>
      <div style="font-size: 14px; color: grey; margin-top: 5px">
        ${'$'.repeat(place.price_level)}
      </div>
    </div>`;

// Return map bounds based on list of places
const getMapBounds = (map, maps, places) => {
    const bounds = new maps.LatLngBounds();

    places.forEach((place) => {
        bounds.extend(new maps.LatLng(
            place.geometry.location.lat,
            place.geometry.location.lng,
        ));
    });
    return bounds;
};

// Re-center map when resizing the window
const bindResizeListener = (map, maps, bounds) => {
    maps.event.addDomListenerOnce(map, 'idle', () => {
        maps.event.addDomListener(window, 'resize', () => {
            map.fitBounds(bounds);
        });
    });
};

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
            let win = window.open(`/vet/profile?id=${marker.id}`, '_blank');
            win.focus();
        });
    });
};

class Map extends Component {
    constructor(props) {
        super(props);

        this.state = {
            places: vetData,
        };
    }

    render() {
        const { places } = this.state;

        return (
            <Fragment>
                {!isEmpty(places) && (
                    <GoogleMap
                        defaultZoom={10}
                        defaultCenter={VANCOUVER_COORDINATES}
                        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
                        yesIWantToUseGoogleMapApiInternals
                        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps, places)}
                    />
                )}
            </Fragment>
        );
    }
}

export default Map;
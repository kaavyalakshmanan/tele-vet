import React from "react";
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";
import vetData from "../../resources/vet_data";

export class Maps extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      vets: [],
      loc: { lat: 30.257803, lng: -123.119299 },
      loading: true,
    };
  }

  componentDidMount() {
    // sets vetData to state
    this.setState({
      vets: vetData,
    });

    // get user current location, set loading: false
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        this.setState({
          loc: { lat: latitude, lng: longitude },
          loading: false,
        });
      },
      () => {
        this.setState({ loading: false });
      }
    );
  }

  displayMarkers = () => {
    return this.state.vets.map((vet, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: vet.geometry.location.lat,
            lng: vet.geometry.location.lng,
          }}
          onClick={() => console.log("You clicked me!")}
        />
      );
    });
  };

  render() {
    const { loading, loc } = this.state;
    const { google } = this.props;
    const mapStyles = {
      width: "50%",
      height: "70%",
      position: "relative",
    };

    // if geolocation is not retrieved successfully, do not load Google maps
    if (loading) {
      return null;
    }

    // otherwise (state changes with loading: false), load maps with fetched current geolocation
    return (
      <div id="mapDisplay">
        <h1>Find a vet to help your pet! </h1>

        <div id="map"></div>

        <Map
          id="map_loader"
          google={google}
          zoom={14}
          style={mapStyles}
          initialCenter={loc}
        >
          {this.displayMarkers()}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBREwvARS3lmrahtK3OFrNG2Ev3QUm1Spw",
})(Maps);
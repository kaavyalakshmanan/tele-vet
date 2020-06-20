import React from 'react';
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';
import vetData from "../../resources/vet_data";


//________________________________________________________
const mapStyles = {
    width: '50%',
    height: '70%',
    position: 'relative'

};

class Maps extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            vets: []
        }
    }

    componentDidMount() {
        this.setState({
            vets: vetData
        })
    }

    displayMarkers = () => {
        return this.state.vets.map((vet, index) => {
            return <Marker key={index} id={index} position={{
                lat: vet.geometry.location.lat,
                lng: vet.geometry.location.lng
            }}

           onClick={() => console.log("You clicked me!")}/>
        })
    }


    render() {
        return (
            <div id='mapDisplay'>
                <h1>Find a vet to help your pet! </h1>

                <Map id="map_loader"
                    google={this.props.google}
                    zoom={12}
                     style={mapStyles}
                    initialCenter={{lat: 49.257803, lng: -123.119299}}
                >
                    {this.displayMarkers()}

                </Map>

            </div>

        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBREwvARS3lmrahtK3OFrNG2Ev3QUm1Spw"
})(Maps);
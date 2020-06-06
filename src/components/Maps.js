import React from 'react';
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';
import vetData from "../resources/vet_data";

const mapStyles = {
    width: '70%',
    height: '70%',
};

class Maps extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            vets: []
        }
    }

    // componentDidMount() {
    //     fetch("../resources/vet_data")
    //         .then(res => res.json())
    //         .then(data => {
    //             this.setState({vets: vetData.results})
    //         })
    //         .catch(console.error)
    // }

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
            <div id='map'>
                <h1>Find a vet to help your pet! </h1>
                <h2>
                    (work in progress)</h2>
                <p>... placeholder ...</p>

                <Map
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
    apiKey: apiKey
})(Maps);
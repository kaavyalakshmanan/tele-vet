import React from 'react';
import {GoogleApiWrapper, Map, Marker} from 'google-maps-react';
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
            vets: [],
            pos: {lat: 49.257803, lng: -123.119299}
        }
    }

    componentDidMount() {
        this.setState({
            vets: vetData,
            pos: this.initialMap()
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


    initialMap = async () => {
        async function getPos() {
            let pos;

            navigator.geolocation.getCurrentPosition(function (position) {
                pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                console.log("geo", pos)

                return pos
            })
        }

        console.log("lost", getPos())
        return await getPos()
    }


    render() {
        return (
            <div id='mapDisplay'>
                <h1>Find a vet to help your pet! </h1>

                <div id="map"
                >
                    <Map id="map_loader"
                         google={this.props.google}
                         zoom={12}
                         style={mapStyles}
                         initialCenter={this.state.pos}


                    >
                        {this.displayMarkers()}
                        {console.log("success!")}
                    </Map>

                </div>

            </div>

        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBREwvARS3lmrahtK3OFrNG2Ev3QUm1Spw"
})(Maps);
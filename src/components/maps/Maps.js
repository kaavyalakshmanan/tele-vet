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

    initMap = () => {
        console.log("async", this.initialMap())
        let position = this.initialMap()
        let pos;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                console.log("success", pos)
            })
        } else {
            pos = {lat: 49.257803, lng: -123.119299}

            console.log("local", pos)
        }
        console.log("now", pos)
        return <Map id="map_loader"
                    google={this.props.google}
                    zoom={12}
                    style={mapStyles}
                    initialCenter={position}

        />

    }

    initialMap = async () => {
        async function getPos() {
            let pos;

            // if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                console.log("geo", pos)

                return pos
            })
            // } else {
            //     pos = {lat: 49.257803, lng: -123.119299}
            // }
            // console.log("now", pos)
            // return pos
        }

        console.log("lost", getPos())
        return await getPos()
    }


    setUserCenter = () => {
        navigator.geolocation.getCurrentPosition(function (position) {
            let pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            console.log(pos)
            return pos
        })
    }

    render() {
        return (
            <div id='mapDisplay'>
                <h1>Find a vet to help your pet! </h1>

                {/*<Map id="map_loader"*/}
                {/*     google={this.props.google}*/}
                {/*     zoom={12}*/}
                {/*     style={mapStyles}*/}
                {/*     initialCenter={{lat: 49.257803, lng: -123.119299}}*/}
                {/*>*/}
                <div id="map">
                    {this.initMap()}
                    {/* {this.displayMarkers()}*/}
                    {/*/!*{console.log("LOCATION!", navigator.geolocation.getCurrentPosition(function (position) {*!/*/}
                    {/*/!*    let pos = {*!/*/}
                    {/*/!*        lat: position.coords.latitude,*!/*/}
                    {/*/!*        lng: position.coords.longitude*!/*/}
                    {/*/!*    };*!/*/}
                    {/*/!*    console.log(pos)*!/*/}
                    {/*/!*}))}*!/*/}
                    {/*// {console.log(this.setUserCenter())}*/}

                </div>
                {/*</Map>*/}

            </div>

        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBREwvARS3lmrahtK3OFrNG2Ev3QUm1Spw"
})(Maps);
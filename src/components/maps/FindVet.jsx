import React, {useState, useEffect} from 'react';
import Maps from "./Maps";
import VetCards from "./VetCards";
import axios from "axios"


const proxy = "https://cors-anywhere.herokuapp.com/";
const target = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=vets+in+Vancouver&key=AIzaSyBREwvARS3lmrahtK3OFrNG2Ev3QUm1Spw";


export default function FindVet() {

    const [data, setData] = useState([]);
    useEffect (() => {

      axios.get(proxy + target)
            .then(res => {
                console.log("hello result", res.data.results);
                // setData(res.data.results);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            })
    }, [])

    console.log("wanted", data)
    return (
        <div id="wrapper">

            <div id="map">
                <Maps
                     data={data}
                />

            </div>
            <div id="card">
                <VetCards
                    data={data}
                    />
            </div>
        </div>

    );

}

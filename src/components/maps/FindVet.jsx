import React from 'react';
import Maps from "./Maps";
import VetCards from "./VetCards";
import axios from "axios"


axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&&keyword=vet&key=AIzaSyBREwvARS3lmrahtK3OFrNG2Ev3QUm1Spw')
  .then(function (response) {
    // handle success
    console.log("response", response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });



export default function FindVet() {

    return (
        <div id="wrapper">

            <div id="map">
                <Maps/>
            </div>
            <div id="card">
                <VetCards/>
            </div>
        </div>

    );

}

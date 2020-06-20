import React from 'react';
import Maps from "./Maps";
import VetCards from "./VetCards";


function FindVet() {

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

export default FindVet;
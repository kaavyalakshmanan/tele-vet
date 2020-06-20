import React from "react";
import Carousel from "react-material-ui-carousel";
import {Paper} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import vet1 from "./DefaultPictures/vet1.jpg";
import vet2 from "./DefaultPictures/vet2.jpg";
import vet3 from "./DefaultPictures/vet3.jpg";
import "../../../css/Booking.css";

export default function CarouselSection() {

    let items = [
        {
            picture: vet1
        },
        {
            picture: vet2
        },
        {
            picture: vet3
        }
    ]

    return (
        <Carousel indicators={false}>
            {
                items.map((item) => <Item key1={item.picture}/>)
            }
        </Carousel>
    )
}

function Item(props) {
    return (
            <img className="carousel" src={props.key1} alt="SlideShow Here!!"/>
    )
}


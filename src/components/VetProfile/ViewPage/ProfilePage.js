import React from "react";
import CarouselSection from "./CarouselSection";
import Description from "./Description";
import FlipMain from "../bookingSystem/FlipMain";
import {Link} from "react-router-dom";

export default function ProfilePage() {
    return (
        <div>
            <CarouselSection/>
            <h1>Welcome to the Shawarma Clinic</h1>
            <Description/>
            <Link to="/EditPage">Edit</Link>
            <h5>Schedule your Appointment!</h5>
            <FlipMain/>
        </div>
    );
}
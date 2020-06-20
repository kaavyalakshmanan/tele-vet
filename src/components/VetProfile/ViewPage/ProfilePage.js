import React from "react";
import Carousel from 'react-material-ui-carousel'
import {Paper, Button} from '@material-ui/core'
import FlipCalendar from "../bookingSystem/CalendarSide";
import SectionCarousel from "./CarouselSection";

import CarouselSection from "./CarouselSection";
// import ProfilePicture from "./ViewPage/EditAvatar";
import Description from "./Description";
import FlipMain from "../bookingSystem/FlipMain";
import Nav from "react-bootstrap/Nav";
import {Link, Route, Switch} from "react-router-dom";
import EditPage from "../EditPage/EditPage";


// class ProfilePage extends React.Component{
//
//     constructor(props) {
//         super(props);
//         this.state = {};
//     }
//
//     render() {
//         return (
//             <div>
//                 <h1>Hello</h1>
//                 <FlipCalendar/>
//             </div>
//         )
//     }
// }
//
// export default (ProfilePage);

export default function ProfilePage(props) {
    return (
        <div>
            <CarouselSection/>
            <h1>Welcome to the Shawarma Clinic</h1>
            <Description/>
            <Link to="/EditPage">Edit</Link>
            <p/>
            <p/>
            <p/>
            <p/>
            <p/>
            <p/>
            <p/>
            <h5>Schedule your Appointment!</h5>
            <FlipMain/>
        </div>
    );
}

//If node_modules exists, remove it with rm -rf node_modules and then run npm install
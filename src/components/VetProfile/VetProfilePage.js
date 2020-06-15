import React from "react";
import Carousel from 'react-material-ui-carousel'
import {Paper, Button} from '@material-ui/core'
import BookingCalendar from "./bookingSystem/BookingCalendar";
import SectionCarousel from "./VetProfilePageComponents/CarouselSection";
import Testing from "./Testing"
import CarouselSection from "./VetProfilePageComponents/CarouselSection";
import ProfilePicture from "./VetProfilePageComponents/ProfilePicture";
import ProfileBox from "./VetProfilePageComponents/ProfileBox";

// class VetProfilePage extends React.Component{
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
//                 <BookingCalendar/>
//             </div>
//         )
//     }
// }
//
// export default (VetProfilePage);

export default function VetProfilePage (props) {
    return (
        <div>
            <CarouselSection/>
            <h1>Welcome to the Shawarma Clinic</h1>
            <ProfileBox/>
            <BookingCalendar/>
        </div>
    );
}
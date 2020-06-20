import Calendar from 'react-calendar';
import React from "react";
import 'react-calendar/dist/Calendar.css';


class FlipCalendar extends React.Component {
    constructor(props) {
        super(props);
    }

    processPick(day, event, element) {
        this.setState({
            date: day
        })
    }

    render() {
        return (
            <Calendar ClassName="Calendar" size={12} onClickDay={(day, event) => this.processPick(day, event)}/>
        )
    }
}

export default FlipCalendar

//==========================================================
//workbench for flip on click
//Calendar.toggle(.flip-card:hover .flip-card-inner) {
//        transform: rotateY(180deg);
//     }
//   (element).toggleClass('flipped')
//  <script>
//  function myFunction() {
//      var element = document.getElementById("myDIV");
//      element.classList.toggle("mystyle");
//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_class
//=============================================================
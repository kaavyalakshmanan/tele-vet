import Calendar from 'react-calendar';
import React from "react";
import 'react-calendar/dist/Calendar.css';
// import { useState } from 'react'


 class FlipCalendar extends React.Component {
    constructor(props) {
        super(props);
        // let today = new Date();
        // let currentDay = today.getFullYear() + '-' + (today.getMonth()) + '-' + today.getDate()
        // this.state = {currentDay};
        // this.onDayPress = this.onDayPress.bind(this);
        // const [value, onChange] = useState(new Date());
    }

     processPick(day, event, element) {
        this.setState({
            date: day
        })
     // Calendar.toggle(.flip-card:hover .flip-card-inner) {
     //         transform: rotateY(180deg);
     //     }
     //     (element).toggleClass('flipped')
        console.log(day)
    }

 // <button onClick="flip()">flip the card</button>
     // function flipCard(el) {
     //     $(el).toggleClass('flipped')
     // }
//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_class
// $('.flip-container .flipper').click(function() {
//     $(this).closest('.flip-container').toggleClass('hover');
//     $(this).css('transform, rotateY(180deg)');
//  <button onclick="myFunction()">Try it</button>
//
//  <div id="myDIV">
//  This is a DIV element.
//  </div>
//
//  <script>
//  function myFunction() {
//      var element = document.getElementById("myDIV");
//      element.classList.toggle("mystyle");

    render() {
        return (
            // <div>
            <Calendar ClassName= "Calendar"
                // firstDay={1}
                // onPressArrowLeft={substractMonth => substractMonth()}
                // onPressArrowRight={addMonth => addMonth()}
                      size={12}
                      onClickDay={(day, event) =>  this.processPick(day, event)}
            />
            // </div>
        )
    }
}

export default FlipCalendar


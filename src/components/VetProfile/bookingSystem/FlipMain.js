import React from "react";
import FlipCalendar from "./CalendarSide";
import TimeSlotSide from "./TimeSlotSide";


export default function FlipMain(){

    return(

    <div className="flip-card">
        <input type="checkbox" id="btnControl"/>
        <label className="btn" htmlFor="btnControl"/>
    <div className="flip-card-inner">
    <div className="flip-card-front">
    <FlipCalendar/>
    </div>
    <div className="flip-card-back">
    <TimeSlotSide/>
    </div>
    </div>
    </div>
    )
}
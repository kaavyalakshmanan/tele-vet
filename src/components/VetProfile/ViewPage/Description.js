import React from "react";
import Pic from "./DefaultPictures/drShawarma.jpeg"


export default function Description() {
    return (
        <div className="MuiGrid-root makeStyles-grid-98  MuiGrid-container MuiGrid-justify-xs-center">
            <div
                className="MuiGrid-root makeStyles-grid-99  MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-6">
                <div className="makeStyles-profile-436">

                    <div>
                        <img
                            className="makeStyles-imgRaised-442 makeStyles-imgRoundedCircle-441 makeStyles-imgFluid-439 profilePageContactInfo"
                            src={Pic} alt="..."/>
                        <h2>Dr.Shawarma</h2>
                        <h6>Dog Specialist</h6>
                        <p>3489 West Broadway<br/>604-989-8273<br/>www.shawarma.com</p>
                        <p>Hey! How have you been? Hungry? Dog food tastes better than cat food, etc. but shawarma food
                            tastes best! Give me a call and I will help you get better.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
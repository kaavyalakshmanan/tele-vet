import React from "react";
import CarouselSection from "./CarouselSection";
import Description from "./Description";
import FlipMain from "../bookingSystem/FlipMain";
import {Link} from "react-router-dom";
import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core/styles';
import Calendar from "./StaticDatePicker"; //temporary
// import Paper from '@material-ui/core/Paper'; //temporary
import StaticDatePicker from "./StaticDatePicker"
import Booking from "../bookingSystem2.0/Booking";
import axios from "axios"
import VideoConference2 from "../../videoConference/VideoConference";





// export default function ProfilePage(props) {

class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: null
        };
    }

    // useStyles = makeStyles((theme) => ({
    //     root: {
    //         flexGrow: 1,
    //         alignItems: "center",
    //         alignContent: "center"
    //     }
    // }))
    //
    // classes = useStyles();


    // placeholder***Should be deleted in later phase***
    // I think the mongoDB call should be made when the user makes the search
    // and displays the teaser cards created by Amy, then passes to this component as a prop on user onClick
    // componentDidMount() {
    //     const id = "5f04b521d46d3306e446c70f"
    //     axios.get("http://localhost:9000/id/" + id)
    //         .then(response => {
    //             this.setState(
    //                 {
    //                     profile: response.data
    //                 })
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // }


    render() {
        return (
            // <div className={classes.root}>
            <div style={{
                flexGrow: 1,
                alignItems: "center",
                alignContent: "center"}}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <CarouselSection/>
                    </Grid>
                    <Grid container spacing={1} xs={4}>
                        <Grid item xs={12}>
                            <Description/>
                        </Grid>
                        <Grid item xs={12}>
                            <h5>Schedule your Appointment!</h5>
                        </Grid>
                        <Grid item xs={12}>
                            {/*<Booking key0={this.state.profile._id} key1={this.state.profile.weeklyTimeBlocks} key2={this.state.profile.scheduledAppointments}/>*/}
                        </Grid>
                    </Grid>
                    <Grid container direction="column" spacing={1} xs={8}>
                        <Grid item>
                            <h1>Welcome to the Shawarma Clinic</h1>
                        </Grid>
                        <Grid item>
                            <p>Hey! How have you been? Hungry? Dog food tastes better than cat food, etc. but shawarma
                                food
                                tastes best! Give me a call and I will help you get better.</p>
                        </Grid>
                        <Link to="/EditPage">Edit</Link>
                        <Grid item>
                            <h3>Testimonials</h3>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default ProfilePage


{/*<CarouselSection/>*/
}
{/*<Description/>*/
}
{/*<h1>Welcome to the Shawarma Clinic</h1>*/
}
{/*<Link to="/EditPage">Edit</Link>*/
}
{/*<h5>Schedule your Appointment!</h5>*/
}
{/*<FlipMain/>*/
}

{/*<Paper className={classes.paper}>xs</Paper>*/
}

{/*/!*<FlipMain/>*!/*/}
{/*<StaticDatePicker*/}
{/*    style={{*/}
{/*        textAlign: 'center'*/}
{/*    }} />*/}

///////////////////////////////////////////////////
// to use api: https://jitsi.github.io/handbook/docs/dev-guide/dev-guide-iframe

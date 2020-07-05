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


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        alignItems: "center",
        alignContent: "center"
    }
}));


export default function ProfilePage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
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
                        {/*<FlipMain/>*/}
                        <StaticDatePicker
                            style={{
                                textAlign: 'center'
                            }} />
                    </Grid>
                </Grid>
                <Grid container direction="column" spacing={1} xs={8}>
                    <Grid item>
                    <h1>Welcome to the Shawarma Clinic</h1>
                    </Grid>
                <Grid item >
                <p>Hey! How have you been? Hungry? Dog food tastes better than cat food, etc. but shawarma food
                        tastes best! Give me a call and I will help you get better.</p>
                    </Grid>
                    <Link to="/EditPage">Edit</Link>
                </Grid>
            </Grid>
        </div>
    );
}


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


import React, {useEffect, useState} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
import EventIcon from "@material-ui/icons/Event";
import MailIcon from "@material-ui/icons/Mail";


// core components
import Header from "./Header/Header.js";
import Footer from "../material-kit/Footer/Footer.js";
import Button from "../material-kit/CustomButtons/Button.js";
import GridContainer from "../material-kit/Grid/GridContainer.js";
import GridItem from "../material-kit/Grid/GridItem.js";
import HeaderLinks from "./Header/HeaderLinks.js";
import NavPills from "../material-kit/NavPills/NavPills.js";
import Parallax from "../material-kit/Parallax/Parallax.js";

import styles from "../../assets/jss/material-kit-react/views/profilePage.js";
import {DatePicker, TimePicker} from "@material-ui/pickers";
import {MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import ReactCardFlip from "react-card-flip";

const useStyles = makeStyles(styles);

export default function VetProfilePage(props) {
    const classes = useStyles();
    const { ...rest } = props;
    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid
    );
    const [flipped, setFlipped] = useState(false);
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    const [date, changeDate] = useState(new Date());
    const appointmentButtonText = flipped ? "Save Time" : "Request " + date;
    let header = null;
    if (props.authenticated) {
        header = <Header
            color="transparent"
            brand="Tele Vet"
            rightLinks={<HeaderLinks />}
            fixed
            changeColorOnScroll={{
                height: 200,
                color: "white"
            }}
            {...rest}
        />
    }
    return (
        <div>
            {header}
            <Parallax small filter image={require("../../assets/img/vet/cute_puppy_cover.jpg")} />
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div>
                    <div className={classes.container}>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={6}>
                                <div className={classes.profile}>
                                    <div>
                                        <img
                                            alt="..."
                                            className={imageClasses}
                                            src={require("../../assets/img/vet/headshot.jpg")}
                                            style={{"max-width": "300px"}}
                                        />                                    </div>
                                    <div className={classes.name}>
                                        <h3 className={classes.title}>Dr. Shawarma</h3>
                                    </div>
                                </div>
                            </GridItem>
                        </GridContainer>
                        <div className={classes.description}>
                            <p>
                                Doctor Shawarma and her team strive to provide you with a comfortable, fun, and fast
                                vet experience for both you and your pet. We specialize in dog treatment
                                and surgery and are available for appointments in person and online.
                                We look forward to meeting you and your furry friends. {" "}
                            </p>
                        </div>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                                <NavPills
                                    alignCenter
                                    color="primary"
                                    tabs={[
                                        {
                                            tabButton: "Photos",
                                            tabIcon: Camera,
                                            tabContent: (
                                                <GridContainer justify="center">
                                                    <GridItem xs={12} sm={12} md={4}>
                                                        <img
                                                            alt="..."
                                                            src={require("../../assets/img/vet/vet1.jpg")}
                                                            className={navImageClasses}
                                                        />
                                                        <img
                                                            alt="..."
                                                            src={require("../../assets/img/vet/vet2.jpg")}
                                                            className={navImageClasses}
                                                        />
                                                    </GridItem>
                                                    <GridItem xs={12} sm={12} md={4}>
                                                        <img
                                                            alt="..."
                                                            src={require("../../assets/img/vet/vet3.jpg")}
                                                            className={navImageClasses}
                                                        />
                                                        <img
                                                            alt="..."
                                                            src={require("../../assets/img/vet/vet4.jpg")}
                                                            className={navImageClasses}
                                                        />
                                                    </GridItem>
                                                </GridContainer>
                                            )
                                        },
                                        {
                                            tabButton: "Appointments",
                                            tabIcon: EventIcon,
                                            tabContent: (
                                                <GridContainer justify="center">
                                                    <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
                                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                            <DatePicker style={{textAlign: 'center'}}
                                                                        autoOk
                                                                        variant="static"
                                                                        openTo="date"
                                                                        value={date}
                                                                        onChange={(date) => {
                                                                            changeDate(date);
                                                                            setFlipped(true)
                                                                        }}
                                                            />
                                                            <Button className={classes.formButton} hidden={flipped} onClick={() => setFlipped(!flipped)}>{appointmentButtonText}</Button>
                                                        </MuiPickersUtilsProvider>
                                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                            <TimePicker
                                                                autoOk
                                                                variant="static"
                                                                openTo="hours"
                                                                value={date}
                                                                onChange={changeDate}
                                                            />
                                                            <Button className={classes.formButton} hidden={!flipped} onClick={() => setFlipped(!flipped)}>{appointmentButtonText}</Button>
                                                        </MuiPickersUtilsProvider>
                                                    </ReactCardFlip>
                                                </GridContainer>
                                            )
                                        },
                                        {
                                            tabButton: "Contact",
                                            tabIcon: MailIcon,
                                            tabContent: (
                                                <GridContainer justify="center">
                                                    <GridItem xs={12} sm={12} md={4}>
                                                        <Button color="google">
                                                            <i
                                                                className={" fab fa-google-plus-square"}
                                                            />{" "}
                                                            Email Us
                                                        </Button>
                                                        <Button color="twitter">
                                                            <i
                                                                className={"fab fa-twitter"}
                                                            />{" "}
                                                            Connect with Twitter
                                                        </Button>
                                                        <Button color="facebook">
                                                            <i
                                                                className={" fab fa-facebook-square"}
                                                            />{" "}
                                                            Connect on Facebook
                                                        </Button>
                                                    </GridItem>
                                                </GridContainer>
                                            )
                                        }
                                    ]}
                                />
                            </GridItem>
                        </GridContainer>
                    </div>
                </div>
            </div>
        </div>
    );
}

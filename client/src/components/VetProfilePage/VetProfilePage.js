import React, {useEffect, useRef, useState} from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Camera from "@material-ui/icons/Camera";
import EventIcon from "@material-ui/icons/Event";
import MailIcon from "@material-ui/icons/Mail";

// Third Party components from https://www.creative-tim.com/
import Button from "../../material-ui-assets/components/CustomButtons/Button.js";
import GridContainer from "../../material-ui-assets/components/Grid/GridContainer.js";
import GridItem from "../../material-ui-assets/components/Grid/GridItem.js";
import NavPills from "../../material-ui-assets/components/NavPills/NavPills.js";
import Parallax from "../../material-ui-assets/components/Parallax/Parallax.js";

import styles from "../../material-ui-assets/jss/material-kit-react/views/profilePage.js";
import Header from "./Header/Header";
import HeaderLinks from "./Header/HeaderLinks";
import {addVetImageData, getVetById, receiveVet} from "../../actions";
import {useDispatch, useSelector} from "react-redux";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import CardMedia from "@material-ui/core/CardMedia";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import TimePickers from "./Booking/TimePickers";
import VideoConference from "../VideoConference/VideoConference";
import Booking from "./Booking/Booking";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles((theme) => Object.assign({}, styles, {
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    cardMedia: {paddingTop: '56.25%'}
}));

// EFFECTS: Renders the vet profile page
// REQUIRED PROPS: vet -- The vet object to be rendered
// LOCATION: /find/vets
export default function VetProfilePage({vet, auth, id}) {
    const classes = useStyles();
    const loggedInVet = useSelector(state => state.loggedInVet);
    const dispatch = useDispatch();
    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid
    );
    const [uploadDialogOpen, setUploadDialogOpen] = React.useState(false);
    const [photoUploadAction, setPhotoUploadAction] = React.useState(null);
    const [availabilities, SetAvailabilitiesOpen] = useState(false);
    const [VideoConferenceOpen, SetVideoConferenceOpen] = useState(false);
    const [preview, setPreview] = React.useState(null);
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    useEffect(() => {
        if (auth && id) {
            dispatch(getVetById(id));
        }
    }, [])
    const currentVet = vet ? vet : loggedInVet;

    const handlePreview = (e) => {
        if (e.target.files) {
            const reader = new FileReader();
            reader.addEventListener('load', (event) => {
                setPreview(event.target.result);
            });
            reader.readAsDataURL(e.target.files[0]);
        }
    }

    const handleClose = () => {
        setUploadDialogOpen(false);
        setPreview(null);
    };

    const handleSubmit = (e) => {
        if (preview) {
            dispatch(addVetImageData(photoUploadAction, preview));
        }
        handleClose();
    }

    const handleAddPhoto = (e) => {
        setPhotoUploadAction('PICTURE');
        setUploadDialogOpen(true);
    }

    const handleAddProfilePicture = (e) => {
        setPhotoUploadAction('PROFILE_PICTURE');
        setUploadDialogOpen(true);
    }

    const handleAvailabilities = (e) => {
        SetAvailabilitiesOpen(true);
    }

    const handleCloseAvailabilities = (e) => {
        SetAvailabilitiesOpen(false);
    }

    const myRef = useRef(null);

    const handleCloseAndSaveAvailabilities = () => {
        SetAvailabilitiesOpen(false);
        myRef.current.handleSubmission(id);
    }

        const startVideoConference = () => {
            SetVideoConferenceOpen(true)
        }

        const closeVideoConference = () => {
            SetVideoConferenceOpen(false)
        }

    if (!loggedInVet && !vet) {
        return (
            <div className={classes.spinner}>
                <LinearProgress />
            </div>
        )
    }

    return (
        <div>
            <Header
                color="transparent"
                brand="Tele Vet"
                rightLinks={<HeaderLinks auth={auth}
                                         id={currentVet._id ? currentVet._id : id}
                                         handleAddPhoto={handleAddPhoto}
                                         handleAddProfilePicture={handleAddProfilePicture}
                                         handleAvailabilities={handleAvailabilities}
                                         startVideoConference={startVideoConference}
                />}
                fixed
                changeColorOnScroll={{
                    height: 200,
                    color: "white"
                }}/>
            <Parallax small filter image={currentVet.coverPhoto}/>
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
                                            src={currentVet.profilePicture}
                                            style={{"max-width": "300px"}}
                                        /></div>
                                    <div className={classes.name}>
                                        <h3 className={classes.title}>{currentVet.businessName}</h3>
                                    </div>
                                </div>
                            </GridItem>
                        </GridContainer>
                        <div className={classes.description}>
                            <p>
                                {currentVet.description}
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
                                                        {currentVet.pictures.map((imgSrc, index) => {
                                                            if (index <= 2) {
                                                                return (<img
                                                                    alt="..."
                                                                    src={imgSrc}
                                                                    className={navImageClasses}
                                                                />)
                                                            }
                                                            return null;
                                                        })
                                                        }
                                                    </GridItem>
                                                    <GridItem xs={12} sm={12} md={4}>
                                                        {currentVet.pictures.map((imgSrc, index) => {
                                                            if (index > 2) {
                                                                return (<img
                                                                    alt="..."
                                                                    src={imgSrc}
                                                                    className={navImageClasses}
                                                                />)
                                                            } else {
                                                                return null;
                                                            }
                                                        })
                                                        }
                                                    </GridItem>
                                                </GridContainer>
                                            )
                                        },
                                        {
                                            tabButton: "Appointments",
                                            tabIcon: EventIcon,
                                            tabContent: (
                                                <GridContainer justify="center">
                                                    <Booking key1={currentVet.weeklyTimeBlocks}/>
                                                </GridContainer>
                                            )
                                        },
                                        {
                                            tabButton: "Contact",
                                            tabIcon: MailIcon,
                                            tabContent: (
                                                <GridContainer justify="center">
                                                    <GridItem xs={12} sm={12} md={4}>
                                                        <Button color="google" href={currentVet.email}>
                                                            <i
                                                                className={" fab fa-google-plus-square"}
                                                            />{" "}
                                                            Email Us
                                                        </Button>
                                                        <Button color="twitter" href={currentVet.twitter}>
                                                            <i
                                                                className={"fab fa-twitter"}
                                                            />{" "}
                                                            Connect with Twitter
                                                        </Button>
                                                        <Button color="facebook" href={currentVet.facebook}>
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
            <Dialog open={uploadDialogOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Upload a Photo</DialogTitle>
                <DialogContent>
                    <CardMedia
                        className={classes.cardMedia}
                        image={preview}
                        title={'preview'}
                    />
                    <DialogContentText>
                        Upload a new photo
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} color="primary">
                        Upload
                    </Button>
                    <Button color="primary"
                            variant="contained"
                            component="label"
                    >
                        Browse
                        <input
                            type="file"
                            style={{display: "none"}}
                            onChange={handlePreview}
                        />
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog fullScreen open={availabilities} onClose={handleCloseAvailabilities}
            >
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleCloseAvailabilities}
                                    aria-label="close">
                            <CloseIcon/>
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Edit Hours of Operation
                        </Typography>
                        <Button autoFocus
                                color="inherit"
                                onClick={handleCloseAndSaveAvailabilities}
                        >
                            save
                        </Button>
                    </Toolbar>
                </AppBar>
                <TimePickers ref={myRef} />
            </Dialog>
            <Dialog fullScreen open={VideoConferenceOpen} onClose={closeVideoConference}
            >
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={closeVideoConference}
                                    aria-label="close">
                            <CloseIcon/>
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Video Conference
                        </Typography>
                        <Button autoFocus color="inherit" onClick={closeVideoConference}>
                            Leave Session
                        </Button>
                    </Toolbar>
                </AppBar>
                <VideoConference/>
            </Dialog>
        </div>
    );
}

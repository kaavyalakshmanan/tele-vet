import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    input: {
        display: 'none',
    },
}));

export default function UploadButtons() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
            />
            <label htmlFor="contained-button-file">
                <Button variant="contained" color="primary" component="span">
                    Upload
                </Button>
            </label>

            <input accept="image/*" className={classes.input} id="icon-button-file" type="file"/>
            <label htmlFor="icon-button-file">
                <IconButton color="primary" aria-label="upload picture" component="span">
                    <PhotoCamera/>
                </IconButton>
            </label>
        </div>
    );
}

//{
//             username:"ashawarma",
//             password: "cpsc436i",
//             firstName: "Atiya",
//             lastName: "Shawarma",
//             description: "Atiya is a passionate dog owner and healer. She specialises in large canines, although she welcomes any size at her Kitsilano clinic. Atiya earned a practicing doctorate in canine health with focus in heart surgery at the university of saskatchewan. She has been operating her own clinic on arbutus street and broadway since 1971",
//             website: "www.kitsilanok9.com",
//             email: "AtiyaShawarma@kitsilanok9.com",
//             phone: "604-913-4043",
//             businessAddress: "3000 west broadway",
//             city: "Vancouver",
//             postalCode: "v6r2r9",
//             specialization: "canines",
//             acceptEmergencyCalls: true,
//             certificates: [{"type":"Buffer","data":[100,97,116,97,58,14,79,8,113,97,65,43,57,55,89,69,88,51,66,101,70,86,112,121,112,121,121,121,80,81,104]}],
//             businessNumber: 123456789,
//             profilePicture: {"type":"Buffer","data":[100,97,116,97,58,14,79,8,113,97,65,43,57,55,89,69,88,51,66,101,70,86,112,121,112,121,121,121,80,81,104]},
//             carouselPictures: [{"type":"Buffer","data":[100,97,116,97,58,14,79,8,113,97,65,43,57,55,89,69,88,51,66,101,70,86,112,121,112,121,121,121,80,81,104]}],
//             reviews: ["Dr. Shawarma is the best! She installed a mechanical heart for my german shepperd 5 years ago, and it has been healthy and happy even since!"],
//             rating: 5,
//             facebook: "https://www.facebook.com/Veterinarian-Community-366567727022295",
//             instagram: "https://www.instagram.com/explore/tags/veterinarian/?hl=en",
//             socialMediaSpare1: "https://www.snapchat.com/add/drbelindathevet",
//             socialMediaSpare2: "",
//             socialMediaSpare3: "",
//             socialMediaSpare4: "",
//             socialMediaSpare5: "",
//             weeklyTimeBlocks: [[""]],
//             scheduledAppointments: [""],
//             sundayOpen: "2014-08-18T08:00:00",
//             sundayClose: "2014-08-18T18:00:00",
//             mondayOpen: "2014-08-18T08:00:00",
//             mondayClose: "2014-08-18T18:00:00",
//             tuesdayOpen: "2014-08-18T08:00:00",
//             tuesdayClose: "2014-08-18T18:00:00",
//             wednesdayOpen: "2014-08-18T08:00:00",
//             wednesdayClose: "2014-08-18T18:00:00",
//             thursdayOpen: "2014-08-18T08:00:00",
//             thursdayClose: "2014-08-18T18:00:00",
//             fridayOpen: "2014-08-18T08:00:00",
//             fridayClose: "2014-08-18T18:00:00",
//             saturdayOpen: "2014-08-18T08:00:00",
//             saturdayClose: "2014-08-18T18:00:00",
//             spareField1: "",
//             spareField2: [""],
//             spareField3: [[""]],
//             spareField4: true,
//             spareField5: 12345
//     }
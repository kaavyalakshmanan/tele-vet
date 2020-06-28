import React from "react";
import EditProfileForm from "./EditForm";
import EditAvatar from "./EditAvatar";
import UploadButton from "./UploadButton";
import CarouselSection from "../ViewPage/CarouselSection";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// import DateFnsUtils from '@date-io/date-fns';
import Description from "../ViewPage/Description";
import FlipMain from "../bookingSystem/FlipMain";
import {Link} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        alignItems: "center",
        alignContent: "center"
    }
}));


export default function EditPage() {
    const classes = useStyles();


    return (
        <div>
            <Grid container spacing={3}>
                <Grid container spacing={1} xs={4}>
                    <Grid item xs={12}>
                        <EditAvatar/>
                        <UploadButton id="editProfilePicture"/>
                        <div className="editCarousel">
                            <CarouselSection/>
                        </div>
                        <UploadButton id="editCarouselButton"/>
                    </Grid>
                </Grid>
                <Grid container spacing={1} item xs={8}>
                    <Grid item xs={12}>
                        <EditProfileForm/>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}


// <EditProfileForm/>
// <EditAvatar/>
// <UploadButton id="editProfilePicture"/>
// <div className="editCarousel">
//     <CarouselSection/>
// </div>
// <UploadButton id="editCarouselButton"/>
// </div>
// )
// }
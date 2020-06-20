import React from "react";
import EditProfileForm from "./EditForm";
import EditAvatar from "./EditAvatar";
import UploadButton from "./UploadButton";
import CarouselSection from "../ViewPage/CarouselSection";

export default function EditPage(){

    return(
        <div className= "editProfilePage">
            <EditProfileForm/>
            <EditAvatar/>
            <UploadButton id="editProfilePicture"/>
            <div className="editCarousel">
                <CarouselSection/>
            </div>
            <p/>
            <p/>
            <p/>
            <p/>
            <p/>
            <p/>
            <p/>
            <p/>
            <UploadButton id="editCarouselButton"/>
        </div>
    )
}
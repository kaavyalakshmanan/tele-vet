import React from 'react';
import { connect } from "react-redux";
import Gallery from "react-photo-gallery";
import Button from "@material-ui/core/Button";
import {DropzoneDialog} from "material-ui-dropzone";
import {addImage, setPhotoDropzoneOpen } from "../../../actions";

class PhotoGallery extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('props')
        console.log(this.props);
        return (
            <div>
                <Gallery photos={this.props.images.list} direction={"column"}/>
                <Button variant="contained" color="primary" onClick={() => this.props.setPhotoDropzoneOpen(true)}>
                    Add Image
                </Button>

                <DropzoneDialog
                    acceptedFiles={['image/*']}
                    cancelButtonText={"cancel"}
                    submitButtonText={"submit"}
                    maxFileSize={5000000}
                    open={this.props.dropzoneOpen}
                    onClose={() => this.props.setPhotoDropzoneOpen(false)}
                    onSave={(images) => {
                        console.log('Files:', images);
                        images.forEach((image) => {
                            this.props.addImage(image);
                        })
                        this.props.setPhotoDropzoneOpen(false)
                    }}
                    showPreviews={true}
                    showFileNamesInPreview={true}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        images: state.images,
        dropzoneOpen: state.photoDropzoneOpen
    }
};

const mapDispatchToProps = dispatch => ({
    addImage: image => {
        dispatch(addImage(image));
    },
    setPhotoDropzoneOpen: open => {
        dispatch(setPhotoDropzoneOpen(open))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoGallery);



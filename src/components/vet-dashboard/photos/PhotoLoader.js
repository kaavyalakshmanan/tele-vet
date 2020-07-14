import React, {Component} from 'react';
import { connect } from "react-redux";
import {DropzoneArea} from 'material-ui-dropzone';
import {addImage} from "../../../actions";

class PhotoLoader extends Component{
    render(){
        return (
            <DropzoneArea/>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addImage: image => {
        dispatch(addImage(image));
    },
});

const mapStateToProps = state => {
    return {
        images: state.images
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoLoader);

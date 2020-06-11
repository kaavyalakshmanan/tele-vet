import React, {Component} from 'react';
import { connect } from "react-redux";
import Gallery from "react-photo-gallery";

const initialImages = {
    images: [
        {
            src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
            width: 4,
            height: 3
        },
        {
            src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
            width: 1,
            height: 1
        },
        {
            src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
            width: 3,
            height: 4
        },
        {
            src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
            width: 3,
            height: 4
        },
        {
            src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
            width: 3,
            height: 4
        }
    ]
}

class PhotoGallery extends React.Component {
    render() {
        console.log('props')
        console.log(this.props);
        return (
            <Gallery photos={this.props.images.list}/>
        )
    }
}

const mapStateToProps = state => {
    return {
        images: state.images
    }
};

export default connect(mapStateToProps, null)(PhotoGallery);



import React from 'react';
import {connect} from "react-redux";
import DetailsButton from "./DetailsButton";

class Message extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <li className="appointment" key={this.props.message.key}>
                <div className="appointment-container">
                    <img src={ this.props.message.avatarPath } className="user-avatar" alt=""/>
                    <div className="user-name">{ this.props.message.name }</div>
                    <div className="user-tag">{ this.props.message.tag }</div>
                    <div className="tweet-text">{ this.props.message.msg }</div>
                    <div className="tweet-time">{ this.props.message.time }</div>
                    <DetailsButton message={this.props.message}/>
                </div>
            </li>
        )
    }
}

const mapStateToProps = (state) => {
    return { inputs: state.inputs };
}

export default connect(mapStateToProps, null)(Message);
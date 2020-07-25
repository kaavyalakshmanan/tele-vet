import React from 'react';
import { connect } from "react-redux";
import Contacts from "./Contacts";
import Inbox from "./Inbox";
import {addMessage, selectInbox} from "../../../actions";

class Messages extends React.Component {
    render() {
        if (this.props.inbox) {
            return <Inbox inbox={this.props.inbox}
                          onSend={this.props.addMessage}/>
        }
        return <Contacts contacts = {this.props.contacts.contactList} onclick={contact => {
            this.props.selectInbox(contact);
        }}/>
    }
}

const mapDispatchToProps = dispatch => ({
    selectInbox: inbox => {
        dispatch(selectInbox(inbox));
    },
    addMessage: message => {
        dispatch(addMessage(message));
    }
});

const mapStateToProps = (state) => {
    return {
        contacts: state.contacts,
        inbox: state.inbox
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
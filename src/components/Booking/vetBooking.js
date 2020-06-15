import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    StatusBar
} from 'react-native';
// import Commonstyle from '../../components/Commonstyle'
import {Calendar} from 'react-native-calendars';
// import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import Commonstyle from ""
export default class vetBooking extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.onDayPress = this.onDayPress.bind(this);
    }

    onDayPress(day) {
        this.setState({
            selected: day.dateString
        });
        this.props.navigation.navigate('Slot', { bookingDate : day })
    }

    // https://flaviocopes.com/react-show-different-component-on-click/

    _onPressBack(){
        const {goBack} = this.props.navigation
        goBack()
    }

    render() {
        return (
        //     <View style={styles.container}>
        //     <StatusBar barStyle="light-content"/>
        //     <View style={Commonstyle.toolbar}>
        //     <TouchableOpacity onPress={() => this._onPressBack() }><Text style={Commonstyle.toolbarButton}>Back</Text></TouchableOpacity>
        // <Text style={Commonstyle.toolbarTitle}/>
        //     <Text style={Commonstyle.toolbarButton}/>
        //     </View>
            <Calendar
         onDayPress={this.onDayPress}
        style={styles.calendar}
        hideExtraDays
         markedDates={{[this.state.selected]: {selected: true}}}
         theme={{
            selectedDayBackgroundColor: 'green',
                todayTextColor: 'green',
                arrowColor: 'green',
        }}
        />
        // </View>
    );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    calendar: {
        borderTopWidth: 1,
        paddingTop: 5,
        borderBottomWidth: 1,
        borderColor: '#eee',
        height: 350
    }
});


//https://www.npmjs.com/package/react-native-calendars

//https://codesandbox.io/s/react-redux-todo-list-cdwz0?file=/reducers/todos.js
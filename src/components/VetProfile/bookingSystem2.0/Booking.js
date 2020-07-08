import ReactCardFlip from 'react-card-flip';
import DateFnsUtils from "@date-io/date-fns";
import {DatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import React from "react";

class Booking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFlipped: false ,
            selectedDate: "",
            selectedWeekday: [],
            // mon: props.key1.monday,
            // tue: props.week.tuesday,
            // wed: props.week.wednesday,
            // thu: props.week.thursday,
            // fri: props.week.friday,
            // sat: props.week.saturday,
            // sun: props.week.sunday
        };
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick= (e) => {
        // e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
        this.setState({selectedDate: e})
        if ((String(e).substring(0,3)) === "Mon") {this.setState({selectedWeekday: this.props.key1.monday})}
        if ((String(e).substring(0,3)) === "Tue") {this.setState({selectedWeekday: this.props.key1.tuesday})}
        if ((String(e).substring(0,3)) === "Wed") {this.setState({selectedWeekday: this.props.key1.wednesday})}
        if ((String(e).substring(0,3)) === "Thu") {this.setState({selectedWeekday: this.props.key1.thursday})}
        if ((String(e).substring(0,3)) === "Fri") {this.setState({selectedWeekday: this.props.key1.friday})}
        if ((String(e).substring(0,3)) === "Sat") {this.setState({selectedWeekday: this.props.key1.saturday})}
        if ((String(e).substring(0,3)) === "Sun") {this.setState({selectedWeekday: this.props.key1.sunday})}
        console.log(this.props.key1)
    }

    handleTimeSelection(e, item){
        // e.preventDefault();
        console.log(this.selectedDate + item)
    }

    render() {
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker style={{textAlign: 'center'}}
                        autoOk
                        // orientation="landscape"
                        variant="static"
                        openTo="date"
                        value={this.selectedDate}
                        onChange={(e) => {this.handleClick(e)}}
                    />
                </MuiPickersUtilsProvider>

                <div>
                    <button onClick={this.handleClick}>Click to flip Back</button>
                    <ul>
                        {this.state.selectedWeekday.map((item) => (
                            <button id="submitButton" onClick={(e, item) => this.handleTimeSelection(e, item)}>item</button>
                            // <ItemBlock key3={this.selectedDate} key1={item}/>
                        ))}
                    </ul>
                </div>
            </ReactCardFlip>
        )
    }
}

export default Booking
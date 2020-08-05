import ReactCardFlip from 'react-card-flip';
import DateFnsUtils from "@date-io/date-fns";
import {DatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import React from "react";
import "../../../css/Booking.css"
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

class Booking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFlipped: false,
            selectedDate: "",
            selectedWeekday: ["Loading...please wait!"],
            popup: false
            // mon: props.key1.monday,
            // tue: props.week.tuesday,
            // wed: props.week.wednesday,
            // thu: props.week.thursday,
            // fri: props.week.friday,
            // sat: props.week.saturday,
            // sun: props.week.sunday
        };
        // this.handleClick = this.handleClick.bind(this);
    }


    handleClick = (e) => {
        // e.preventDefault();
        this.setState(prevState => ({isFlipped: !prevState.isFlipped}));
        this.setState({selectedDate: e})
        if ((String(e).substring(0, 3)) === "Mon") {
            this.setState({selectedWeekday: this.props.key1[0]})
        }
        if ((String(e).substring(0, 3)) === "Tue") {
            this.setState({selectedWeekday: this.props.key1[1]})
        }
        if ((String(e).substring(0, 3)) === "Wed") {
            this.setState({selectedWeekday: this.props.key1[2]})
        }
        if ((String(e).substring(0, 3)) === "Thu") {
            this.setState({selectedWeekday: this.props.key1[3]})
        }
        if ((String(e).substring(0, 3)) === "Fri") {
            this.setState({selectedWeekday: this.props.key1[4]})
        }
        if ((String(e).substring(0, 3)) === "Sat") {
            this.setState({selectedWeekday: this.props.key1[5]})
        }
        if ((String(e).substring(0, 3)) === "Sun") {
            this.setState({selectedWeekday: this.props.key1[6]})
        }
    }

    handleTimeSelection(e, item) {
        this.setState({popup: true})
        // e.preventDefault();
        // console.log(this.selectedDate + item)
        //Here you must pass props.key0 and props.key2
    }

    handleClose = () => {
        this.setState({popup: false})
    }

    render() {
        const {selectedWeekday} = this.state;
        console.log("selectedWeekday is", selectedWeekday)
        return (
            <div>
                <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal" style={{maxWidth: "100px"}}>
                    <div className="cardFlip">
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <DatePicker style={{textAlign: 'center'}}
                                        autoOk
                                // orientation="landscape"
                                        variant="static"
                                        openTo="date"
                                        value={this.selectedDate}
                                        onChange={(e) => {
                                            this.handleClick(e)
                                        }}
                            />
                        </MuiPickersUtilsProvider>
                    </div>
                    <div className="cardFlip">
                        <div className="timeMenu">
                            <ul className="timeMenu">
                                <button onClick={this.handleClick}>Return</button>
                                {selectedWeekday.map(item => (
                                    <button
                                        onClick={(e, item) => this.handleTimeSelection(e, item)}>{item}</button>
                                    //https://dev.to/skptricks/create-simple-popup-example-in-react-application-5g7f
                                ))}
                            </ul>
                        </div>
                    </div>
                </ReactCardFlip>
                <Dialog open={this.state.popup} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Appointment</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Appointments can be changed by calling the clinic one business day before video conference time. Your account will be charged $40 upon confirmation.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleClose} color="primary">
                            Confirm
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default Booking
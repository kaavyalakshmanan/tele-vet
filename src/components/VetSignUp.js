import React from 'react';
import "../css/App.css";
// import ValidatedLoginForm from "./ValidatedLoginForm";

class VetSignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_name: "",
            clinic_name: "",
            address: "",
            password: "",
            email: "",
            phone: ""
          };
      }
    render() {
      
        const { user_name, clinic_name, address, email, password, phone } = this.state;
        return (
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="user_name">Name</label>
            <input
              name="user_name"
              type="text"
              placeholder="Enter your full name"
              value={user_name}
              onChange={this.handleChange}
            />
             <label htmlFor="clinic_name">Clinic Name</label>
            <input
              name="clinic_name"
              type="text"
              placeholder="Enter your clinic name"
              value={clinic_name}
              onChange={this.handleChange}
            />
             <label htmlFor="address">Clinic Address</label>
            <input
              name="address"
              type="text"
              placeholder="Enter your clinic name"
              value={address}
              onChange={this.handleChange}
            />
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={this.handleChange}
            />
            <label htmlFor="email">Password</label>
              <input
              name="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={this.handleChange}
            />
            <label htmlFor="phone">Phone Number</label>
              <input
              name="phone"
              type="password"
              placeholder="Enter your phone number"
              value={phone}
              onChange={this.handleChange}
            />
            <button type="submit">Login</button>
          </form>
        );
}
handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = event => {
    console.log("Submitting");
    console.log(this.state);
  };
}


export default VetSignUp;
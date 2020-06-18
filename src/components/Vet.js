import React from 'react';
import "./styles.css";
// import ValidatedLoginForm from "./ValidatedLoginForm";

class Vet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          user_name: "",
          address: "",
          password: "",
          email: ""
        };
      }
    render() {
      
        const { user_name, address, email, password } = this.state;
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
             <label htmlFor="user_name">Address</label>
            <input
              name="address"
              type="text"
              placeholder="Enter your address"
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


export default Vet;
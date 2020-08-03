import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import PetSignUp from './PetSignUp';
import SignUpFooter from './SignUpFooter'
import Container from '@material-ui/core/Container';
import { useDispatch, useSelector } from "react-redux";


import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import {register} from '../../actions/authActions';

import {addData} from '../../actions/users';


const TYPE = 'REQUEST_USER';


class SignUp extends Component {

    state = {
        name: '',
        username: '',
        email: '',
        password: '',
        // Show a message if error (eg user hasn't provided all fields)
        msg: null
      }
    
      static propTypes = {
        isAuthenticated: PropTypes.bool,
        // error: PropTypes.object.isRequired,
        // register: PropTypes.func.isRequired,
        // clearErrors: PropTypes.func.isRequired
    
        register: PropTypes.func.isRequired
    };
    
    componentDidUpdate(prevProps) {
        const {error, isAuthenticated} = this.props;
        if (error !== prevProps.error) {
            // Check for register error
            if (error.id === 'REGISTER_FAIL') {
                this.setState({msg: error.msg.msg});
            } else {
                this.setState({msg: null});
            }
        }
    }

    handleChange = e => {
      console.log("setting new state")
        this.setState({ [e.target.name]: e.target.value});
      };
    
    handleSubmit = (e) => {
      console.log("about to submit")
      e.preventDefault();

      const {name, username, email, password} = this.state;

      // Create user object
      const newUser = {
          name, username, email, password
      };

      this.props.register(newUser);
  };
    
    
    render() {

        return(
            <div>
                <form  onSubmit={this.handleSubmit}>

              {/* <Container component="main" maxWidth="xs"> */}
           
            {/* <PetSignUp />  */}
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                  autoComplete="name"
                  name="name"
                  variant="outlined"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                  onChange={(e) => this.handleChange(e)}
                  />
                </Grid>

                <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  onChange={this.handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={this.handleChange}
                  />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={this.handleChange}
                />
              </Grid>
            {/* </PetSignUp> */}
            </Grid>

         

            <SignUpFooter />
            {/* </Container> */}
            

        </form>
            </div>
 
        )
    }
}

const mapStateToProps = state => ({
    // auth and error coming from root reducer
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
  })

export default connect(mapStateToProps, { register})(SignUp)
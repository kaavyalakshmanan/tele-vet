import React, {useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useDispatch} from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from '@material-ui/lab/Alert';
import {createNewUser} from "../../actions";
import {getURLParams} from "../../utils/utils";


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://tele-vet.herokuapp.com/">
        TeleVet
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

// EFFECTS: Renders the User Sign Up Page
// LOCATION: /PetSignUp
// CREDIT: This component is based on sample code from https://material-ui.com/
export default function SignUp() {
  const classes = useStyles();
  const urlParams = getURLParams(window.location.href);
  const [password, setPassword] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [registerFailWarning, setRegisterFailWarning] = React.useState(urlParams.registerFailed);
  const [registerSuccessFlag, setRegisterSuccessFlag] = React.useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    console.log("clicked submit button")
    e.preventDefault();
    dispatch(createNewUser(email, username, password));
  }

  return (
      <div>
        <Container component="main" maxWidth="xs">
          <CssBaseline/>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon/>
            </Avatar>
            <Typography component="h1" variant="h5">
              Pet Owner Sign up
            </Typography>

            <form className={classes.form} noValidate>

              <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={(e) => {
                      setEmail(e.target.value)
                    }}
                />
              </Grid>
              <br></br>

              <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    onChange={(e) => {
                      setUsername(e.target.value)
                    }}
                />
              </Grid>
              <br></br>

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
                    onChange={(e) => {
                      setPassword(e.target.value)
                    }}
                />
              </Grid>
              <br></br>

              <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={handleSubmit}
              >
                Sign Up
              </Button>

              <Grid container justify="flex-end">
                <Grid item>
                  <Link href="/login/user" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={5}>
            <Copyright/>
          </Box>
        </Container>

        <Snackbar open={registerSuccessFlag} autoHideDuration={6000} onClose={() => setRegisterSuccessFlag(false)}>
          <Alert onClose={() => setRegisterSuccessFlag(false)} severity="success">
            Registration was successful! Please wait while we redirect you to login page.
          </Alert>
        </Snackbar>
        <Snackbar open={registerFailWarning} autoHideDuration={6000} onClose={() => setRegisterFailWarning(false)}>
          <Alert onClose={() => setRegisterFailWarning(false)} severity="error">
            Oops, looks like you're already registered.
          </Alert>
        </Snackbar>
      </div>
  );
}
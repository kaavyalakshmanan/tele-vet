import React, {useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Copyright() {
  return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          TeleVet
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(http://bestfriendsvethospital.com/columbus_petvet/wp-content/uploads/2020/03/141479838_s.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  snackbarStyleViaNestedContent: {
    backgroundColor: "red",
    color: "black"
  }
}));

// EFFECTS: Renders the Sign In Page
// LOCATION: /start
// CREDIT: This component is based on sample code from https://material-ui.com/
export default function SignIn() {
  const classes = useStyles();
  const urlParams = new URLSearchParams(window.location.search);
  const loginFailed = urlParams.get('loginFailed');
  const [password, setPassword] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [loginFailWarning, setLoginFailWarning] = React.useState(loginFailed);
  const [loginSuccessFlag, setLoginSuccessFlag] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoginSuccessFlag(true);
    window.location.replace(`/login?username=${username}&password=${password}`);
  }

  const closeSnackbar = (e) => {
    console.log('close snackbar');
    setLoginFailWarning(false);
  }

  return (
      <div>
        <Grid container component="main" className={classes.root}>
          <CssBaseline />
          <Grid item xs={false} sm={4} md={7} className={classes.image} />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <form className={classes.form} noValidate>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="email"
                    autoFocus
                    onChange={(e) => { setUsername(e.target.value) }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={(e) => { setPassword(e.target.value) }}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={handleSubmit}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item>
                    <Link href="PetSignUp" variant="body2">
                      {"Don't have an account? Sign Up as a Pet Owner"}
                    </Link>
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid item xs>
                    <Link href="" variant="body2">
                    </Link>
                  </Grid>
                </Grid>
                <Box mt={5}>
                  <Copyright />
                </Box>
              </form>
            </div>
          </Grid>
        </Grid>
        <Snackbar open={loginSuccessFlag} autoHideDuration={6000} onClose={() => setLoginSuccessFlag(false)} className={classes.snackbarStyleViaNestedContent}>
          <Alert onClose={ () => setLoginSuccessFlag(false) } severity="success">
            User Found! Please wait while we load the dashboard.
          </Alert>
        </Snackbar>
        <Snackbar open={loginFailWarning} autoHideDuration={6000} onClose={ closeSnackbar }>
          <Alert severity="error" onClose={ closeSnackbar } severity="error">
            Incorrect username or password.
          </Alert>
        </Snackbar>
      </div>
  );
}
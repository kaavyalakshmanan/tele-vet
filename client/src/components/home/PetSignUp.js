import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';


import { withStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';

import SignUp from './SignUp';




// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         TeleVet
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const styles = theme => ({
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
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
    submit: {
    margin: theme.spacing(3, 0, 2),
  }
});

class PetSignUp extends Component {

  render() {
    const { classes } = this.props;
    return(

      <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
          Pet Owner Sign up
          </Typography>
          <br></br>

        
            <Grid container spacing={2}>
              <SignUp />

            </Grid>

      </div>

      </Container>
      </div>
    )
  }
    
}

export default withStyles(styles)(PetSignUp);
import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { withStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

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

const   styles = theme => ({
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

class SignUpFooter extends Component {

  

    render() {
        const { classes } = this.props;
        return(
            <div>
            <Button
            // onClick={() => handleSubmit}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
        </Button>

        <Grid container justify="flex-end">
           <Grid item>
             <Link href="/login" variant="body2">
               Already have an account? Sign in
             </Link>
           </Grid>
        </Grid>

        <Box mt={5}>
         <Copyright />
      </Box>
        </div>
        )
    }

   
}

export default withStyles(styles)(SignUpFooter);
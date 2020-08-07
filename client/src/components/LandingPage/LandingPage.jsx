import React, {useEffect} from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import ProductDescription from "./Sections/ProductDescription.jsx";
import WorkWithUs from "./Sections/WorkWithUs.jsx";

// Third Party components from https://www.creative-tim.com/
import GridContainer from "../../material-ui-assets/components/Grid/GridContainer.js";
import GridItem from "../../material-ui-assets/components/Grid/GridItem.js";
import Button from "../../material-ui-assets/components/CustomButtons/Button.js";
import Parallax from "../../material-ui-assets/components/Parallax/Parallax.js";
// Third party styles from https://www.creative-tim.com/
import styles from "../../material-ui-assets/jss/material-kit-react/views/landingPage.js";
import {useDispatch, useSelector} from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import {setEmailStatusFlag} from "../../actions";

const useStyles = makeStyles(styles);

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function getEmailFailedStatus(emailStatus) {
  return emailStatus === 'failed';
}

function getEmailSuccessStatus(emailStatus) {
  return emailStatus === 'success';
}

// EFFECTS: Renders the landing page
// REQUIRED PROPS: None
// LOCATION: /
// CREDIT: This component is based on the free material-kit-ui from https://www.creative-tim.com/
export default function LandingPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const emailStatus = useSelector(state => state.emailStatus);
  const [emailFailedFlag, setEmailFailedFlag] = React.useState(getEmailFailedStatus(emailStatus));
  const [emailSuccessFlag, setEmailSuccessFlag] = React.useState(getEmailSuccessStatus(emailStatus));

  useEffect(() => {
    setEmailFailedFlag(getEmailFailedStatus(emailStatus));
    setEmailSuccessFlag(getEmailSuccessStatus(emailStatus));
  });

  const closeSnackBar = () => {
    dispatch(setEmailStatusFlag(null));
  }

  return (
    <div>
      <Parallax filter image={require("../../material-ui-assets/img/vet/cute_puppy_cover.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Your Pet's Health Starts Here.</h1>
              <h4>
                Your pet needs the best care possible. We know that.
                  And you need to find the best values in your area.
                  Tele-vet is here to connect you with more vet options.
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
                href="/find/vets"
              >
                <i className="fas fa-play" />
                Find Vets in your area
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductDescription />
          <WorkWithUs />
        </div>
      </div>
      <Snackbar open={emailSuccessFlag} autoHideDuration={6000} onClose={closeSnackBar}>
        <Alert onClose={closeSnackBar} severity="success">
          Your registration request was sent successfully!
        </Alert>
      </Snackbar>
      <Snackbar open={emailFailedFlag} autoHideDuration={6000} onClose={closeSnackBar}>
        <Alert onClose={closeSnackBar} severity="error">
          Oops, there was an issue sending your request.
        </Alert>
      </Snackbar>
    </div>
  );
}

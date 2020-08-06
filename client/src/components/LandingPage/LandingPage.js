import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import ProductDescription from "./Sections/ProductDescription.js";
import WorkWithUs from "./Sections/WorkWithUs.js";

// Third Party components from https://www.creative-tim.com/
import GridContainer from "../../material-ui-assets/components/Grid/GridContainer.js";
import GridItem from "../../material-ui-assets/components/Grid/GridItem.js";
import Button from "../../material-ui-assets/components/CustomButtons/Button.js";
import Parallax from "../../material-ui-assets/components/Parallax/Parallax.js";
// Third party styles from https://www.creative-tim.com/
import styles from "../../material-ui-assets/jss/material-kit-react/views/landingPage.js";

const useStyles = makeStyles(styles);

// EFFECTS: Renders the landing page
// REQUIRED PROPS: None
// LOCATION: /
// CREDIT: This component is based on the free material-kit-ui from https://www.creative-tim.com/
export default function LandingPage() {
  const classes = useStyles();
  return (
    <div>
      <Parallax filter image={require("../../material-ui-assets/img/vet/cute_puppy_cover.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Your Pets health starts here.</h1>
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
    </div>
  );
}

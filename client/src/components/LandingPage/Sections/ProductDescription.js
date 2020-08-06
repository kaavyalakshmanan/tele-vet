import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";

// Third Party components from https://www.creative-tim.com/
import GridItem from "../../../material-ui-assets/components/Grid/GridItem.js";
import InfoArea from "../../../material-ui-assets/components/InfoArea/InfoArea.js";
import GridContainer from "../../../material-ui-assets/components/Grid/GridContainer";
// Third party styles from https://www.creative-tim.com/
import styles from "../../../material-ui-assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

// EFFECTS: Renders a the product description section of the Landing Page component
// CREDIT: Based on a free material-kit-react template from https://www.creative-tim.com/
export default function ProductDescription() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Let{"'"}s talk product</h2>
          <h5 className={classes.description}>
            blah blah blah. What do we do ...
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Video Conferencing"
              description="Meet with your vet remotely at a time and place convenient for you"
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Verified Users"
              description="Our vets are all licensed, vetted, and verified by our team."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Secure"
              description="Share information with your vet worry free with our secure platform."
              icon={Fingerprint}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

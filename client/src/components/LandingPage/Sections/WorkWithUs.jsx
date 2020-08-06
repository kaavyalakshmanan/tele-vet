import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "../../../material-ui-assets/components/Grid/GridContainer.js";
import GridItem from "../../../material-ui-assets/components/Grid/GridItem.js";
import CustomInput from "../../../material-ui-assets/components/CustomInput/CustomInput.js";
import Button from "../../../material-ui-assets/components/CustomButtons/Button.js";
// Third party styles from https://www.creative-tim.com/
import styles from "../../../material-ui-assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import {sendEmail} from "../../../actions/email";
import TextField from "@material-ui/core/TextField";
import {useDispatch} from "react-redux";

const useStyles = makeStyles(styles);

// EFFECTS: Renders a the work with us of the Landing Page component
// CREDIT: Based on a free material-kit-react template from https://www.creative-tim.com/
export default function WorkWithUs() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [msg, setMsg] = React.useState('');

  const handleSendEmail = () => {
    console.log('sending Email');
    dispatch(sendEmail(JSON.stringify({
      name: name,
      email: email,
      message: msg
    })));
  }

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Work with us</h2>
          <h4 className={classes.description}>
            Are you a licensed veterinarian that is interested in working with us? Drop us your contact information
            and we will be in touch about our verification process.
          </h4>
          <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Name"
                  id="name"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps = {{
                    onChange: (e) => { setName(e.target.value)}
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Email"
                  id="email"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps = {{
                    onChange: (e) => { setEmail(e.target.value)}
                  }}
                />
              </GridItem>
              <CustomInput
                labelText="Your Message"
                id="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea
                }}
                inputProps={{
                  multiline: true,
                  rows: 5
                }}
                inputProps = {{
                  onChange: (e) => { setMsg(e.target.value)}
                }}              />
              <GridItem xs={12} sm={12} md={4}>
                <Button color="primary" onClick={handleSendEmail}>Send Message</Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}

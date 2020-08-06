import { containerFluid } from "third-party-assets-material-ui/jss/components-react.js";

import imagesStyle from "third-party-assets-material-ui/jss/components-react/imagesStyles.js";

const exampleStyle = {
  section: {
    padding: "70px 0"
  },
  container: {
    ...containerFluid,
    textAlign: "center !important"
  },
  ...imagesStyle,
  link: {
    textDecoration: "none"
  }
};

export default exampleStyle;

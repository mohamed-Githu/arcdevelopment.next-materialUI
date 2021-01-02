import React from "react";
import useStyles from "./arrow-button.styles";

import Button from "@material-ui/core/Button";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const ArrowButton = ({ children, ...additionalProps }) => {
  const classes = useStyles();

  return (
    <Button variant="outlined" {...additionalProps} className={classes.button} >
      {children} <ArrowForwardIcon className={classes.arrow} />
    </Button>
  );
};

export default ArrowButton;

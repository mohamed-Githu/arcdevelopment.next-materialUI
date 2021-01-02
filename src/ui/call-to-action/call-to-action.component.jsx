import React from "react";
import useStyles from "./call-to-action.styles";

import Link from "../../Link";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import ArrowButton from "../arrow-button/arrow-button.component";
import Button from "@material-ui/core/Button";

const CallToAction = ({ ...styles }) => {
  const classes = useStyles();

  return (
    <Grid container {...styles} className={classes.container}>
      <Grid item>
        <Grid container className={classes.textContainer}>
          <Typography variant="h2">
            Simple Software. <br /> Revolutionary Results.
          </Typography>
          <Typography variant="subtitle2">
            Take advantage of the 21st Century
          </Typography>
          <ArrowButton
            style={{
              padding: 5,
              fontSize: "0.7rem",
              height: 35,
              width: "auto",
            }}
            component={Link}
            to="/revolution"
          >
            Learn More
          </ArrowButton>
        </Grid>
      </Grid>
      <Grid item className={classes.estimateContainer}>
        <Button
          variant="contained"
          className={classes.estimateButton}
          component={Link}
          to="/estimate"
        >
          Free Estimate
        </Button>
      </Grid>
    </Grid>
  );
};

export default CallToAction;

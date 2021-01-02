import React from "react";
import useStyles from "./services-nav.styles";
import Link from "../../Link";

import { Grid, IconButton, Hidden } from "@material-ui/core";

import forwardArrow from "../../../assets/forwardArrow.svg";
import backwardArrow from "../../../assets/backArrow.svg";
import TextWrapper from "../text-wrapper/text-wrapper.component";

const ServicesNav = ({ backward, forward, body }) => {
  const classes = useStyles();

  return (
    <Grid container direction="row" className={classes.mainContainer}>
      <Hidden mdDown>
        <Grid item component={Link} to={backward}>
          <IconButton
            style={{ marginTop: "0.5em", backgroundColor: "transparent" }}
          >
            <img src={backwardArrow} alt={backward.replace("/", "")} />
          </IconButton>
        </Grid>
      </Hidden>
      <Grid item>
        <TextWrapper
          style={{ maxWidth: "40em" }}
          br="md"
          header="h2"
          align="left"
          text={body}
        />
      </Grid>
      <Hidden mdDown>
        <Grid item component={Link} to={forward}>
          <IconButton
            style={{ marginTop: "0.5em", backgroundColor: "transparent" }}
          >
            <img src={forwardArrow} alt={forward.replace("/", "")} />
          </IconButton>
        </Grid>
      </Hidden>
    </Grid>
  );
};

export default ServicesNav;

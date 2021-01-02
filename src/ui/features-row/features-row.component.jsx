import React from "react";
import useStyles from "./features-row.styles";

import { Grid, Typography, useTheme, useMediaQuery } from "@material-ui/core";

const FeaturesRow = ({ features, br }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down(br));

  return (
    <Grid
      item
      container
      justify="center"
      className={
        matches ? classes.featuresContainerBreaked : classes.featuresContainer
      }
    >
      {features.map(({ title, icon }) => (
        <Grid key={title} item md className={classes.feature}>
          <Typography align="center" variant="h4">
            {title}
          </Typography>
          <Grid item container justify="center">
            <img src={icon} alt={title} className={classes.image} />
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default FeaturesRow;

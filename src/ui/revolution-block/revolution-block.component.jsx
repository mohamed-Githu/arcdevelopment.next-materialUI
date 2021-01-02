import React from "react";
import useStyles from "./revolution-block.styles";

import { Typography, Grid } from "@material-ui/core";

const RevolutionBlock = ({ color, body, icon, title }) => {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.container}
      style={{ backgroundColor: color }}
    >
      <Grid item lg>
        <Typography variant="h4" className={classes.header} gutterBottom>
          {title}
        </Typography>
        {body.map((text) => (
          <Typography variant="body2" className={classes.body} paragraph>
            {text}
          </Typography>
        ))}
      </Grid>
      <Grid item lg style={{ alignSelf: "center" }}>
        <img src={icon} alt={title} className={classes.image} />
      </Grid>
    </Grid>
  );
};

export default RevolutionBlock;

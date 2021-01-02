import React from "react";
import useStyles from "./estimate-item.styles";

import { Typography, Grid, Button, useTheme } from "@material-ui/core";

const EstimateItem = ({ title, icon, subtitle, selected, id, onSelect }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid
      item
      md
      container
      component={Button}
      className={classes.carousalItem}
      onClick={() => onSelect(id)}
      style={{
        backgroundColor: selected ? theme.palette.common.orange : undefined,
      }}
    >
      <Grid item>
        <Typography
          align="center"
          style={{ margin: "0 .5em" }}
          variant="h6"
          gutterBottom
        >
          {title}
        </Typography>
      </Grid>
      <Typography
        align="center"
        style={{ fontSize: "1em" }}
        variant="body2"
        gutterBottom
      >
        {subtitle}
      </Typography>
      <Grid item>
        <img src={icon} alt={title} className={classes.icon} />
      </Grid>
    </Grid>
  );
};

export default EstimateItem;

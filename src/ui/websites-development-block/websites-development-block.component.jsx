import React from "react";
import useStyles from "./websites-development-block.styles";

import { Grid, Typography, useTheme, useMediaQuery } from "@material-ui/core";

const WebsitesDevelopmentBlock = ({ title, body, icon, index }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const align = index % 2 === 0 ? "flex-start" : "flex-end";

  return (
    <Grid item container className={classes.mainContainer} justify={align}>
      <Grid item className={classes.leftContainer}>
        <Grid
          container
          direction="column"
          alignItems={(index === 3 || matches) ? "center" : "flex-start"}
        >
          <Grid item>
            <Typography
              style={{ marginLeft: index === 0 ? "1.5em" : undefined }}
              variant="h4"
              align={matches ? "center" : "left"}
              className={classes.title}
            >
              {title}
            </Typography>
          </Grid>
          <Grid item>
            <img src={icon} alt={title} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.textContainer}>
        {body.map((item) => (
          <Typography
            key={item}
            variant="body2"
            paragraph
            align={matches ? "center" : "left"}
          >
            {item}
          </Typography>
        ))}
      </Grid>
    </Grid>
  );
};

export default WebsitesDevelopmentBlock;

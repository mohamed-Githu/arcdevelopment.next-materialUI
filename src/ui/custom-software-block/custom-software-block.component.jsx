import React from "react";
import useStyles from "./custom-software-block.styles";

import { Grid, Typography, useTheme, useMediaQuery } from "@material-ui/core";

import Animation from "../animation/animation.component";

const CustomSoftwareBlock = ({
  animationData,
  styles,
  title,
  body,
  align,
  icon,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const newAlign = matchesSM ? "center" : align;

  let direction;

  switch (align) {
    case "right":
      direction = matchesSM ? "column-reverse" : "row-reverse";
      break;
    case "left":
      direction = matchesSM ? "column" : "row";
      break;
    case "center":
      direction = "column-reverse";
      break;
    default:
      break;
  }

  return (
    <Grid
      item
      container
      direction={direction}
      className={classes.itemContainer}
      sm
    >
      <Grid item container direction="column" sm>
        <Grid item>
          <Typography align={newAlign} variant="h4">
            {title}
          </Typography>
        </Grid>
        <Grid item>
          {body.map((text, i) => (
            <Typography
              key={text + i}
              paragraph
              align={newAlign}
              variant="body2"
            >
              {text}
            </Typography>
          ))}
        </Grid>
      </Grid>
      <Grid item sm>
        {icon ? (
          <img src={icon} alt={title} className={classes.image} />
        ) : (
          <Animation data={animationData} style={styles} />
        )}
      </Grid>
    </Grid>
  );
};

export default CustomSoftwareBlock;

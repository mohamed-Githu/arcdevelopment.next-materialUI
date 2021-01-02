import React from "react";
import useStyles from "./text-wrapper.styles";

import { Grid, Typography, useTheme, useMediaQuery } from "@material-ui/core";

const TextWrapper = ({ text, align, header, br, ...props }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down(br));

  return (
    <Grid container {...props} className={classes.textContainer}>
      {text.map((item, i) => (
        <Typography
          key={item.substr(0, 10)}
          paragraph
          variant={i === 0 ? header : "body2"}
          align={matches ? "center" : align}
        >
          {item}
        </Typography>
      ))}
    </Grid>
  );
};

export default TextWrapper;

import React from "react";
import useStyles from "./services-block.styles";
import Link from "../../Link";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core";

import ArrowButton from "../arrow-button/arrow-button.component";

const ServicesBlock = ({
  title,
  icon,
  subtitle1,
  subtitle2,
  special,
  index,
  subtitle3,
  routeName,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const align = index % 2 === 0 ? "flex-start" : "flex-end";

  return (
    <Grid
      container
      className={classes.servicesContainer}
      justify={matchesMD ? "center" : align}
      alignItems="center"
      direction={matchesMD ? "column" : "row"}
    >
      <Grid
        item
        style={{ marginLeft: index % 2 === 0 ? (matchesSM ? 0 : "5em") : 0 }}
        className={classes.textContainer}
      >
        <Typography variant="h4">{title}</Typography>
        <Typography variant="subtitle1" paragraph>
          {subtitle1}
        </Typography>
        <Typography variant="subtitle1">
          {subtitle2}
          {special && <span className={classes.specialText}> {special}</span>}
          {subtitle3 && (
            <React.Fragment>
              <br /> {subtitle3}
            </React.Fragment>
          )}
        </Typography>
        <ArrowButton
          style={{ padding: 5, fontSize: "0.7rem", height: 35, width: "auto" }}
          component={Link}
          to={routeName}
        >
          Learn More
        </ArrowButton>
      </Grid>
      <Grid
        item
        style={{ marginRight: index % 2 === 1 ? (matchesSM ? 0 : "5em") : 0 }}
      >
        <img className={classes.icon} src={icon} alt={title + " Icon"} />
      </Grid>
    </Grid>
  );
};

export default ServicesBlock;

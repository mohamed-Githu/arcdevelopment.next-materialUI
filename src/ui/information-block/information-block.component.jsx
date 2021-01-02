import React from "react";
import Link from "../../Link";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useMediaQuery, useTheme } from "@material-ui/core";

import ArrowButton from "../arrow-button/arrow-button.component";

const InformationBlock = ({ title, subtitle, align, to }) => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid item>
      <Grid
        container
        direction="column"
        alignItems={matchesSM ? "center" : align}
        style={{ margin: "4em 0" }}
      >
        <Typography variant="h2" style={{ color: "white" }}>
          {title}
        </Typography>
        <Typography variant="subtitle2">{subtitle}</Typography>
        <ArrowButton
          style={{
            padding: 5,
            fontSize: "0.7rem",
            height: 35,
            width: "auto",
            color: "white",
            borderColor: "white",
          }}
          component={Link}
          to={to}
        >
          Learn More
        </ArrowButton>
      </Grid>
    </Grid>
  );
};

export default InformationBlock;

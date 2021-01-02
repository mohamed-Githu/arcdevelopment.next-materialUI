import React from "react";
import Head from "next/head";
import useStyles from "./services-page.styles";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import ServicesSection from "../../ui/services-section/services-section.component";

const ServicesPage = () => {
  const classes = useStyles();

  return (
    <Grid>
      <Head>
        <title>Top Custom Software Services | Arc Development</title>
        <meta
          name="description"
          content="Cutting-edge software, mobile app, and website development services with sleek custom desings - get free online estimate instatly!"
        />
        <meta
          property="og:title"
          content="Bringing West Cost Techonoly to the Medwest | Services"
        />
      </Head>
      <Grid item container className={classes.titleContainer}>
        <Typography variant="h2" paragraph className={classes.title}>
          Services
        </Typography>
      </Grid>
      <Grid item className={classes.servicesSection}>
        <ServicesSection reverseOrientation />
      </Grid>
    </Grid>
  );
};

export default ServicesPage;

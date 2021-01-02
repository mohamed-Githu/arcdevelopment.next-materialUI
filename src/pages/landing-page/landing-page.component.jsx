import React from "react";
import Head from "next/head";
import useStyles from "./landing-page.styles";

import Link from "../../Link";

import { Grid, Button, Typography, Card, CardContent } from "@material-ui/core";

import animationData from "../../animations/landinganimation/data";

import ArrowButton from "../../ui/arrow-button/arrow-button.component";
import Animation from "../../ui/animation/animation.component";
import InformationBlock from "../../ui/information-block/information-block.component";
import CallToAction from "../../ui/call-to-action/call-to-action.component";
import ServicesSection from "../../ui/services-section/services-section.component";
import { informationOptions } from "./landing-page.data";

const LandingPage = () => {
  const classes = useStyles();

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Head>
        <title>Custom Software, Mobiles, and Websites | Arc Development</title>
        <meta
          name="description"
          content="Pristine software custom-designed from the ground up with cutting-edge optimizations. Use our free estimate calculator to check your project cost!"
        />
        <meta
          property="og:title"
          content="Bringing West Cost Techonoly to the Medwest | Arc Development"
        />
      </Head>
      <Grid item>
        <Grid container justify="flex-end" alignItems="center">
          <Grid item sm className={classes.leftContainer}>
            <Typography variant="h2" align="center" paragraph>
              Bringing West Coast Technology
              <br />
              To The Middle West
            </Typography>
            <Grid container justify="center">
              <Grid item>
                <Button
                  variant="contained"
                  className={classes.estimateButton}
                  component={Link}
                  to="/estimate"
                >
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <ArrowButton component={Link} to="/revolution">
                  Learn More
                </ArrowButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm className={classes.animation}>
            <Animation data={animationData} height={"100%"} width={"100%"} />
          </Grid>
        </Grid>
      </Grid>

      <ServicesSection />

      <Grid item className={classes.revolutionContainer}>
        <Card className={classes.revolutionCard}>
          <CardContent>
            <Typography variant="h3" gutterBottom>
              The Revolution
            </Typography>
            <Typography variant="subtitle1">
              Visionary insight coupled with cuttin-edge technology is a recipe
              for revolution.
            </Typography>
            <ArrowButton component={Link} to="/revolution">
              Learn More
            </ArrowButton>
          </CardContent>
        </Card>
      </Grid>

      <Grid item className={classes.informationContainer}>
        <Grid container className={classes.informationItems}>
          {informationOptions.map((option) => (
            <InformationBlock key={option.title} {...option} />
          ))}
        </Grid>
      </Grid>

      <Grid item>
        <CallToAction />
      </Grid>
    </Grid>
  );
};

export default LandingPage;

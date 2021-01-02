import React from "react";
import Head from "next/head";
import useStyles from "./contact-page.styles";

import CallToAction from "../../ui/call-to-action/call-to-action.component";
import ContactForm from "../../ui/contact-form/contact-form.component";

import { Grid, Typography, useTheme, useMediaQuery } from "@material-ui/core";

const ContactPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container alignItems="center">
      <Head>
        <title>Contact Us | Arc Development</title>
        <meta
          name="description"
          content="Let us guide you through the custom software design and development process. Send us a message with your ideas or questions to get started!"
        />
        <meta
          property="og:title"
          content="Bringing West Cost Techonoly to the Medwest | Contact Us"
        />
      </Head>
      <Grid item container className={classes.mainContainer} lg={3}>
        <Grid item container className={classes.topContainer}>
          <Grid item>
            <Typography
              variant="h2"
              align={matchesMD ? "center" : undefined}
              style={{ lineHeight: 1 }}
            >
              Contact Us
            </Typography>
            <Typography
              variant="body2"
              align={matchesMD ? "center" : undefined}
              style={{ color: theme.palette.common.blue }}
            >
              We're waiting.
            </Typography>
          </Grid>
          <Grid item>
            <Grid
              item
              container
              alignItems="center"
              style={{ marginTop: "2em" }}
            >
              <Grid item>
                <img
                  src="/assets/phone.svg"
                  alt="Phone Icon"
                  style={{ marginRight: ".5em" }}
                />
              </Grid>
              <Grid item>
                <Typography variant="body2" className={classes.text}>
                  <a href="tel:5555555555" className={classes.link}>
                    (555) - 555 555
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container alignItems="center">
              <Grid item>
                <img
                  src="/assets/email.svg"
                  alt="Email Icon"
                  style={{ marginRight: ".5em" }}
                />
              </Grid>
              <Grid item>
                <Typography variant="body2" className={classes.text}>
                  <a href="mailto:mohamed@gmail.com" className={classes.link}>
                    mohamed@gmail.com
                  </a>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.formContainer}>
          <ContactForm />
        </Grid>
      </Grid>
      <Grid item lg={9} md={12} sm={12} xs={12}>
        <CallToAction />
      </Grid>
    </Grid>
  );
};

export default ContactPage;

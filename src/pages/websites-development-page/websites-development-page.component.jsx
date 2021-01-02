import React, { Fragment } from "react";
import Head from "next/head";
import useStyles from "./websites-development-page.styles";

import { Grid } from "@material-ui/core";

import ServicesNav from "../../ui/services-nav/services-nav.component";
import CallToAction from "../../ui/call-to-action/call-to-action.component";
import WebsitesDevelopmentBlock from "../../ui/websites-development-block/websites-development-block.component";

import {
  featuresOptions,
  topSectionBody,
} from "./websites-development-page.data";

const WebsitesDevelopmentPage = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Head>
        <title>Stunning Custom Website Design | Arc Development</title>
        <meta
          name="description"
          content="Completely custom designed and built from scratch to be blazing fast. Optimized code, server-side rendering, and perfect responsive desing | 99% PageSpeed Score"
        />
        <meta
          property="og:title"
          content="Bringing West Cost Techonoly to the Medwest | Websites"
        />
      </Head>
      <Grid container direction="column" className={classes.mainContainer}>
        <Grid item>
          <Grid container>
            <ServicesNav
              backward="/mobileapps"
              forward="/services"
              body={topSectionBody}
            />
          </Grid>
        </Grid>
        <Grid item container>
          {featuresOptions.map((option, i) => (
            <WebsitesDevelopmentBlock
              key={option.title}
              index={i}
              {...option}
            />
          ))}
        </Grid>
      </Grid>
      <CallToAction />
    </Fragment>
  );
};

export default WebsitesDevelopmentPage;

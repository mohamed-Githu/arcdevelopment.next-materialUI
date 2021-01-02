import React, { Fragment } from "react";
import Head from "next/head";
import useStyles from "./custom-software-page.styles";

import { Grid } from "@material-ui/core";

import ServicesNav from "../../ui/services-nav/services-nav.component";
import CallToAction from "../../ui/call-to-action/call-to-action.component";
import CustomSoftwareBlock from "../../ui/custom-software-block/custom-software-block.component";
import FeaturesRow from "../../ui/features-row/features-row.component";

import {
  featuresOptions,
  topSectionBody,
  customSoftwareOptions,
} from "./custom-software-page.data";

const CustomSoftwarePage = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Grid container direction="column" className={classes.mainContainer}>
        <Head>
          <title>Custom Software Development and Design - Free Estimate</title>
          <meta
            name="description"
            content="Cutting-edge custom software development with gorgeos designs from scratch - let us optimize your bussiness, solving problems instead of creating new ones"
          />
          <meta
            property="og:title"
            content="Bringing West Cost Techonoly to the Medwest | Custom Software Development"
          />
        </Head>
        <Grid item>
          <Grid container>
            <ServicesNav
              backward="/services"
              forward="/mobileapps"
              body={topSectionBody}
            />
          </Grid>
        </Grid>
        <FeaturesRow br="md" features={featuresOptions} />
        <Grid item container>
          <Grid container className={classes.gridContainer}>
            <CustomSoftwareBlock {...customSoftwareOptions[0]} />
            <CustomSoftwareBlock {...customSoftwareOptions[1]} />
          </Grid>
          <Grid container justify="center" className={classes.middleGrid}>
            <CustomSoftwareBlock {...customSoftwareOptions[2]} />
          </Grid>
          <Grid container className={classes.gridContainer}>
            <CustomSoftwareBlock {...customSoftwareOptions[3]} />
            <CustomSoftwareBlock {...customSoftwareOptions[4]} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item style={{ marginTop: "10em" }}>
        <CallToAction />
      </Grid>
    </Fragment>
  );
};

export default CustomSoftwarePage;

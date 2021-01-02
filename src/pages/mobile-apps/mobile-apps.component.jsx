import React, { Fragment } from "react";
import Head from "next/head";
import useStyles from "./mobile-apps.styles";

import { Grid } from "@material-ui/core";

import CallToAction from "../../ui/call-to-action/call-to-action.component";
import ServicesNav from "../../ui/services-nav/services-nav.component";
import FeaturesRow from "../../ui/features-row/features-row.component";
import TextWrapper from "../../ui/text-wrapper/text-wrapper.component";
import Animation from "../../ui/animation/animation.component";

import {
  featuresOptions,
  topSectionBody,
  body1,
  body2,
} from "./mobile-apps.data";
import integrationData from "../../animations/integrationAnimation/data.json";

const MobileAppsPage = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Grid container direction="column" className={classes.mainContainer}>
        <Head>
          <title>
            IOS/Android App Development and Design | Arc Development
          </title>
          <meta
            name="description"
            content="Mobile Apps Made Easy | Our cutting-edge mobile app development process let's us build beautifully designed, carefully crafted apps for both IOS and Android."
          />
          <meta
            property="og:title"
            content="Bringing West Cost Techonoly to the Medwest | IOS/Android App Development"
          />
        </Head>
        <Grid item>
          <Grid container>
            <ServicesNav
              backward="/customsoftware"
              forward="/websites"
              body={topSectionBody}
            />
          </Grid>
        </Grid>
        <Grid item>
          <Grid container className={classes.textContainer}>
            <Grid item md>
              <TextWrapper br="sm" header="h4" align="left" text={body1} />
            </Grid>
            <Grid item container justify="center" md>
              <Animation data={integrationData} style={{ maxWidth: "19em" }} />
            </Grid>
            <Grid item md>
              <TextWrapper br="sm" header="h4" align="right" text={body2} />
            </Grid>
          </Grid>
        </Grid>
        <FeaturesRow br="md" features={featuresOptions} />
      </Grid>
      <CallToAction style={{ marginTop: "-10em" }} />
    </Fragment>
  );
};

export default MobileAppsPage;

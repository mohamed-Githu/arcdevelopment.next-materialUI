import React, { Fragment } from "react";
import Head from "next/head";
import useStyles from "./revolution-page.styles";

import { Grid, Typography, useTheme, useMediaQuery } from "@material-ui/core";

import RevolutionBlock from "../../ui/revolution-block/revolution-block.component";
import CallToAction from "../../ui/call-to-action/call-to-action.component";
import TextWrapper from "../../ui/text-wrapper/text-wrapper.component";
import Animation from "../../ui/animation/animation.component";

import technologyData from "../../animations/technologyAnimation/data.json";

import { topSectionBody, revolutionBlocks } from "./revolution-page.data";

const RevolutionPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Fragment>
      <Grid container direction="column" className={classes.mainContianer}>
        <Head>
          <title>
            The Revolution - Cutting-Edge Software | Arc Development
          </title>
          <meta
            name="description"
            content="Visionary insights, coupled with cutting-edge technology is a recipe for revolution. Get a free online estimate instantly!"
          />
          <meta
            property="og:title"
            content="Bringing West Cost Techonoly to the Medwest | The Revolution"
          />
        </Head>
        <Grid item>
          <Typography style={{ fontFamily: "Pacifico" }} variant="h2">
            The Revolution
          </Typography>
        </Grid>
        <Grid item>
          <Grid
            container
            className={classes.topSectionContainer}
            direction="row"
            style={{ marginTop: "5em" }}
          >
            <Grid item lg>
              <img
                src="/assets/vision.svg"
                alt="Mountain through binoculas"
                className={classes.image}
              />
            </Grid>
            <Grid item lg className={classes.topSectionTextContainer}>
              <TextWrapper
                style={{ justifyContent: matchesMD ? "center" : "flex-end" }}
                header="h4"
                align="right"
                text={topSectionBody[0]}
                br="md"
              />
            </Grid>
          </Grid>
          <Grid
            container
            className={classes.topSectionContainer}
            style={{ marginTop: "10em" }}
          >
            <Grid className={classes.topSectionTextContainer} item lg>
              <TextWrapper
                style={{ justifyContent: matchesMD ? "center" : "flex-start" }}
                header="h4"
                align="left"
                text={topSectionBody[1]}
                br="md"
              />
            </Grid>
            <Grid item lg>
              <Animation
                data={technologyData}
                style={{ maginLeft: "5em", maxWidth: "40em" }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ marginTop: "10em" }}>
          <Typography variant="h2" align="center">
            Process
          </Typography>
        </Grid>
      </Grid>
      <Grid container direction="column">
        {revolutionBlocks.map((block) => (
          <RevolutionBlock {...block} />
        ))}
      </Grid>
      <CallToAction />
    </Fragment>
  );
};

export default RevolutionPage;

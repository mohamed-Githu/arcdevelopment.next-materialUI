import React from "react";
import Head from "next/head";
import useStyles from "./about-page.styles";

import { Grid, Typography, useTheme, useMediaQuery } from "@material-ui/core";

const AboutPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container direction="column" className={classes.mainContianer}>
      <Head>
        <title>About Us - History & Team | Arc Developmnt</title>
        <meta
          name="description"
          content="We provice the fastest, most modern, affordable and aesthetic in a software design and development services in the Midwest. Get a free estimate online now!"
        />
        <meta
          property="og:title"
          content="Bringing West Cost Techonoly to the Medwest | About Us"
        />
      </Head>
      <Grid item container justify={matchesMD ? "center" : undefined}>
        <Typography variant="h2">About Us</Typography>
      </Grid>
      <Grid item container className={classes.missionContainer}>
        <Typography variant="h4" className={classes.mission}>
          Whether it be person to person, business to consumer, or an individual
          to their interests, technology is meant to bring us closer to what we
          care about in the best way possible. Arc Development will use that
          principle to provide fast, modern, inexpensive, and aesthetic software
          to the Midwest and beyond.
        </Typography>
      </Grid>
      <Grid item>
        <Grid container justify="space-around" alignItems="center">
          <Grid item style={{ maxWidth: "35em" }}>
            <Typography gutterBottom variant="h2">
              History
            </Typography>
            <Typography
              paragraph
              style={{ fontWeight: 700, fontStyle: "italic" }}
              variant="body2"
            >
              We’re the new kid on the block.
            </Typography>
            <Typography paragraph variant="body2">
              Founded in 2019, we’re ready to get our hands on the world’s
              business problems.
            </Typography>
            <Typography paragraph variant="body2">
              It all started with one question: Why aren’t all businesses using
              available technology? There are many different answers to that
              question: economic barriers, social barriers, educational
              barriers, and sometimes institutional barriers.
            </Typography>
            <Typography paragraph variant="body2">
              We aim to be a powerful force in overcoming these obstacles.
              Recent developments in software engineering and computing power,
              compounded by the proliferation of smart phones, has opened up
              infinite worlds of possibility. Things that have always been done
              by hand can now be done digitally and automatically, and
              completely new methods of interaction are created daily. Taking
              full advantage of these advancements is the name of the game.
            </Typography>
            <Typography paragraph variant="body2">
              All this change can be a lot to keep up with, and that’s where we
              come in.
            </Typography>
          </Grid>
          <Grid item>
            <img src="/assets/history.svg" alt="Book" className={classes.img} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AboutPage;

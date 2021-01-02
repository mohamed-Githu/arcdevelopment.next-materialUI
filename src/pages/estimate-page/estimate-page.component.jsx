import React, { useState, Fragment } from "react";
import Head from "next/head";
import useStyles from "./estimate-page.styles";

import {
  Grid,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import estimateData from "../../animations/estimateAnimation/data.json";
import Animation from "../../ui/animation/animation.component";
import EstimateItem from "../../ui/estimate-item/estimate-item.component";
import EstimateModal from "../../ui/estimate-modal/estimate-modal.component";

import { servicesOptions } from "./estimate-page.data";
import {
  handleSelect,
  checkSelected,
  checkActive,
} from "./estimate-page.utils";

const EstimatePage = () => {
  const classes = useStyles();

  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [temp, setTemp] = useState(true);

  const { header, subtitle, options } = servicesOptions[index];

  const incrementIndex = () => setIndex(index + 1);
  const decrementIndex = () => setIndex(index - 1);
  const forceUpdate = () => setTemp(!temp);
  const handleOpen = () => setOpen(!open);

  const onSelect = (id) => {
    handleSelect(id, servicesOptions[index]);
    forceUpdate();
  };

  const selectedItems = checkSelected(servicesOptions);
  const activeButton = !(selectedItems === servicesOptions.length - 1);
  const nextActive = subtitle === undefined ? false : checkActive(options);

  return (
    <Fragment>
      <Grid container className={classes.mainContainer}>
        <Head>
          <title>Free Custom Software Estimate | Arc Development</title>
          <meta
            name="description"
            content="Use our free online estimate calculator to instantly check the cost of your custom software, mobile app, or website design and development project!"
          />
          <meta
            property="og:title"
            content="Bringing West Cost Techonoly to the Medwest | Free Estimate"
          />
        </Head>
        <Grid item container direction="column" lg>
          <Grid item className={classes.headingContainer}>
            <Typography variant="h2">Estimate</Typography>
          </Grid>
          <Grid item className={classes.animationContainer}>
            <Animation data={estimateData} />
          </Grid>
        </Grid>
        <Grid item container className={classes.rightContainer} lg>
          <Grid item container className={classes.carousal}>
            <Grid item style={{ margin: "10em 0 2.5em 0" }}>
              <Typography align="center" variant="h2" className={classes.title}>
                {header}
              </Typography>
              <Typography
                align="center"
                style={{ fontSize: "1em", marginTop: ".5em" }}
                variant="body2"
              >
                {subtitle}
              </Typography>
            </Grid>
            <Grid item container className={classes.optionsContainer}>
              {options.map((option) => (
                <EstimateItem key={option.id} {...option} onSelect={onSelect} />
              ))}
            </Grid>
          </Grid>
          <Grid item container className={classes.arrowsContainer}>
            <Grid item>
              <IconButton
                disabled={index === 0}
                onClick={decrementIndex}
                className={classes.arrow}
              >
                <ArrowBackIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                disabled={nextActive || index === servicesOptions.length - 1}
                onClick={incrementIndex}
                className={classes.arrow}
              >
                <ArrowForwardIcon />
              </IconButton>
            </Grid>
          </Grid>
          <Grid item>
            <Button
              disabled={activeButton}
              className={classes.estimate}
              onClick={handleOpen}
            >
              Get Estimate
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <EstimateModal
        services={servicesOptions}
        onClose={handleOpen}
        open={open}
      />
    </Fragment>
  );
};

export default EstimatePage;

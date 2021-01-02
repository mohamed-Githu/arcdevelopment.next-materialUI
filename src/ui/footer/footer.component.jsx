import React from "react";
import useStyles from "./footer.styles";
import Link from "../../Link";

import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

import footerAdornment from "../../../assets/Footer Adornment.svg";
import { gridOptions, socialIcons } from "./footer.data";

const Footer = () => {
  const classes = useStyles();
  const { footer, mainContainer, adornment, gridLink, gridItem } = classes;

  return (
    <footer className={footer}>
      <Hidden mdDown>
        <Grid container justify="center" className={mainContainer}>
          {gridOptions.map((gridArray, i) => (
            <Grid key={i + "gridArray"} item className={gridItem}>
              <Grid container className={classes.linksContainer} spacing={2}>
                {gridArray.map(({ name, routeName }) => (
                  <Grid
                    key={name}
                    item
                    className={gridLink}
                    component={Link}
                    to={routeName}
                  >
                    {name}
                  </Grid>
                ))}
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Hidden>
      <img
        src={footerAdornment}
        alt="Footer Adornment Slash"
        className={adornment}
      />
      <Grid
        container
        justify="flex-end"
        alignItems="flex-end"
        className={classes.socialContainer}
      >
        {socialIcons.map(({ src, alt, link }) => (
          <Grid
            key={alt}
            item
            component={"a"}
            href={link}
            rel="noreferrer noopener"
            target="_blank"
          >
            <img src={src} alt={alt} className={classes.socialIcon} />
          </Grid>
        ))}
      </Grid>
    </footer>
  );
};

export default Footer;

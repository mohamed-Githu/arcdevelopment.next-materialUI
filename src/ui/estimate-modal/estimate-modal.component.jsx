import React, { useState } from "react";
import useStyles from "./estimate-modal.styles";

import ContactForm from "../contact-form/contact-form.component";

import {
  Modal,
  Grid,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Button,
} from "@material-ui/core";

import CloseIcon from "@material-ui/icons/Close";
import DoneIcon from "@material-ui/icons/Done";

import { getCost, getSelectedOptions } from "./estimate-modal.utils";

const EstimateModal = ({ services, ...props }) => {
  const classes = useStyles();
  const [active, setActive] = useState(false);

  const selectedOptions = getSelectedOptions(services);
  const cost = getCost(selectedOptions);

  const isActive = (value) => setActive(value);

  return (
    <Modal {...props} style={{ zIndex: 1304 }}>
      <Grid container className={classes.modal}>
        <Grid item className={classes.topSection}>
          <IconButton disableRipple className={classes.iconContainer}>
            <CloseIcon onClick={props.onClose} className={classes.closeIcon} />
          </IconButton>
          <Typography variant="h4" align="center" gutterBottom>
            Estimate
          </Typography>
        </Grid>
        <Grid item container className={classes.contentContainer}>
          <Grid item md container className={classes.leftContainer}>
            <Grid item className={classes.formContainer}>
              <ContactForm estimate isOpen={isActive} />
            </Grid>
            <Grid item>
              <Typography variant="body2" className={classes.text} paragraph>
                We can create this custom digital solution for an estimated{" "}
                <span className={classes.cost}>${cost}</span>
              </Typography>
              <Typography className={classes.text} variant="body2">
                Fill out your name, number, and email, place your request, and
                we’ll get back to you with details moving forward and a final
                price.
              </Typography>
            </Grid>
          </Grid>
          <Grid item container md className={classes.rightContainer}>
            <List className={classes.list}>
              {selectedOptions.map(({ title, prefix, suffix }) => (
                <ListItem>
                  <ListItemIcon>
                    <DoneIcon className={classes.doneIcon} />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography variant="body2" style={{ fontSize: "1.1em" }}>
                      {prefix}
                      {title}
                      {suffix}
                    </Typography>
                  </ListItemText>
                </ListItem>
              ))}
            </List>
            <Button disabled={active} className={classes.estimate}>
              Place Estimate
              <img src="/assets/send.svg" alt="paper airplane" />
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default EstimateModal;

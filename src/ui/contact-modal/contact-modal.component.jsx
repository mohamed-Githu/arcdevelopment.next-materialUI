import React from "react";
import useStyles from "./contact-modal.styles";

import ContactForm from "../contact-form/contact-form.component";

import { Modal, Grid, Typography, IconButton } from "@material-ui/core";

import CloseIcon from "@material-ui/icons/Close";

const ContactModal = ({ userInput, ...props }) => {
  const classes = useStyles();

  return (
    <Modal {...props} style={{ zIndex: 1304 }}>
      <Grid container className={classes.modal}>
        <Grid item>
          <IconButton disableRipple>
            <CloseIcon onClick={props.onClose} className={classes.closeIcon} />
          </IconButton>
        </Grid>
        <Grid container item alignItems="center" direction="column">
          <Grid item>
            <Typography variant="h4" align="center" gutterBottom>
              Confirm Message
            </Typography>
          </Grid>
          <Grid item className={classes.formContainer}>
            <ContactForm userInput={userInput} />
          </Grid>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default ContactModal;

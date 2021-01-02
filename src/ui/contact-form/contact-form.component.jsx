import React, { useState, Fragment } from "react";
import useStyles from "./contact-form.styles";

import ContactModal from "../contact-modal/contact-modal.component";

import { Grid, Button, TextField } from "@material-ui/core";

const ContactForm = ({
  userInput = {
    name: "",
    email: "",
    phone: "",
    message: "",
  },
  estimate,
  isOpen,
}) => {
  const classes = useStyles();
  const [input, setInput] = useState(userInput);
  const [helperText, setHelperText] = useState({
    emailHelper: "",
    phoneHelper: "",
  });
  const [open, setOpen] = useState(false);

  const { name, email, phone, message } = input;
  const { emailHelper, phoneHelper } = helperText;

  const handleChange = (e) => {
    const { value, id } = e.target;
    setInput({ ...input, [id]: value });

    let valid;

    switch (id) {
      case "email":
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value);
        setHelperText({
          ...helperText,
          emailHelper: valid ? "" : "Invalid Email Address",
        });
        break;
      case "phone":
        valid = /^0\d{10}$/.test(value);
        setHelperText({
          ...helperText,
          phoneHelper: valid ? "" : "Invalid Phone Number",
        });
        break;
      default:
        break;
    }
  };

  const handleOpen = () => setOpen(!open);

  const active = emailHelper || !name.trim() || phoneHelper || !message.trim();
  isOpen && isOpen(active);

  return (
    <Fragment>
      <Grid container direction="column">
        <Grid item>
          <TextField
            label="Name"
            id="name"
            value={name}
            onChange={handleChange}
            fullWidth
            style={{ marginBottom: ".5em" }}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Email"
            id="email"
            value={email}
            onChange={handleChange}
            fullWidth
            helperText={emailHelper}
            error={emailHelper}
            style={{ marginBottom: ".5em" }}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Phone"
            id="phone"
            value={phone}
            onChange={handleChange}
            fullWidth
            helperText={phoneHelper}
            error={phoneHelper}
          />
        </Grid>
        <Grid item>
          <TextField
            InputProps={{ disableUnderline: true }}
            id="message"
            value={message}
            onChange={handleChange}
            fullWidth
            multiline
            rows={estimate ? 6 : 10}
            placeholder="Hello! We have an idea that we’d just love to share."
            className={classes.messageText}
          />
        </Grid>
        {!estimate && (
          <Grid item style={{ alignSelf: "center" }}>
            <Button
              variant="contained"
              disabled={active}
              className={classes.button}
              onClick={handleOpen}
            >
              Send Message <img src="/assets/send.svg" alt="paper airplane" />
            </Button>
          </Grid>
        )}
      </Grid>
      {!userInput.name && !estimate && (
        <ContactModal userInput={input} open={open} onClose={handleOpen} />
      )}
    </Fragment>
  );
};

export default ContactForm;

import React, { useState } from "react";
import clsx from "clsx";

import { Grid, Button, Typography, TextField } from "@material-ui/core";

import phoneIcon from "../../../../assets/phone.svg";
import emailIcon from "../../../../assets/email.svg";
import airplane from "../../../../assets/send.svg";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  blueText: {
    color: theme.palette.common.blue,
  },
  smallerText: {
    fontSize: "1rem",
  },
  message: {
    marginTop: "5em",
    border: `2px solid ${theme.palette.common.blue}`,
    borderRadius: 5,
  },
  sendButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: "1rem",
    backgroundColor: theme.palette.common.orange,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  fieldBlockMargin: {
    marginBottom: "0.5em",
  },
  itemTopMargin: {
    marginTop: "2em",
  },
  envelopeIcon: {
    marginRight: "0.5em",
    verticalAlign: "bottom",
  },
  fieldItemWidth: {
    maxWidth: "20em",
  },
  removeLinkStyle: {
    textDecoration: "none",
    color: "inherit",
  },
}));

const Form = (props) => {
  const { matchesMd } = props;
  const classes = useStyles();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");
  const [message, setMessage] = useState("");

  const onChange = (event) => {
    let valid;

    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );
        setEmailHelper("");
        if (!valid) {
          setEmailHelper("Invalid email");
        }
        break;
      case "phone":
        setPhone(event.target.value);
        valid = /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?(\d{4}|\d{3}))?$/.test(
          event.target.value
        );
        setPhoneHelper("");
        if (!valid) {
          setPhoneHelper("Invalid phone number");
        }
        break;
      default:
        break;
    }
  };

  const checkValid = () => {
    if (
      name.length === 0 ||
      message.length === 0 ||
      email.length === 0 ||
      phone.length === 0 ||
      emailHelper.length !== 0 ||
      phoneHelper.length !== 0
    ) {
      return true;
    }
    return false;
  };

  return (
    <Grid item>
      <Grid item container direction="column">
        <Grid item>
          <Typography
            align={matchesMd ? "center" : undefined}
            variant="h2"
            style={{ lineHeight: 1 }}
          >
            Contact Us
          </Typography>
          <Typography
            align={matchesMd ? "center" : undefined}
            variant="body1"
            className={classes.blueText}
          >
            We're waiting
          </Typography>
        </Grid>
        <Grid item container className={classes.itemTopMargin}>
          <Grid item>
            <img src={phoneIcon} alt="phone" style={{ marginRight: "0.5em" }} />
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              className={clsx(classes.blueText, classes.smallerText)}
            >
              <a href="tel:5555555555" className={classes.removeLinkStyle}>
                (555) 555-5555
              </a>
            </Typography>
          </Grid>
        </Grid>
        <Grid item container className={classes.fieldBlockMargin}>
          <Grid item>
            <img
              src={emailIcon}
              alt="envelope"
              className={classes.envelopeIcon}
            />
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              className={clsx(classes.blueText, classes.smallerText)}
            >
              <a href="mailto:me@email.com" className={classes.removeLinkStyle}>
                me@email.com
              </a>
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          className={classes.fieldItemWidth}
        >
          <Grid item className={classes.fieldBlockMargin}>
            <TextField
              label="Name"
              id="name"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item className={classes.fieldBlockMargin}>
            <TextField
              label="Email"
              error={emailHelper.length !== 0}
              helperText={emailHelper}
              id="email"
              fullWidth
              value={email}
              onChange={onChange}
            />
          </Grid>
          <Grid item style={{ marginBottom: "0.5em" }}>
            <TextField
              label="Phone"
              error={phoneHelper.length !== 0}
              helperText={phoneHelper}
              id="phone"
              fullWidth
              value={phone}
              onChange={onChange}
            />
          </Grid>
        </Grid>
        <Grid item className={classes.fieldItemWidth}>
          <TextField
            multiline
            InputProps={{ disableUnderline: true }}
            rows={10}
            id="message"
            fullWidth
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={classes.message}
          />
        </Grid>
        <Grid item container justify="center" className={classes.itemTopMargin}>
          <Button
            variant="contained"
            className={classes.sendButton}
            disabled={checkValid()}
          >
            Send message{" "}
            <img
              src={airplane}
              alt="paper airplane"
              style={{ marginLeft: "1em" }}
            />
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Form;

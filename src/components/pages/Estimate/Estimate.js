import React from "react";

import { Grid, Typography, Button, IconButton } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";

import Animation from "../../ui/Animation/Animation";
import estimateAnimation from "../../../animations/estimateAnimation/data.json";

import check from "../../../assets/check.svg";
import send from "../../../assets/send.svg";
import software from "../../../assets/software.svg";
import mobile from "../../../assets/mobile.svg";
import website from "../../../assets/website.svg";
import backArrow from "../../../assets/backArrow.svg";
import backArrowDisabled from "../../../assets/backArrowDisabled.svg";
import forwardArrow from "../../../assets/forwardArrow.svg";
import forwardArrowDisabled from "../../../assets/forwardArrowDisabled.svg";
import camera from "../../../assets/camera.svg";
import upload from "../../../assets/upload.svg";
import person from "../../../assets/person.svg";
import persons from "../../../assets/persons.svg";
import info from "../../../assets/info.svg";
import bell from "../../../assets/bell.svg";
import people from "../../../assets/people.svg";
import usersIcon from "../../../assets/users.svg";
import iPhone from "../../../assets/iphone.svg";
import gps from "../../../assets/gps.svg";
import customized from "../../../assets/customized.svg";
import data from "../../../assets/data.svg";
import android from "../../../assets/android.svg";
import globe from "../../../assets/globe.svg";
import biometrics from "../../../assets/biometrics.svg";

const useStyles = makeStyles((theme) => ({
  icon: {
    width: "12em",
    height: "12em",
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 50,
    width: 225,
    fontSize: "1.25rem",
    marginTop: "5em",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));

const Estimate = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container direction="row">
      <Grid item container direction="column" lg>
        <Grid item style={{ marginTop: "2em", marginLeft: "5em" }}>
          <Typography variant="h2">Estimate</Typography>
        </Grid>
        <Grid
          item
          style={{ marginRight: "10em", maxWidth: "50em", marginTop: "7.5em" }}
        >
          <Animation
            animationData={estimateAnimation}
            height="100%"
            width="100%"
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        lg
        style={{ marginRight: "2em", marginBottom: "25em" }}
      >
        <Grid item>
          <Typography
            variant="h2"
            align="center"
            style={{
              fontSize: "2.25rem",
              fontWeight: 500,
              marginBottom: "2.5m",
              marginTop: "5em",
            }}
            gutterBottom
          >
            Which service are you interested in?
          </Typography>
        </Grid>
        <Grid item container>
          <Grid item container direction="column" md>
            <Grid item style={{ maxWidth: "12em" }}>
              <Typography
                variant="h6"
                align="center"
                style={{ marginBottom: "1em" }}
              >
                Custom Software Development
              </Typography>
            </Grid>
            <Grid item>
              <img
                src={software}
                alt="three floating screens"
                className={classes.icon}
              />
            </Grid>
          </Grid>
          <Grid item container direction="column" md>
            <Grid item style={{ maxWidth: "12em" }}>
              <Typography
                variant="h6"
                align="center"
                style={{ marginBottom: "1em" }}
              >
                iOS / Android App Development
              </Typography>
            </Grid>
            <Grid item>
              <img
                src={mobile}
                alt="phones and tablet outline"
                className={classes.icon}
              />
            </Grid>
          </Grid>
          <Grid item container direction="column" md>
            <Grid item style={{ maxWidth: "12em" }}>
              <Typography
                variant="h6"
                align="center"
                style={{ marginBottom: "1em" }}
              >
                Website Development
              </Typography>
            </Grid>
            <Grid item>
              <img
                src={website}
                alt="computer outline"
                className={classes.icon}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justify="space-between"
          style={{ width: "15em", marginTop: "3em" }}
        >
          <Grid item>
            <img src={backArrow} alt="previous question" />
          </Grid>
          <Grid item>
            <img src={forwardArrow} alt="next question" />
          </Grid>
        </Grid>
        <Grid item>
          <Button variant="container" className={classes.estimateButton}>
            Get Estimate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Estimate;

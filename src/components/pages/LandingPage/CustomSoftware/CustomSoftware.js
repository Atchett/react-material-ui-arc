import React from "react";

import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import ButtonArrow from "../../../ui/ButtonArrow/ButtonArrow";
import customSoftwareIcon from "../../../../assets/Custom Software Icon.svg";

const useStyles = makeStyles((theme) => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    marginBottom: "1em",
  },
  learnButtonSpan: {
    marginRight: 10,
  },
  serviceContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
  serviceText: {
    marginLeft: "5em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
      textAlign: "center",
    },
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBottom: "1em",
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
}));

const CustomSoftware = (props) => {
  const { matchesSm, theme } = props;
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      className={classes.serviceContainer}
      justify={matchesSm ? "center" : undefined}
    >
      <Grid item className={classes.serviceText}>
        <Typography variant="h4">Custom Software Development</Typography>
        <Typography variant="subtitle1">
          Save Energy. Save Time. Save Money.
        </Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>
          Complete digital solutions, from investigation to{" "}
          <span className={classes.specialText}>celebration</span>.
        </Typography>
        <Button variant="outlined" className={classes.learnButton}>
          <span className={classes.learnButtonSpan}>Learn More</span>
          <ButtonArrow
            width={10}
            height={10}
            fill={theme.palette.common.blue}
          />
        </Button>
      </Grid>
      <Grid item>
        <img
          alt="Custom Software Icon"
          src={customSoftwareIcon}
          className={classes.icon}
        />
      </Grid>
    </Grid>
  );
};

export default CustomSoftware;
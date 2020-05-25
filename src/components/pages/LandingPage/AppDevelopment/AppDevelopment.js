import React from "react";

import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import ButtonArrow from "../../../ui/ButtonArrow/ButtonArrow";
import mobileAppsIcon from "../../../../assets/mobileIcon.svg";

const useStyles = makeStyles((theme) => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1em",
    },
  },
  learnButtonSpan: {
    marginRight: 10,
  },
  appDevContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
  appDevText: {
    marginRight: "2em",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
  subtitle: {
    marginBottom: "1em",
  },
  icon: {
    marginRight: "5em",
    [theme.breakpoints.down("xs")]: {
      marginRight: 0,
    },
  },
}));

const AppDevelopment = (props) => {
  const { matchesSm, theme } = props;
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      className={classes.appDevContainer}
      justify={matchesSm ? "center" : "flex-end"}
    >
      <Grid item className={classes.appDevText}>
        <Typography variant="h4">iOS/Android App Development</Typography>
        <Typography variant="subtitle1">
          Extend Functionality. Extend Access. Increase Engagement.
        </Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>
          Integrate your web experience or create a standalone app
          {matchesSm ? null : <br />} with either mobile platform.
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
          alt="Mobile phone icon"
          src={mobileAppsIcon}
          className={classes.icon}
        />
      </Grid>
    </Grid>
  );
};

export default AppDevelopment;

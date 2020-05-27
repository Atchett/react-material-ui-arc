import React, { Fragment } from "react";

import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import lightbulb from "../../../../assets/bulb.svg";
import cash from "../../../../assets/cash.svg";
import stopwatch from "../../../../assets/stopwatch.svg";

const useStyles = makeStyles((theme) => ({
  iconContainer: {
    maxWidth: "40em",
  },
}));

const Icons = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid
        item
        container
        direction="column"
        md
        alignItems="center"
        className={classes.iconContainer}
      >
        <Grid item>
          <Typography variant="h4">Save Energy</Typography>
        </Grid>
        <Grid item>
          <img src={lightbulb} alt="lightbulb" />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        md
        alignItems="center"
        className={classes.iconContainer}
      >
        <Grid item>
          <Typography variant="h4">Save Time</Typography>
        </Grid>
        <Grid item>
          <img src={stopwatch} alt="stopwatch" />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        md
        alignItems="center"
        className={classes.iconContainer}
      >
        <Grid item>
          <Typography variant="h4">Save Money</Typography>
        </Grid>
        <Grid item>
          <img src={cash} alt="cash" />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Icons;

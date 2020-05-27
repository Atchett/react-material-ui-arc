import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import roots from "../../../../assets/root.svg";

const useStyles = makeStyles((theme) => ({
  itemContainer: {
    maxWidth: "40em",
  },
}));

const RootCauseAnalysis = () => {
  const classes = useStyles();

  return (
    <Grid item container direction="row">
      <Grid item container direction="column" alignItems="center">
        <Grid item>
          <img
            src={roots}
            alt="tree with roots extending out"
            width="450em"
            height="450em"
          />
        </Grid>
        <Grid item className={classes.itemContainer}>
          <Typography variant="h4" align="center">
            Root-Cause Analysis
          </Typography>
        </Grid>
        <Grid item className={classes.itemContainer}>
          <Typography variant="body1" paragraph align="center">
            Many problems are merely symptoms of larger, underlying issues.
          </Typography>
          <Typography variant="body1" paragraph align="center">
            We can help you thoroughly examine all areas of your business to
            develop a holistic plan for the most effective implementation of
            technology.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RootCauseAnalysis;

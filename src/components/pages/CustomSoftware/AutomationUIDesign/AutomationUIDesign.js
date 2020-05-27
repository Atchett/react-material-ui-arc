import React, { Fragment } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import automationAnimation from "../../../../animations/automationAnimation/data.json";
import uiAnimation from "../../../../animations/uxAnimation/data";

import Animation from "../../../ui/Animation/Animation";

const useStyles = makeStyles((theme) => ({
  itemContainer: {
    maxWidth: "40em",
  },
}));

const AutomationUIDesign = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid item container direction="row" className={classes.itemContainer} md>
        <Grid item container direction="column" md>
          <Grid item>
            <Typography variant="h4">Automation</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph>
              Why waste time when you don’t have to?
            </Typography>
            <Typography variant="body1" paragraph>
              We can help you identify processes with time or event based
              actions which can now easily be automated.
            </Typography>
            <Typography variant="body1" paragraph>
              Increasing efficiency increases profits, leaving you more time to
              focus on your business, not busywork.
            </Typography>
          </Grid>
        </Grid>
        <Grid item md>
          <Animation
            animationData={automationAnimation}
            isStopped={true}
            style={{ maxHeight: 290, maxWidth: 280 }}
          />
        </Grid>
      </Grid>
      <Grid item container direction="row" className={classes.itemContainer} md>
        <Grid item md>
          <Animation
            animationData={uiAnimation}
            isStopped={true}
            style={{ maxHeight: 310, maxWidth: 155 }}
          />
        </Grid>
        <Grid item container direction="column" md>
          <Grid item>
            <Typography variant="h4" align="right">
              User Experience Design
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph align="right">
              A good design that isn’t usable isn’t a good design.
            </Typography>
            <Typography variant="body1" paragraph align="right">
              So why are so many pieces of software complicated, confusing, and
              frustrating?
            </Typography>
            <Typography variant="body1" paragraph align="right">
              By prioritizing users and the real ways they interact with
              technology we’re able to develop unique, personable experiences
              that solve problems rather than create new ones.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default AutomationUIDesign;

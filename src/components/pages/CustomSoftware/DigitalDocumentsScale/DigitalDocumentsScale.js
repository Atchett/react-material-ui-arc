import React, { Fragment } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import documentsAnimation from "../../../../animations/documentsAnimation/data";
import scaleAnimation from "../../../../animations/scaleAnimation/data.json";

import Animation from "../../../ui/Animation/Animation";

const useStyles = makeStyles((theme) => ({
  itemContainer: {
    maxWidth: "40em",
  },
}));

const DigitalDocumentsScale = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid item container direction="row" className={classes.itemContainer} md>
        <Grid item container direction="column" md>
          <Grid item>
            <Typography variant="h4">Digital Documents &amp; Data</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph>
              Reduce Errors. Reduce Waste. Reduce Costs.
            </Typography>
            <Typography variant="body1" paragraph>
              Billions are spent annually on the purchasing, printing, and
              distribution of paper. On top of the massive environmental impact
              this has, it causes harm to your bottom line as well.
            </Typography>
            <Typography variant="body1" paragraph>
              By utilizing digital forms and documents you can remove these
              obsolete expenses, accelerate your communication, and help the
              Earth.
            </Typography>
          </Grid>
        </Grid>
        <Grid item md>
          <Animation
            animationData={documentsAnimation}
            isStopped={true}
            style={{ maxHeight: 275, maxWidth: 275, minHeight: 250 }}
          />
        </Grid>
      </Grid>
      <Grid item container direction="row" className={classes.itemContainer} md>
        <Grid item md>
          <Animation
            animationData={scaleAnimation}
            isStopped={true}
            style={{ maxHeight: 260, maxWidth: 280 }}
          />
        </Grid>
        <Grid item container direction="column" md>
          <Grid item>
            <Typography variant="h4" align="right">
              Scale
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph align="right">
              Whether you’re a large brand, just getting started, or taking off
              right now, our application architecture ensures pain-free growth
              and reliability.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default DigitalDocumentsScale;

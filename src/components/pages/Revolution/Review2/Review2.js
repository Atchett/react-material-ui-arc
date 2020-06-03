import React, { Fragment } from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

import review from "../../../../assets/reviewIcon.svg";

const useStyles = makeStyles((theme) => ({
  revImage: {
    width: "100%",
  },
  titleText: {
    color: "#000",
    marginTop: "5em",
  },
  blockText: {
    color: "#fff",
    maxWidth: "20em",
    [theme.breakpoints.down("md")]: {
      maxWidth: "30em",
    },
  },
}));

const Review2 = (props) => {
  const { matchesMd } = props;
  const classes = useStyles();

  return (
    <Fragment>
      <Grid
        item
        container
        direction="column"
        alignItems={matchesMd ? "center" : undefined}
        lg
      >
        <Grid item>
          <Typography
            align={matchesMd ? "center" : undefined}
            variant="h4"
            gutterBottom
            className={classes.titleText}
          >
            Review
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            align={matchesMd ? "center" : undefined}
            variant="body1"
            paragraph
            className={classes.blockText}
          >
            A second round of review is essential to our goal of creating
            exactly what you want, exactly how you want it.
          </Typography>
          <Typography
            align={matchesMd ? "center" : undefined}
            variant="body1"
            paragraph
            className={classes.blockText}
          >
            This time we’ll be going over the finalized designs in another fully
            interactive demonstration. Again this gives you an opportunity to
            tweak things and make sure we get everything right the first time.
          </Typography>
        </Grid>
      </Grid>
      <Grid item lg style={{ alignSelf: "center" }}>
        <img src={review} alt="magnifying glass" className={classes.revImage} />
      </Grid>
    </Fragment>
  );
};

export default Review2;

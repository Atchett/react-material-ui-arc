import React, { Fragment } from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

import design from "../../../../assets/designIcon.svg";

const useStyles = makeStyles((theme) => ({
  desImage: {
    maxWidth: 1000,
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

const Design = (props) => {
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
            Design
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            align={matchesMd ? "center" : undefined}
            variant="body1"
            paragraph
            className={classes.blockText}
          >
            Using the mockups and notes taken during the consultation as guides,
            we will start ironing out what the final product will look like.
            This also involves using any brand material like fonts, colors, and
            logos to extend the experience you’re already familiar with.
          </Typography>
          <Typography
            align={matchesMd ? "center" : undefined}
            variant="body1"
            paragraph
            className={classes.blockText}
          >
            No aspect is superfluous, and care will be taken with every
            decision.
          </Typography>
        </Grid>
      </Grid>
      <Grid item lg style={{ alignSelf: "center" }}>
        <img
          src={design}
          alt="paintbrush leaving stroke of paint"
          className={classes.desImage}
        />
      </Grid>
    </Fragment>
  );
};

export default Design;

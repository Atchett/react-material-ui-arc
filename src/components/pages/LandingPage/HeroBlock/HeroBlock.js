import React from "react";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ButtonArrow from "../../../ui/ButtonArrow/ButtonArrow";
import LandingAnimation from "./LandingAnimation/LandingAnimation";

const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
  },
}));

const HeroBlock = () => {
  const classes = useStyles();
  return (
    <Grid container direction="row" justify="flex-end" alignItems="center">
      <Grid item sm>
        <Typography variant="h2" align="center">
          Bringing West Coast Technology
          <br /> to the Midwest
        </Typography>
        <Grid container direction="row">
          <Grid item>
            <Button variant="contained">Free Estimate</Button>
          </Grid>
          <Grid item>
            <Button variant="outlined">
              Learn More
              <ButtonArrow width={15} height={15} fill="red" />
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item sm className={classes.animation}>
        <LandingAnimation />
      </Grid>
    </Grid>
  );
};

export default HeroBlock;

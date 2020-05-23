import React from "react";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import ButtonArrow from "../../../ui/ButtonArrow/ButtonArrow";
import LandingAnimation from "./LandingAnimation/LandingAnimation";

const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: "1em",
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    height: 45,
    width: 145,
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
}));

const HeroBlock = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container direction="row" justify="flex-end" alignItems="center">
      <Grid item sm className={classes.heroTextContainer}>
        <Typography variant="h2" align="center">
          Bringing West Coast Technology
          <br /> to the Midwest
        </Typography>
        <Grid
          container
          direction="row"
          justify="center"
          className={classes.buttonContainer}
        >
          <Grid item>
            <Button variant="contained" className={classes.estimateButton}>
              Free Estimate
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" className={classes.learnButtonHero}>
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={15}
                height={15}
                fill={theme.palette.common.blue}
              />
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

import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import HeroBlock from "./HeroBlock/HeroBlock";

const useStyles = makeStyles((theme) => ({}));

const LandingPage = () => {
  const classes = useStyles();

  return (
    <Grid container direction="column">
      <Grid item>
        <HeroBlock />
      </Grid>
    </Grid>
  );
};

export default LandingPage;

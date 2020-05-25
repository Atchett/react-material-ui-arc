import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import HeroBlock from "./HeroBlock/HeroBlock";
import CustomSoftware from "./CustomSoftware/CustomSoftware";
import AppDevelopment from "./AppDevelopment/AppDevelopment";
import WebsiteDevelopment from "./WebsiteDevelopment/WebsiteDevelopment";
import Revolution from "./Revolution/Revolution";
import InformationBlock from "./InformationBlock/InformationBlock";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item>
        <HeroBlock theme={theme} />
      </Grid>
      <Grid item>
        <CustomSoftware theme={theme} matchesSm={matchesSm} />
      </Grid>
      <Grid item>
        <AppDevelopment theme={theme} matchesSm={matchesSm} />
      </Grid>
      <Grid item>
        <WebsiteDevelopment theme={theme} matchesSm={matchesSm} />
      </Grid>
      <Grid item>
        <Revolution theme={theme} />
      </Grid>
      <Grid item>
        <InformationBlock matchesXS={matchesXS} />
      </Grid>
    </Grid>
  );
};

export default LandingPage;

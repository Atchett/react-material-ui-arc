import React, { Fragment } from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import AboutCustomSoftware from "./AboutCustomSoftware/AboutCustomSoftware";
import Icons from "./Icons/Icons";
import DigitalDocumentsScale from "./DigitalDocumentsScale/DigitalDocumentsScale";
import RootCauseAnalysis from "./RootCauseAnalysis/RootCauseAnalysis";
import AutomationUIDesign from "./AutomationUIDesign/AutomationUIDesign";
import CallToAction from "../../pages/Reusable/CallToAction/CallToAction";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    padding: "2em 5em 10em 5em",
  },
  containerSpacing: {
    marginTop: "10em",
  },
}));

const CustomSoftware = (props) => {
  const { setValue, setSelectedIndex } = props;
  const classes = useStyles();
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Fragment>
      <Grid container direction="column" className={classes.mainContainer}>
        <Grid item container direction="row">
          <AboutCustomSoftware
            setValue={setValue}
            setSelectedIndex={setSelectedIndex}
          />
        </Grid>
        <Grid
          item
          container
          direction="row"
          justify="center"
          className={classes.containerSpacing}
        >
          <Icons />
        </Grid>
        <Grid
          item
          container
          direction="row"
          justify="space-between"
          className={classes.containerSpacing}
        >
          <DigitalDocumentsScale />
        </Grid>
        <Grid
          item
          container
          direction="row"
          className={classes.containerSpacing}
        >
          <RootCauseAnalysis />
        </Grid>
        <Grid
          item
          container
          direction="row"
          justify="space-between"
          className={classes.containerSpacing}
        >
          <AutomationUIDesign />
        </Grid>
      </Grid>
      <CallToAction theme={theme} matchesSm={matchesSm} setValue={setValue} />
    </Fragment>
  );
};

export default CustomSoftware;

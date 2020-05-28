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
    paddingRight: "5em",
    paddingLeft: "5em",
    paddingTop: "2em",
    paddingBottom: "10em",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "1em",
      paddingRight: "1.5em",
      paddingLeft: "1.5em",
    },
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
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Fragment>
      <Grid
        container
        direction="column"
        className={classes.mainContainer}
        wrap="nowrap"
      >
        <Grid
          item
          container
          direction="row"
          justify={matchesMd ? "center" : undefined}
        >
          <AboutCustomSoftware
            setValue={setValue}
            setSelectedIndex={setSelectedIndex}
            matchesMd={matchesMd}
          />
        </Grid>
        <Grid
          item
          container
          direction="row"
          justify="center"
          className={classes.containerSpacing}
        >
          <Icons matchesSm={matchesSm} />
        </Grid>
        <Grid
          item
          container
          direction={matchesMd ? "column" : "row"}
          alignItems={matchesMd ? "center" : undefined}
          justify="space-between"
          className={classes.containerSpacing}
        >
          <DigitalDocumentsScale matchesMd={matchesMd} matchesSm={matchesSm} />
        </Grid>
        <Grid
          item
          container
          direction="row"
          className={classes.containerSpacing}
          wrap="nowrap"
        >
          <RootCauseAnalysis matchesSm={matchesSm} />
        </Grid>
        <Grid
          item
          container
          direction={matchesMd ? "column" : "row"}
          alignItems={matchesMd ? "center" : undefined}
          justify="space-between"
          className={classes.containerSpacing}
        >
          <AutomationUIDesign matchesMd={matchesMd} matchesSm={matchesSm} />
        </Grid>
      </Grid>
      <CallToAction theme={theme} matchesSm={matchesSm} setValue={setValue} />
    </Fragment>
  );
};

export default CustomSoftware;

import React from "react";
import { Link } from "react-router-dom";

import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import ButtonArrow from "../../../ui/ButtonArrow/ButtonArrow";
import websiteIcon from "../../../../assets/websiteIcon.svg";

const useStyles = makeStyles((theme) => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    marginBottom: "1em",
  },
  learnButtonSpan: {
    marginRight: 10,
  },
  websiteContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
  websiteText: {
    marginLeft: "5em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
      textAlign: "center",
    },
  },
  subtitle: {
    marginBottom: "1em",
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
}));

const WebsiteDevelopment = (props) => {
  const { matchesSm, theme, setValue, setSelectedIndex } = props;
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      className={classes.websiteContainer}
      justify={matchesSm ? "center" : undefined}
    >
      <Grid item className={classes.websiteText}>
        <Typography variant="h4">Website Development</Typography>
        <Typography variant="subtitle1">
          Reach More. Discover More. Sell More.
        </Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>
          Optimized for search engines, built for speed.
        </Typography>
        <Button
          variant="outlined"
          className={classes.learnButton}
          component={Link}
          to="/websites"
          onClick={() => {
            setValue(1);
            setSelectedIndex(3);
          }}
        >
          <span className={classes.learnButtonSpan}>Learn More</span>
          <ButtonArrow
            width={10}
            height={10}
            fill={theme.palette.common.blue}
          />
        </Button>
      </Grid>
      <Grid item>
        <img alt="Website Icon" src={websiteIcon} className={classes.icon} />
      </Grid>
    </Grid>
  );
};

export default WebsiteDevelopment;

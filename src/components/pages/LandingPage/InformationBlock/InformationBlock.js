import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import ButtonArrow from "../../../ui/ButtonArrow/ButtonArrow";
import infoBackground from "../../../../assets/infoBackground.svg";

const useStyles = makeStyles((theme) => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    marginBottom: "1em",
    color: "white",
    borderColor: "white",
  },
  learnButtonSpan: {
    marginRight: 10,
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  infoBlockPosition: {
    position: "absolute",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
  infoBlockLeft: {
    marginLeft: "5em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  infoBlockRight: {
    marginRight: "5em",
    [theme.breakpoints.down("sm")]: {
      marginRight: "2em",
    },
    textAlign: "right",
    [theme.breakpoints.down("xs")]: {
      marginRight: 0,
      textAlign: "center",
    },
  },
  infoTextBlock: {
    height: "80em",
  },
  infoHeader: {
    color: "white",
  },
}));

const InformationBlock = (props) => {
  const { matchesXS } = props;
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      className={classes.infoTextBlock}
    >
      <Grid
        item
        container
        className={classes.infoBlockPosition}
        direction={matchesXS ? "column" : "row"}
        spacing={matchesXS ? 10 : 0}
      >
        <Grid item sm className={classes.infoBlockLeft}>
          <Grid container direction="column">
            <Typography variant="h2" className={classes.infoHeader}>
              About Us
            </Typography>
            <Typography variant="subtitle2">Let's get personal</Typography>
            <Grid item>
              <Button variant="outlined" className={classes.learnButton}>
                <span className={classes.learnButtonSpan}>Learn More</span>
                <ButtonArrow width={10} height={10} fill="white" />
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm className={classes.infoBlockRight}>
          <Grid container direction="column">
            <Typography variant="h2" className={classes.infoHeader}>
              Contact Us
            </Typography>
            <Typography variant="subtitle2">
              Say hello!{" "}
              <span role="img" aria-label="waving hand">
                👋
              </span>
            </Typography>
            <Grid item>
              <Button variant="outlined" className={classes.learnButton}>
                <span className={classes.learnButtonSpan}>Learn More</span>
                <ButtonArrow width={10} height={10} fill="white" />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div className={classes.infoBackground} />
    </Grid>
  );
};

export default InformationBlock;

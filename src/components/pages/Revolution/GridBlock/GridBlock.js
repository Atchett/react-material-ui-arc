import React from "react";
import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  rowContainer: {
    paddingRight: "5em",
    paddingLeft: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingRight: "1.5em",
      paddingLeft: "1.5em",
    },
  },
  colourBlock: {
    minHeight: "90em",
  },
}));

const GridBlock = (props) => {
  const { matchesMd, blockColour } = props;
  const classes = useStyles();

  return (
    <Grid
      item
      container
      direction={matchesMd ? "column" : "row"}
      className={clsx(classes.rowContainer, classes.colourBlock)}
      style={{ backgroundColor: `${blockColour}` }}
    >
      {props.children}
    </Grid>
  );
};

export default GridBlock;

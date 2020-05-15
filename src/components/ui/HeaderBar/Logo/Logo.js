import React from "react";
import { makeStyles } from "@material-ui/styles";

import logo from "../../../../assets/logo.svg";

const useStyles = makeStyles((theme) => ({
  logo: {
    height: "7em",
  },
}));

const Logo = () => {
  const classes = useStyles();

  return <img src={logo} alt="Logo" className={classes.logo} />;
};

export default Logo;

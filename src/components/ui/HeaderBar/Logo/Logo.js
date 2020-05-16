import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";

import logo from "../../../../assets/logo.svg";

const useStyles = makeStyles((theme) => ({
  logo: {
    height: "8em",
  },
  logoContainer: {
    padding: 0,
  },
}));

const Logo = (props) => {
  const classes = useStyles();

  return (
    <Button
      component={Link}
      to="/"
      className={classes.logoContainer}
      onClick={() => props.clickToHome(0)}
    >
      <img src={logo} alt="Logo" className={classes.logo} />
    </Button>
  );
};

export default Logo;

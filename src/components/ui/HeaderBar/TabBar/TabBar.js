import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";

import Logo from "../Logo/Logo";

const useStyles = makeStyles((theme) => ({
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
  },
}));

const TabBar = () => {
  const classes = useStyles();
  const [tabValue, setTabValue] = useState(0);

  const tabChangeHandler = (value) => {
    setTabValue(value);
  };

  useEffect(() => {
    const pathName = window.location.pathname;
    if (pathName === "/" && tabValue !== 0) {
      setTabValue(0);
    }
    if (pathName === "/services" && tabValue !== 1) {
      setTabValue(1);
    }
    if (pathName === "/revolution" && tabValue !== 2) {
      setTabValue(2);
    }
    if (pathName === "/about" && tabValue !== 3) {
      setTabValue(3);
    }
    if (pathName === "/contact" && tabValue !== 4) {
      setTabValue(4);
    }
    if (pathName === "/estimate" && tabValue !== 5) {
      setTabValue(5);
    }
  }, [tabValue]);

  return (
    <Fragment>
      <Logo clickToHome={tabChangeHandler} />
      <Tabs
        value={tabValue}
        onChange={tabChangeHandler}
        className={classes.tabContainer}
        indicatorColor="primary"
      >
        <Tab className={classes.tab} component={Link} to="/" label="Home" />
        <Tab
          className={classes.tab}
          component={Link}
          to="/services"
          label="Services"
        />
        <Tab
          className={classes.tab}
          component={Link}
          to="/revolution"
          label="The Revolution"
        />
        <Tab
          className={classes.tab}
          component={Link}
          to="/about"
          label="About Us"
        />
        <Tab
          className={classes.tab}
          component={Link}
          to="/contact"
          label="Contact Us"
        />
      </Tabs>
      <Button variant="contained" color="secondary" className={classes.button}>
        Free Estimate
      </Button>
    </Fragment>
  );
};

export default TabBar;

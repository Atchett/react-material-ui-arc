import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    fontFamily: "Raleway",
    textTransform: "none",
    fontWeight: "700",
    fontSize: "1rem",
  },
}));

const TabBar = () => {
  const classes = useStyles();
  return (
    <Tabs className={classes.tabContainer}>
      <Tab className={classes.tab} label="Home" />
      <Tab className={classes.tab} label="Services" />
      <Tab className={classes.tab} label="The Revolution" />
      <Tab className={classes.tab} label="About Us" />
      <Tab className={classes.tab} label="Contact Us" />
    </Tabs>
  );
};

export default TabBar;

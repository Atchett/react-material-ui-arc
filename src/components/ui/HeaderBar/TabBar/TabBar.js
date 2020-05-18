import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

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
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
    borderRadius: "0px",
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawerIcon: {
    height: "50px",
    width: "50px",
  },
}));

const TabBar = () => {
  const classes = useStyles();
  const [tabValue, setTabValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const tabChangeHandler = (newValue) => {
    setTabValue(newValue);
  };

  const handleMenuClick = (e) => {
    setAnchorEl(e.currentTarget);
    setMenuOpen(true);
  };

  const handleMenuClose = (e) => {
    setAnchorEl(null);
    setMenuOpen(false);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setMenuOpen(false);
    setSelectedMenuIndex(i);
  };

  const menuOptions = [
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Custom Software Development",
      link: "/customsoftware",
    },
    {
      name: "Mobile App Development",
      link: "/mobileapps",
    },
    {
      name: "Website Development",
      link: "/websites",
    },
  ];

  useEffect(() => {
    const checkTabVal = (tabVal, setMenuVal = false, menuVal = 0) => {
      if (tabValue !== tabVal) {
        setTabValue(tabVal);
        if (setMenuVal) {
          setSelectedMenuIndex(menuVal);
        }
      }
    };
    const pathName = window.location.pathname;
    switch (pathName) {
      case "/":
        checkTabVal(0);
        break;
      case "/services":
        checkTabVal(1, true);
        break;
      case "/customsoftware":
        checkTabVal(1, true, 1);
        break;
      case "/mobileapps":
        checkTabVal(1, true, 2);
        break;
      case "/websites":
        checkTabVal(1, true, 3);
        break;
      case "/revolution":
        checkTabVal(2);
        break;
      case "/about":
        checkTabVal(3);
        break;
      case "/contact":
        checkTabVal(4);
        break;
      case "/estimate":
        checkTabVal(5);
        break;
      default:
        break;
    }
  }, [tabValue]);

  const tabs = (
    <Fragment>
      <Tabs
        value={tabValue}
        onChange={tabChangeHandler}
        className={classes.tabContainer}
        indicatorColor="primary"
      >
        <Tab className={classes.tab} component={Link} to="/" label="Home" />
        <Tab
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup={anchorEl ? true : undefined}
          className={classes.tab}
          component={Link}
          onMouseOver={(event) => handleMenuClick(event)}
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
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={handleMenuClose}
        classes={{ paper: classes.menu }}
        MenuListProps={{ onMouseLeave: handleMenuClose }}
        elevation={0}
      >
        {menuOptions.map((option, i) => (
          <MenuItem
            key={option}
            component={Link}
            to={option.link}
            classes={{ root: classes.menuItem }}
            onClick={(e) => {
              handleMenuItemClick(e, i);
              setTabValue(1);
              handleMenuClose();
            }}
            selected={i === selectedMenuIndex && tabValue === 1}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </Fragment>
  );

  const drawer = (
    <Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onOpen={() => setDrawerOpen(true)}
      >
        <List>
          <ListItem component={Link} to="/">
            <ListItemText disableTypography>Home</ListItemText>
          </ListItem>
          <ListItem component={Link} to="/services">
            <ListItemText disableTypography>Services</ListItemText>
          </ListItem>
          <ListItem component={Link} to="/revolution">
            <ListItemText disableTypography>The Revolution</ListItemText>
          </ListItem>
          <ListItem component={Link} to="/about">
            <ListItemText disableTypography>About Us</ListItemText>
          </ListItem>
          <ListItem component={Link} to="/contact">
            <ListItemText disableTypography>Contact Us</ListItemText>
          </ListItem>
          <ListItem component={Link} to="/estimate">
            <ListItemText disableTypography>Free Estimate</ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        onClick={() => setDrawerOpen(!drawerOpen)}
        disableRipple
        className={classes.drawerIconContainer}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </Fragment>
  );

  return (
    <Fragment>
      <Logo clickToHome={tabChangeHandler} />
      {matches ? drawer : tabs}
    </Fragment>
  );
};

export default TabBar;

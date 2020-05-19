import React, { Fragment, useState, useEffect } from "react";

import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import TabLinks from "./TabLinks/TabLinks";
import ResponsiveDrawer from "./ResponsiveDrawer/ResponsiveDrawer";
import SubMenu from "./SubMenu/SubMenu";

import Logo from "../Logo/Logo";

const useStyles = makeStyles((theme) => ({
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
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

  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const drawerOpenHandler = (isOpen) => {
    setDrawerOpen(isOpen);
  };

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
      activeIndex: 1,
      selectedIndex: 0,
    },
    {
      name: "Custom Software Development",
      link: "/customsoftware",
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: "Mobile App Development",
      link: "/mobileapps",
      activeIndex: 1,
      selectedIndex: 2,
    },
    {
      name: "Website Development",
      link: "/websites",
      activeIndex: 1,
      selectedIndex: 3,
    },
  ];

  const routes = [
    {
      name: "Home",
      link: "/",
      activeIndex: 0,
    },
    {
      name: "Services",
      link: "/services",
      activeIndex: 1,
      ariaOwns: anchorEl ? "simple-menu" : undefined,
      ariaPopup: anchorEl ? true : undefined,
      mouseOver: (event) => handleMenuClick(event),
    },
    {
      name: "The Revolution",
      link: "/revolution",
      activeIndex: 2,
    },
    {
      name: "About Us",
      link: "/about",
      activeIndex: 3,
    },
    {
      name: "Contact Us",
      link: "/contact",
      activeIndex: 4,
    },
  ];

  useEffect(() => {
    const pathName = window.location.pathname;

    [...menuOptions, ...routes].forEach((route) => {
      switch (pathName) {
        case `${route.link}`:
          if (tabValue !== route.activeIndex) {
            tabChangeHandler(route.activeIndex);
            if (
              route.selectedIndex &&
              route.selectedIndex !== selectedMenuIndex
            ) {
              setSelectedMenuIndex(route.selectedIndex);
            }
          }
          break;
        default:
          break;
      }
    });
  }, [tabValue, menuOptions, routes, selectedMenuIndex]);

  const tabs = (
    <Fragment>
      <TabLinks
        tabValue={tabValue}
        tabChangeHandler={tabChangeHandler}
        routes={routes}
      />
      <Button variant="contained" color="secondary" className={classes.button}>
        Free Estimate
      </Button>
      <SubMenu
        anchorEl={anchorEl}
        menuOpen={menuOpen}
        handleMenuClose={handleMenuClose}
        menuOptions={menuOptions}
        handleMenuItemClick={handleMenuItemClick}
        selectedMenuIndex={selectedMenuIndex}
        tabValue={tabValue}
        tabChangeHandler={tabChangeHandler}
      />
    </Fragment>
  );

  const drawer = (
    <Fragment>
      <ResponsiveDrawer
        drawerOpen={drawerOpen}
        drawerOpenHandler={drawerOpenHandler}
        tabChangeHandler={tabChangeHandler}
        routes={routes}
        tabValue={tabValue}
      />
      <IconButton
        onClick={() => drawerOpenHandler(!drawerOpen)}
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

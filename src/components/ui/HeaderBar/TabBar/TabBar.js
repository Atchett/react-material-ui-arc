import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

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
}));

const TabBar = () => {
  const classes = useStyles();
  const [tabValue, setTabValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(0);

  const tabChangeHandler = (value) => {
    setTabValue(value);
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
        {/* <MenuItem
          onClick={() => {
            handleMenuClose();
            setTabValue(1);
          }}
          component={Link}
          to="/services"
          classes={{ root: classes.menuItem }}
        >
          Services
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleMenuClose();
            setTabValue(1);
          }}
          component={Link}
          to="/customsoftware"
          classes={{ root: classes.menuItem }}
        >
          Custom Software Development
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleMenuClose();
            setTabValue(1);
          }}
          component={Link}
          to="/mobileapps"
          classes={{ root: classes.menuItem }}
        >
          Mobile App Development
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleMenuClose();
            setTabValue(1);
          }}
          component={Link}
          to="/websites"
          classes={{ root: classes.menuItem }}
        >
          Website Development
        </MenuItem> */}
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
};

export default TabBar;

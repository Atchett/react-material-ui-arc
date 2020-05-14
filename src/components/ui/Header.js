import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import ElevationScroll from "./ElevationScroll/ElevationScroll";

const Header = (props) => {
  return (
    <ElevationScroll>
      <AppBar position="fixed">
        <Toolbar>Arc Development</Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};

export default Header;

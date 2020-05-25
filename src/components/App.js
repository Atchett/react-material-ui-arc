import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import theme from "./ui/Theme/Theme";

import Header from "./ui/Header/Header";
import Footer from "./ui/Footer/Footer";
import LandingPage from "./pages/LandingPage/LandingPage";

const App = () => {
  const [tabValue, setTabValue] = useState(0);
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={tabValue}
          setValue={setTabValue}
          selectedIndex={selectedMenuIndex}
          setSelectedIndex={setSelectedMenuIndex}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <LandingPage
                {...props}
                setValue={setTabValue}
                setSelectedIndex={setSelectedMenuIndex}
              />
            )}
          />
          <Route exact path="/services" component={() => <div>Services</div>} />
          <Route
            exact
            path="/customsoftware"
            component={() => <div>Custom Software</div>}
          />
          <Route
            exact
            path="/mobileapps"
            component={() => <div>iOS/Android App Development</div>}
          />
          <Route exact path="/websites" component={() => <div>Websites</div>} />
          <Route
            exact
            path="/revolution"
            component={() => <div>The Revolution</div>}
          />
          <Route exact path="/about" component={() => <div>About Us</div>} />
          <Route
            exact
            path="/contact"
            component={() => <div>Contact Us</div>}
          />
          <Route exact path="/estimate" component={() => <div>Estimate</div>} />
        </Switch>
        <Footer
          selectedIndex={selectedMenuIndex}
          setSelectedIndex={setSelectedMenuIndex}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

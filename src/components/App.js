import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./ui/Theme/Theme";

import Header from "./ui/Header";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      hello
    </ThemeProvider>
  );
};

export default App;

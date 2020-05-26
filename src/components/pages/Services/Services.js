import React from "react";

import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";

import CustomSoftware from "../Reusable/CustomSoftware/CustomSoftware";
import AppDevelopment from "../Reusable/AppDevelopment/AppDevelopment";
import WebsiteDevelopment from "../Reusable/WebsiteDevelopment/WebsiteDevelopment";

const Services = (props) => {
  const { setValue, setSelectedIndex } = props;
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container direction="column">
      <Grid item>
        <AppDevelopment
          theme={theme}
          matchesSm={matchesSm}
          setValue={setValue}
          setSelectedIndex={setSelectedIndex}
          floatRight={true}
        />
      </Grid>
      <Grid item>
        <CustomSoftware
          theme={theme}
          matchesSm={matchesSm}
          setValue={setValue}
          setSelectedIndex={setSelectedIndex}
          floatRight={false}
        />
      </Grid>
      <Grid item>
        <WebsiteDevelopment
          theme={theme}
          matchesSm={matchesSm}
          setValue={setValue}
          setSelectedIndex={setSelectedIndex}
          floatRight={true}
        />
      </Grid>
    </Grid>
  );
};

export default Services;

import React, { Fragment, useState } from "react";
import { cloneDeep } from "lodash";

import { Grid, Typography, Button, IconButton } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";

import Animation from "../../ui/Animation/Animation";
import estimateAnimation from "../../../animations/estimateAnimation/data.json";

import {
  defaultQuestions,
  softwareQuestions,
  websiteQuestions,
} from "./questions";

import check from "../../../assets/check.svg";
import send from "../../../assets/send.svg";
import backArrow from "../../../assets/backArrow.svg";
import backArrowDisabled from "../../../assets/backArrowDisabled.svg";
import forwardArrow from "../../../assets/forwardArrow.svg";
import forwardArrowDisabled from "../../../assets/forwardArrowDisabled.svg";

const useStyles = makeStyles((theme) => ({
  icon: {
    width: "12em",
    height: "12em",
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 50,
    width: 225,
    fontSize: "1.25rem",
    marginTop: "5em",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));

const Estimate = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [questions, setQuestions] = useState(softwareQuestions);

  const nextQuestion = () => {
    const newQuestions = cloneDeep(questions);
    const currentlyActive = newQuestions.filter((question) => question.active);
    const activeIndex = currentlyActive[0].id - 1;
    const nextIndex = activeIndex + 1;
    newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
    newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };
    setQuestions(newQuestions);
    navigationPrevDisabled();
  };

  const prevQuestion = () => {
    const newQuestions = cloneDeep(questions);
    const currentlyActive = newQuestions.filter((question) => question.active);
    const activeIndex = currentlyActive[0].id - 1;
    const nextIndex = activeIndex - 1;
    newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
    newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };
    setQuestions(newQuestions);
    navigationNextDisabled();
  };

  const navigationPrevDisabled = () => {
    const currentlyActive = questions.filter((question) => question.active);
    if (currentlyActive[0].id === 1) {
      return true;
    }
    return false;
  };

  const navigationNextDisabled = () => {
    const currentlyActive = questions.filter((question) => question.active);
    if (currentlyActive[0].id === questions[questions.length - 1].id) {
      return true;
    }
    return false;
  };

  const handleSelect = (id) => {
    const newQuestions = cloneDeep(questions);
    const currentlyActive = newQuestions.filter((question) => question.active);
    const activeIndex = currentlyActive[0].id - 1;
    const newSelected = newQuestions[activeIndex].options[id - 1];

    newSelected.selected = !newSelected.selected;

    setQuestions(newQuestions);
  };

  return (
    <Grid container direction="row">
      <Grid item container direction="column" lg>
        <Grid item style={{ marginTop: "2em", marginLeft: "5em" }}>
          <Typography variant="h2">Estimate</Typography>
        </Grid>
        <Grid
          item
          style={{ marginRight: "10em", maxWidth: "50em", marginTop: "7.5em" }}
        >
          <Animation
            animationData={estimateAnimation}
            height="100%"
            width="100%"
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        lg
        style={{ marginRight: "2em", marginBottom: "25em" }}
      >
        {questions
          .filter((question) => question.active)
          .map((question, index) => (
            <Fragment key={`${question.id}-${index}`}>
              <Grid item>
                <Typography
                  variant="h2"
                  align="center"
                  style={{
                    fontSize: "2.25rem",
                    fontWeight: 500,
                    marginTop: "5em",
                    lineHeight: "1.25",
                  }}
                >
                  {question.title}
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  style={{ marginBottom: "2.5em" }}
                  gutterBottom
                >
                  {question.subtitle}
                </Typography>
              </Grid>
              <Grid item container>
                {question.options.map((option, index) => (
                  <Grid
                    key={`${option.id}-${index}`}
                    item
                    container
                    direction="column"
                    md
                    component={Button}
                    onClick={() => handleSelect(option.id)}
                    style={{
                      display: "grid",
                      textTransform: "none",
                      borderRadius: 0,
                      backgroundColor: option.selected
                        ? theme.palette.common.orange
                        : null,
                    }}
                  >
                    <Grid item style={{ maxWidth: "14em" }}>
                      <Typography
                        variant="h6"
                        align="center"
                        style={{ marginBottom: "1em" }}
                      >
                        {option.title}
                      </Typography>
                      <Typography variant="caption" align="center">
                        {option.subtitle}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <img
                        src={option.icon}
                        alt={option.iconAlt}
                        className={classes.icon}
                      />
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </Fragment>
          ))}

        <Grid
          item
          container
          justify="space-between"
          style={{ width: "18em", marginTop: "3em" }}
        >
          <Grid item>
            <IconButton
              disabled={navigationPrevDisabled()}
              onClick={prevQuestion}
            >
              <img
                src={navigationPrevDisabled() ? backArrowDisabled : backArrow}
                alt="previous question"
              />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              disabled={navigationNextDisabled()}
              onClick={nextQuestion}
            >
              <img
                src={
                  navigationNextDisabled() ? forwardArrowDisabled : forwardArrow
                }
                alt="next question"
              />
            </IconButton>
          </Grid>
        </Grid>
        <Grid item>
          <Button variant="contained" className={classes.estimateButton}>
            Get Estimate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Estimate;

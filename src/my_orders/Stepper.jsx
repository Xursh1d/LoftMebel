import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "65%",
    [theme.breakpoints.down("sm")]: {
      width:"100%",

    },
  },
  label:{
    [theme.breakpoints.down("sm")]: {
      fontSize:"11px !important"
    },
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ["Shipping", "Payment"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return "Select campaign settings...";
    case 1:
      return "What is an ad group anyways?";
    default:
      return "Unknown step";
  }
}

export default function HorizontalLinearStepper({
  activeStep,
  setActiveStep,
  skipped,
  setSkipped,
  isStepSkipped,
}) {
  const classes = useStyles();

  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1;
  };

  //   const handleSkip = () => {
  //     if (!isStepOptional(activeStep)) {
  //       throw new Error("You can't skip a step that isn't optional.");
  //     }

  //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //     setSkipped((prevSkipped) => {
  //       const newSkipped = new Set(prevSkipped.values());
  //       newSkipped.add(activeStep);
  //       return newSkipped;
  //     });
  //   };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel className={classes.label} {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </div>
  );
}

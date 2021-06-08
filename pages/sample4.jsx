import React, {useState, useEffect} from "react";
import { Hero, Footer, Step1, Step2, Step3 } from "../components/index";
import { MyContainer, MyContentTitle, MyContentContainer, MyButton, SignUpCardContainer } from "../components/UIkit/index";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {useSession, getSession} from 'next-auth/client'
import {getProfileInfo} from '../lib/auth'
// for test from branch
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: "orange",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const getSteps = () => {
  return ["Privacy Policy", "Sign up with Social Media", "Input Your Information"];
};

const getStepContent = (stepIndex) => {
  switch (stepIndex) {
    case 0:
      return 'Select campaign settings...';
    case 1:
      return 'What is an ad group anyways?';
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown stepIndex';
  }
}

const sample4 = (props) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const [session] = useSession()

  useEffect(() => {
    console.log("SESSION IN CLIENT IS: ", session);
  }, [])


  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <MyContainer>
      <Hero />
      <MyContentContainer>
        <MyContentTitle title="SIGN UP" />
        <div className={classes.root}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>All steps completed</Typography>
              <Button onClick={handleReset}>Reset</Button>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
              <div>
              </div>
            </div>
          )}
        </div>
      </div>
    </MyContentContainer>
    <Step1 />
    <Step2 />
      {/* {
        props.username ? (
          <div>HELLO {props.username}</div>
          ) : (
          <div>UNKNOWN</div>
        )
      } */}
    <Step3 userInfo={props} />
    </MyContainer>
  );
};

export const getServerSideProps = async (context) => {
    const profileData = await getProfileInfo(context)

    return {
      props: {
        ...profileData,
      },
    };
  };

export default sample4;

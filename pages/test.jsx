import React, {useEffect} from 'react'
import {Stepper, StepConnector, Step, StepLabel} from '@material-ui/core'
import classes from '../styles/test.module.scss'
import axios from 'axios'
// import StepConnector from '@material-ui/core/StepConnector'


const test = () => {
  const steps = ['Sign up with Social Media', 'Input your information']

  useEffect(async() => {
    const name = 'hiiiii'
    const url = 'http://api.openweathermap.org/data/2.5/weather?id=524901&lang=en&appid=24e5f02416d4df14ee3c7e8125885faa'
    const {data} = await axios.get(url)
    await console.log(data.weather)
  }, [])

  return (
    // <div style={{backgroundColor: "red"}}>
    <div className={classes.root}>
      <Stepper
        className={classes.stepper}
        // alternativeLabel
        // activeStep={activeStep}
        // connector={<StepperConnector claszsName={classes.connector} />}
        connector={<StepConnector />}
      >
        {steps.map((label) => (
          <Step key={label} className={classes.step}>
            <StepLabel
              // className={classes.labelStyle}
              // StepIconComponent={StepIcon}
              className={classes.stepLabel}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  )
}

export default test

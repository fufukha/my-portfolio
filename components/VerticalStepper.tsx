import {
  Button,
  createStyles,
  makeStyles,
  Paper,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Theme,
  Typography,
} from '@material-ui/core'
import React, { useEffect, useRef } from 'react'
import { StepData } from '../types'
import ProjectLinks from './ProjectLinks'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '80%',
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
    arabicText: {
      fontFamily:
        'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif',
    },
    text: {
      '& > span': {
        color: theme.palette.primary.main,
      },
      '& svg': {
        fontSize: '1.2rem',
        verticalAlign: 'text-bottom',
      },
    },
  })
)

interface VerticalStepperProps {
  steps: StepData[]
}

const VerticalStepper = ({ steps }: VerticalStepperProps) => {
  const [activeStep, setActiveStep] = React.useState(0)
  const stepLabelRef = useRef<null | HTMLSpanElement>(null)

  useEffect(() => {
    if(stepLabelRef.current) {
      stepLabelRef.current.scrollIntoView({behavior: "smooth", block: 'center'})
    }
  })

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation='vertical'>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel ref={stepLabelRef}>{step.label}</StepLabel>
            <StepContent>
              <Typography className={classes.text}>{step.content}</Typography>
              {step.arabicContent && (
                <Typography className={classes.arabicText} lang='ar'>
                  {step.arabicContent}
                </Typography>
              )}
              <ProjectLinks
                homepageUrl={step.homepageUrl}
                url={step.url}
                size='small'
              />
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant='contained'
                    color='primary'
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  )
}

export default VerticalStepper

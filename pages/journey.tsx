import { makeStyles, Paper, Typography } from '@material-ui/core'
import Meta from '../components/Meta'
import VerticalStepper from '../components/VerticalStepper'
import { steps } from '../utilis/projectsdata'

const useStyles = makeStyles({
  heading: {
    marginBottom: '16px',
  },
})

const journey = () => {
  const classes = useStyles()

  return (
    <>
      <Meta title={'My Journey'} />
      <Typography className={classes.heading} variant='h1' component='h1'>
        My Journey
      </Typography>
      <Paper elevation={0}>
        <VerticalStepper steps={steps} />
      </Paper>
    </>
  )
}

export default journey

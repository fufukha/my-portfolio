import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import VerticalStepper from '../components/VerticalStepper'
import { steps } from '../utilis/projectsdata'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Meta from '../components/Meta'

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

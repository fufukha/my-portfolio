import { makeStyles, Paper, Typography } from '@material-ui/core'
import { motion } from 'framer-motion'
import { fadeInUp, stagger } from '../animation'
import Meta from '../components/Meta'
import VerticalStepper from '../components/VerticalStepper'
import { steps } from '../utilis'

const useStyles = makeStyles({
  heading: {
    marginBottom: '35px',
  },
})

const journey = () => {
  const classes = useStyles()

  return (
    <>
      <Meta title={'My Journey'} />
      <motion.section variants={stagger}>
        <motion.header variants={fadeInUp}>
          <Typography className={classes.heading} variant='h1' component='h1'>
            My Journey
          </Typography>
        </motion.header>
        <motion.div variants={fadeInUp}>
          <Paper elevation={0}>
            <VerticalStepper steps={steps} />
          </Paper>
        </motion.div>
      </motion.section>
    </>
  )
}

export default journey

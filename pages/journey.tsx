import Paper from '@material-ui/core/Paper'
import VerticalStepper from '../components/VerticalStepper'
import { steps } from '../utilis/projectsdata'

const journey = () => {
  return (
    <Paper elevation={0}>
      <VerticalStepper steps={steps} />
    </Paper>
  )
}

export default journey

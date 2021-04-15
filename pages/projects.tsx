import Typography from '@material-ui/core/Typography'
import Meta from '../components/Meta'
import Repo from '../components/Repo'

const projects = () => {
  return (
    <>
      <Meta title={'projects'} />
      <section>
        <Typography variant='h1' component='h1' gutterBottom>Experience</Typography>
      </section>
      <section>
        <Typography variant='h1' component='h2' gutterBottom>Projects</Typography>
        <Repo />
      </section>
    </>
  )
}

export default projects

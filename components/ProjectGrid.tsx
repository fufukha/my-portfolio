import { makeStyles, Grid } from '@material-ui/core'
import Repo from './Repo'
import { motion } from 'framer-motion'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '55px',
  },
  repo: {
    '&:nth-child(2) p': {
      '@media screen and (min-width: 960px)': {
        height: '108px',
      },
    },
    '&:nth-child(odd)': {
      transform: 'translateY(-35px)',
    },
  },
})

type Project = {
  title: string
  language: string
  imageUrl: string
  description: string
  topics: string[]
  index: number
}

interface GridWrapProps {
  projectArray: Project[]
}

const ProjectGrid = ({ projectArray }: GridWrapProps) => {
  const classes = useStyles()

  const projects = projectArray.map((repo, i) => (
    <Grid
      item
      md={6}
      sm={9}
      key={i}
      className={classes.repo}
      component={motion.div}
      whileHover={{ scale: 1.1 }}
    >
      <Repo
        key={i}
        language={repo.language}
        title={repo.title}
        imageUrl={repo.imageUrl}
        description={repo.description}
        topics={repo.topics}
        isDimmed={false}
        index={repo.index}
      />
    </Grid>
  ))
  return (
    <Grid container spacing={3} className={classes.root}>
      {projects}
    </Grid>
  )
}

export default ProjectGrid

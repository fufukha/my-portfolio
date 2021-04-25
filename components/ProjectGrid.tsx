import { Grid, makeStyles } from '@material-ui/core'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Repo from './Repo'
import { IProject } from '../types'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '20px',
  },
  repo: {
    position: 'relative',
    '&:nth-child(2) p': {
      '@media screen and (min-width: 960px)': {
        height: '108px',
      },
    },
  },
})

interface ProjectGridProps {
  projectArray: IProject[]
}

const ProjectGrid = ({ projectArray }: ProjectGridProps) => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)
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
      onHoverStart={() => setHoverIndex(i)}
      onHoverEnd={() => setHoverIndex(null)}
    >
      <Repo
        key={i}
        language={repo.language}
        title={repo.title}
        imageUrl={repo.imageUrl}
        description={repo.description}
        topics={repo.topics}
        index={i}
        hoverIndex={hoverIndex}
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

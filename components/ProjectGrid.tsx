import { Grid, makeStyles } from '@material-ui/core'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Repo from './Repo'
import { IProject } from '../types'
import { stagger, fadeInUp } from '../animation'

const useStyles = makeStyles({
  repo: {
    position: 'relative',
    '& > #shortlinkclient > .MuiCardContent-root > p': {
      '@media screen and (min-width: 960px)': {
        minHeight: '85px',
      },
    },
    '& > #liakos > .MuiCardContent-root > p': {
      '@media screen and (min-width: 960px)': {
        minHeight: '80px',
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
      variants={fadeInUp}
      whileHover={{ scale: 1.1, zIndex: 9 }}
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
        url={repo.url}
        homepageUrl={repo.homepageUrl}
      />
    </Grid>
  ))

  return (
    <Grid
      container
      spacing={3}
      wrap='wrap'
      variants={stagger}
      component={motion.div}
    >
      {projects}
    </Grid>
  )
}

export default ProjectGrid

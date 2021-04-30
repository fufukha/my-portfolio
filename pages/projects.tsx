import { makeStyles, Typography } from '@material-ui/core'
import { motion } from 'framer-motion'
import { GetStaticProps } from 'next'
import { fadeInUp, stagger } from '../animation'
import Collaboration from '../components/Collaboration'
import ProjectGrid from '../components/ProjectGrid'
import Meta from '../components/Meta'
import { viewer } from '../config'
import apolloClient from '../lib/apolloClient'
import { PINNED_REPOSITORIES } from '../lib/apolloClient/queries'
import { Repository, IProject } from '../types'
import { dataVisualization } from '../utilis/projectsdata'
import { getImgUrl, getLang, getTopics } from '../utilis/index'

const useStyles = makeStyles({
  heading: {
    marginBottom: '35px',
  },
})

type ProjectProps = {
  repositories: Repository[]
}

const projects = ({ repositories }: ProjectProps) => {
  const sortedRepos = repositories.reduce(
    (acc: { collabsRepos: Repository[]; projsRepos: Repository[] }, cv) => {
      if (cv.owner.login !== viewer) {
        acc.collabsRepos.push(cv)
      } else {
        acc.projsRepos.push(cv)
      }
      return acc
    },
    { collabsRepos: [], projsRepos: [] }
  )

  const { collabsRepos, projsRepos } = sortedRepos

  const projectArray: IProject[] = projsRepos.reduce(
    (accu: IProject[], cv, i) => {
      if (cv.name === 'minesweeper') {
        let data = {} as IProject
        data.title = dataVisualization.name
        data.language = dataVisualization.language
        data.imageUrl = dataVisualization.imageUrl
        data.description = dataVisualization.description
        data.topics = dataVisualization.topics
        data.index = i - 0.5
        accu.push(data)
      }
      let data = {} as IProject
      data.title = cv.name
      data.language = getLang(cv.name)
      data.imageUrl = getImgUrl(cv.openGraphImageUrl)
      data.description = cv.description
      data.topics = getTopics(cv.repositoryTopics.nodes)
      data.index = i
      data.url = cv.url
      data.homepageUrl = cv.homepageUrl
      accu.push(data)
      return accu
    },
    []
  )

  const collaborations = collabsRepos.map((repo, i) => (
    <Collaboration
      key={i}
      language={getLang(repo.name)}
      title={repo.name}
      imageUrl={getImgUrl(repo.openGraphImageUrl)}
      topics={getTopics(repo.repositoryTopics.nodes)}
      url={repo.url}
      homepageUrl={repo.homepageUrl}
    />
  ))

  const classes = useStyles()

  return (
    <>
      <Meta title={'My Work'} />
      <motion.div variants={stagger}>
        <motion.section variants={fadeInUp}>
          <Typography className={classes.heading} variant='h1' component='h1'>
            Experience
          </Typography>
          <motion.div variants={fadeInUp}>{collaborations}</motion.div>
        </motion.section>
        <motion.section variants={fadeInUp}>
          <Typography
            className={classes.heading}
            variant='h1'
            component='h2'
            gutterBottom
          >
            Projects
          </Typography>
          <ProjectGrid projectArray={projectArray}></ProjectGrid>
        </motion.section>
      </motion.div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await apolloClient.query({
    query: PINNED_REPOSITORIES,
  })

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      repositories: data.viewer.pinnedItems.nodes,
    },
  }
}

export default projects

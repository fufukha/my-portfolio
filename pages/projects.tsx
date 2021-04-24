import { makeStyles, Typography } from '@material-ui/core'
import { motion } from 'framer-motion'
import { GetStaticProps } from 'next'
import React, { useState } from 'react'
import { fadeInUp, stagger } from '../animation'
import Collaboration from '../components/Collaboration'
import GridWrap from '../components/GridWrap'
import Meta from '../components/Meta'
import Repo from '../components/Repo'
import { viewer } from '../config'
import apolloClient from '../lib/apolloClient'
import { PINNED_REPOSITORIES } from '../lib/apolloClient/queries'
import { Repository, RepositoryTopic } from '../types'
import { dataVisualization } from '../utilis/projectsdata'

type ProjectProps = {
  repositories: Repository[]
}

type Acc = {
  collabsRepos: Repository[]
  projsRepos: Repository[]
}

const getTopics = (nodes: RepositoryTopic[]) => {
  let topics: string[] = []

  if (!Array.isArray(nodes) || !nodes.length) return topics

  nodes.forEach((node) => topics.push(node.topic.name))

  return topics
}

const getLang = (name: string) => {
  if (name === 'type-in-arabic') return 'typescript'
  if (name === 'liakos') return 'css'
  return 'javascript'
}

const getImgUrl = (url: string) => {
  return url.startsWith('https://avatars') ? '' : url
}

const useStyles = makeStyles({
  heading: {
    marginBottom: '16px',
  },
})

const projects = ({ repositories }: ProjectProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<null | number>(null)

  let acc: Acc = {
    collabsRepos: [],
    projsRepos: [],
  }

  const sortedRepos = repositories.reduce((acc, cv) => {
    if (cv.owner.login !== viewer) {
      acc.collabsRepos.push(cv)
    } else {
      acc.projsRepos.push(cv)
    }
    return acc
  }, acc)

  const { collabsRepos, projsRepos } = sortedRepos

  const projects = projsRepos.map((repo, i) => {
    if (repo.name === 'comments') {
      return (
        <React.Fragment key={i}>
          <Repo
            language={dataVisualization.language}
            title={dataVisualization.name}
            imageUrl={dataVisualization.imageUrl}
            description={dataVisualization.description}
            topics={dataVisualization.topics}
            isDimmed={hoveredIndex === null ? false : i !== hoveredIndex}
            index={i}
          />
          <Repo
            language={getLang(repo.name)}
            title={repo.name}
            imageUrl={getImgUrl(repo.openGraphImageUrl)}
            description={repo.description}
            topics={getTopics(repo.repositoryTopics.nodes)}
            url={repo.url}
            homepageUrl={repo.homepageUrl}
            isDimmed={hoveredIndex === null ? false : i !== hoveredIndex}
            index={i}
          />
        </React.Fragment>
      )
    }

    return (
      <Repo
        key={i}
        language={getLang(repo.name)}
        title={repo.name}
        imageUrl={getImgUrl(repo.openGraphImageUrl)}
        description={repo.description}
        topics={getTopics(repo.repositoryTopics.nodes)}
        url={repo.url}
        homepageUrl={repo.homepageUrl}
        isDimmed={hoveredIndex === null ? false : i !== hoveredIndex}
        index={i}
      />
    )
  })

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
          {collaborations}
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
          <GridWrap>{projects}</GridWrap>
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

import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import { GetStaticProps } from 'next'
import Meta from '../components/Meta'
import Repo from '../components/Repo'
import Collaboration from '../components/Collaboration'
import apolloClient from '../lib/apolloClient'
import { PINNED_REPOSITORIES } from '../lib/apolloClient/queries'
import { Repository, RepositoryTopic } from '../types'
import { viewer } from '../config'
import { makeStyles } from '@material-ui/core'
import { dataVisualization } from '../utilis/projectsdata'
import GridWrap from '../components/GridWrap'

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
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          />
          <Repo
            language={getLang(repo.name)}
            title={repo.name}
            imageUrl={getImgUrl(repo.openGraphImageUrl)}
            description={repo.description}
            topics={getTopics(repo.repositoryTopics.nodes)}
            url={repo.url}
            homepageUrl={repo.homepageUrl}
            isDimmed={hoveredIndex === null ? false : i + 0.5 !== hoveredIndex}
            onMouseEnter={() => setHoveredIndex(i + 0.5)}
            onMouseLeave={() => setHoveredIndex(null)}
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
        onMouseEnter={() => setHoveredIndex(i)}
        onMouseLeave={() => setHoveredIndex(null)}
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
      <section>
        <Typography className={classes.heading} variant='h1' component='h1'>
          Experience
        </Typography>
        {collaborations}
      </section>
      <section>
        <Typography
          className={classes.heading}
          variant='h1'
          component='h2'
          gutterBottom
        >
          Projects
        </Typography>
        <GridWrap>
          {projects}
        </GridWrap>
      </section>
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

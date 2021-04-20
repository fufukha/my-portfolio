import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { GetStaticProps } from 'next'
import Meta from '../components/Meta'
import Repo from '../components/Repo'
import Collaboration from '../components/Collaboration'
import apolloClient from '../lib/apolloClient'
import { PINNED_REPOSITORIES } from '../lib/apolloClient/queries'
import { Repository, RepositoryTopic } from '../types'
import { viewer } from '../config'
import { makeStyles } from '@material-ui/core'

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

  const projects = projsRepos.map((repo, i) => (
    <Repo
      key={i}
      language={getLang(repo.name)}
      title={repo.name}
      imageUrl={getImgUrl(repo.openGraphImageUrl)}
      description={repo.description}
      topics={getTopics(repo.repositoryTopics.nodes)}
      url={repo.url}
      homepageUrl={repo.homepageUrl}
    />
  ))

  const collaborations = collabsRepos.map((repo, i) => (
    <Collaboration
      key={`repo${i}`}
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
      <Meta title={'projects'} />
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
        <Grid 
          container
          justify='center'
          sm={12}
          spacing={6}>
          {projects}
      </Grid>
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

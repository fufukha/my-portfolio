import Typography from '@material-ui/core/Typography'
import { GetStaticProps } from 'next'
import Meta from '../components/Meta'
import Repo from '../components/Repo'
import apolloClient from '../lib/apolloClient'
import { PINNED_REPOSITORIES } from '../lib/apolloClient/queries'
import { Repository, RepositoryTopic } from '../types'

type ProjectProps = {
  repositories: Repository[]
}

const projects = ({ repositories }: ProjectProps) => {
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

  const repos = repositories.map((repo, i) => (
    <Repo
      key={`repo${i}`}
      language={getLang(repo.name)}
      title={repo.name}
      imageUrl={getImgUrl(repo.openGraphImageUrl)}
      description={repo.description}
      topics={getTopics(repo.repositoryTopics.nodes)}
      url={repo.url}
      homepageUrl={repo.homepageUrl}
    />
  ))
  return (
    <>
      <Meta title={'projects'} />
      <section>
        <Typography variant='h1' component='h1' gutterBottom>
          Experience
        </Typography>
      </section>
      <section>
        <Typography variant='h1' component='h2' gutterBottom>
          Projects
        </Typography>
        {repos}
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

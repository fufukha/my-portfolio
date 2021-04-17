import {
  ApolloClient,
  createHttpLink,
  gql,
  InMemoryCache,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import Typography from '@material-ui/core/Typography'
import { GetStaticProps } from 'next'
import Meta from '../components/Meta'
import Repo from '../components/Repo'
import token from '../config'

interface RepositoryTopic {
  __typename: 'RepositoryTopic'
  topic: {
    name: string
  }
}

interface PageInfo {
  __typename: 'PageInfo'
  startCursor: string | null
}

interface RepositoryTopics {
  __typename: 'RepositoryTopicConnection'
  pageInfo: PageInfo
  nodes: RepositoryTopic[]
}

interface Repository {
  __typename: 'Repository'
  name: string
  url: string
  homepageUrl: string
  description: string
  openGraphImageUrl: string
  repositoryTopics: RepositoryTopics
}

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
  const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
  })

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        accept: 'application/vnd.github.v3+json',
        authorization: token ? `Bearer ${token}` : '',
      },
    }
  })

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  })

  const { data } = await client.query({
    query: gql`
      query PinnedRespositories {
        viewer {
          pinnedItems(first: 50) {
            pageInfo {
              startCursor
            }
            nodes {
              ... on Repository {
                name
                url
                homepageUrl
                description
                openGraphImageUrl
                repositoryTopics(first: 10) {
                  pageInfo {
                    startCursor
                  }
                  nodes {
                    topic {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
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

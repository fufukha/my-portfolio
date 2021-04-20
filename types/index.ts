export type PaletteMainColors = 'primary' | 'secondary'

export type StyleProps = {
  color: PaletteMainColors
}

export interface RepositoryTopic {
  __typename: 'RepositoryTopic'
  topic: {
    name: string
  }
}

interface PageInfo {
  __typename: 'PageInfo'
  startCursor: string | null
}

interface  RepositoryOwner {
  __typename:  RepositoryOwner
  login: string
}

interface RepositoryTopics {
  __typename: 'RepositoryTopicConnection'
  pageInfo: PageInfo
  nodes: RepositoryTopic[]
}

export interface Repository {
  __typename: 'Repository'
  name: string
  url: string
  homepageUrl: string
  owner: RepositoryOwner
  description: string
  openGraphImageUrl: string
  repositoryTopics: RepositoryTopics
}

export interface DataVisualization {
  name: string
  language: string
  description: string
  imageUrl: string
  topics: string[]
}

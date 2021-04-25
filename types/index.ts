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

interface RepositoryOwner {
  __typename: RepositoryOwner
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

export interface IProject {
  title: string
  language: string
  imageUrl: string
  description: string
  topics: string[]
  index: number
}

export interface StepData {
  label: string | JSX.Element
  content: string | JSX.Element
  arabicContent?: string
  url?: string
  homepageUrl?: string
}

export enum MenuLink {
  NAME_GITHUB = 'github',
  NAME_LEETCODE = 'leetcode',
  NAME_EMAIL = 'email',
  HREF_GITHUB = 'https://github.com/fufukha',
  HREF_LEETCODE = 'https://leetcode.com/fufukha',
  HREF_EMAIL = 'mailto: kamile.mkb@gmail.com',
}

interface GithubLink {
  name: MenuLink.NAME_GITHUB
  href: MenuLink.HREF_GITHUB
}

interface LeetcodeLink {
  name: MenuLink.NAME_LEETCODE
  href: MenuLink.HREF_LEETCODE
}

interface EmailLink {
  name: MenuLink.NAME_EMAIL
  href: MenuLink.HREF_EMAIL
}

export type PersonalLinks = [GithubLink, LeetcodeLink, EmailLink]

export enum Paths {
  HOME = '/',
  PROJECTS = '/projects',
  JOURNEY = '/journey',
}

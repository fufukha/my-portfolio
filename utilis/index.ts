import { RepositoryTopic } from '../types'

export const getTopics = (nodes: RepositoryTopic[]) => {
  let topics: string[] = []

  if (!Array.isArray(nodes) || !nodes.length) return topics

  nodes.forEach((node) => topics.push(node.topic.name))

  return topics
}

export const getLang = (name: string) => {
  if (name === 'type-in-arabic') return 'typescript'
  if (name === 'liakos') return 'css'
  return 'javascript'
}

export const getImgUrl = (url: string) => {
  return url.startsWith('https://avatars') ? '' : url
}
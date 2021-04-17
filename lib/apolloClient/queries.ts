import { gql } from '@apollo/client'

export const PINNED_REPOSITORIES = gql`
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
            owner {
            login
          }
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
`

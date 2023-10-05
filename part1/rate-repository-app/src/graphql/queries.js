import { gql } from '@apollo/client';
import { REPISITORY_DETAILS } from './fragments';
export const GET_REPOSITORIES = gql`
  query Repositories {
    repositories {
  
        edges {
          node {
              ...repositoryDetails
          }
        }
      }
  }
  ${REPISITORY_DETAILS}
`;

export const GET_ME = gql`
    query Me {
        me {
        id
        username
        }
    }
`



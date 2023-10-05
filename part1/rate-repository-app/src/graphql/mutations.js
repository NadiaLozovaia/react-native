import { gql } from '@apollo/client';

export const AUTHENTICATE = gql`
mutation Authenticate($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`
// mutation {
//     authenticate(credentials: { username: "kalle", password: "password" }) {
//       accessToken
//     }
//   }

export const CREATE_USER = gql`
 mutation CreateUser($user: CreateUserInput) {
    createUser(user: $user) {
      id
      username
      createdAt
    }
  }
`

// mutation CreateUser($user: CreateUserInput) {
//     createUser(user: $user) {
//       id
//       username
//       createdAt
//     }
//   }
//   mutation {
//     createUser(user: { username: "myusername", password: "mypassword" }) {
//       id
//       username
//     }
//   }



//   {
//     "Authorization": "Bearer <ACCESS_TOKEN>"
//   }
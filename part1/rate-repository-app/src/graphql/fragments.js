import { gql } from '@apollo/client'

// export const BOOK_DETAILS = gql`
//   fragment bookDetails on Book {
//       title
//       published
//       id
//       genres
//       author {
//         name
//       } 
        
//     }
// `
export const REPISITORY_DETAILS = gql`
fragment repositoryDetails on Repository {
      id
      ownerName
      name
      
      createdAt
      fullName
      
      ratingAverage
      reviewCount
      stargazersCount
      watchersCount
      forksCount
      openIssuesCount
      url
      ownerAvatarUrl
      description
      language
      userHasReviewed
    
  }`

  

import { render, screen } from '@testing-library/react-native';
import { RepositoryListContainer } from '../../components/RepositoryList';




// const repositories = [
//     {
//         id: 'jaredpalmer.formik',
//         fullName: 'jaredpalmer/formik',
//         description: 'Build forms in React, without the tears',
//         language: 'TypeScript',
//         forksCount: 1589,
//         stargazersCount: 21553,
//         ratingAverage: 88,
//         reviewCount: 4,
//         ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
//     },
//     {
//         id: 'rails.rails',
//         fullName: 'rails/rails',
//         description: 'Ruby on Rails',
//         language: 'Ruby',
//         forksCount: 18349,
//         stargazersCount: 45377,
//         ratingAverage: 100,
//         reviewCount: 2,
//         ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/4223?v=4',
//     },
//     {
//         id: 'django.django',
//         fullName: 'django/django',
//         description: 'The Web framework for perfectionists with deadlines.',
//         language: 'Python',
//         forksCount: 21015,
//         stargazersCount: 48496,
//         ratingAverage: 73,
//         reviewCount: 5,
//         ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/27804?v=4',
//     },
//     {
//         id: 'reduxjs.redux',
//         fullName: 'reduxjs/redux',
//         description: 'Predictable state container for JavaScript apps',
//         language: 'TypeScript',
//         forksCount: 13902,
//         stargazersCount: 52869,
//         ratingAverage: 0,
//         reviewCount: 0,
//         ownerAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4',
//     },
// ];

const repositories = {
  totalCount: 8,
  pageInfo: {
    hasNextPage: true,
    endCursor:
      'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
    startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
  },
  edges: [
    {
      node: {
        id: 'jaredpalmer.formik',
        fullName: 'jaredpalmer/formik',
        description: 'Build forms in React, without the tears',
        language: 'TypeScript',
        forksCount: 1619,
        stargazersCount: 21856,
        ratingAverage: 88,
        reviewCount: 3,
        ownerAvatarUrl:
          'https://avatars2.githubusercontent.com/u/4060187?v=4',
      },
      cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
    },
    {
      node: {
        id: 'async-library.react-async',
        fullName: 'async-library/react-async',
        description: 'Flexible promise-based React data loader',
        language: 'JavaScript',
        forksCount: 69,
        stargazersCount: 1760,
        ratingAverage: 72,
        reviewCount: 3,
        ownerAvatarUrl:
          'https://avatars1.githubusercontent.com/u/54310907?v=4',
      },
      cursor:
        'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
    },
  ],
};



describe('RepositoryListContainer', () => {
  it('renders a greeting message based on the name prop', () => {
    render(<RepositoryListContainer repositories={repositories} />);
    const repositoryItems = screen.getAllByTestId('repositoryItem');
    const [firstRepositoryItem, secondRepositoryItem] = repositoryItems;


    expect(firstRepositoryItem).toHaveTextContent('jaredpalmer/formik',
      'Build forms in React, without the tears',
      'TypeScript',
      1619,
      21856,
      88,
      3);
    expect(secondRepositoryItem).toHaveTextContent('async-library/react-async',
      'Flexible promise-based React data loader',
      'JavaScript',
      69,
      1760,
      72,
      3);


    screen.debug();

    // expect(screen.getByText( 'jaredpalmer/formik')).toBeDefined();

  });
});
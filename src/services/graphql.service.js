import ApolloClient, { gql } from 'apollo-boost';

const githubToken = '9dce35b300de111ebe1e7db8e85ef13a0faa4898';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  fetchOptions: {
    credentials: 'include'
  },
  request: (operation) => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${githubToken}`
      }
    });
  },
  onError: ({ graphQLErrors, networkError }) => {
    if (graphQLErrors) return console.error('GrahQL Errors:', graphQLErrors);
    if (networkError) return console.error('Network Error: ', networkError);
  }
});

export { client, gql };
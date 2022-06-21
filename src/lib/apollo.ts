import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o35zl70aw801xx2dtcgej9/master',
  cache: new InMemoryCache(),
})
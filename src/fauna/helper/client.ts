import { GraphQLClient } from 'graphql-request';

const endpoint: string = "https://graphql.eu.fauna.com/graphql";
const Client = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.FAUNA_SECRET}`,
  },
})

export default Client;

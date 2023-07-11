import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { Store } from '../../../fauna/model';
import { GraphQLClient, gql } from 'graphql-request';

const endpoint: string = "https://graphql.eu.fauna.com/graphql";
const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.FAUNA_SECRET}`,
  },
})

interface ResponseStoreByName {
  store: {
    data: Store[]
  }
}

export const load = (async ({ params }) => {
  const { name } = params;
  const getStoreQuery = gql`
   query StoreByName {
   store(name: "${name}") {
     data {
       _id
       products {
           data {
               _id
               name
               price
           }
       }
     }
   }
  }
  `
  let response:ResponseStoreByName = await graphQLClient.request(getStoreQuery);
  
  if (!response) {
    throw error(400, `No stores found.`);
  }
  return response.store.data[0];
}) satisfies PageServerLoad;

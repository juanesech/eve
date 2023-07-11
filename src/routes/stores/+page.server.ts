import { error } from '@sveltejs/kit';
import type { Store } from '../../fauna/model';
import type { PageServerLoad } from './$types';
import { GraphQLClient, gql } from 'graphql-request';

const endpoint: string = "https://graphql.eu.fauna.com/graphql";
const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.FAUNA_SECRET}`,
  },
})

const storesQuery = gql`
  query getStore {
    allStores {
  	  data {
        _id
        name
        products {
          data {
              _id
              name
          }
        }
      }
    } 
  }
`

interface ResponseAllStores {
  allStores: { 
     data: Store[]
  }
}

export const load = (async () => {
  let response:ResponseAllStores = await graphQLClient.request(storesQuery);
  
  if (!response) {
    throw error(400, `No stores found.`);
  }

  let stores: Store[] = response.allStores.data;
  console.log("STORES RESPONSE: ", stores);
  return {stores};
}) satisfies PageServerLoad;

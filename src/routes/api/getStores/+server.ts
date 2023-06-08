import { error } from '@sveltejs/kit';
import { StoreStore, type Store } from '../../../Store';
import { GraphQLClient, gql } from 'graphql-request';

let stores: Store[] = [];
StoreStore.subscribe((data) => stores = data);
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
          }
        }
      }
    } 
  }
`

export async function GET() {
  stores = await graphQLClient.request(storesQuery);
  if (!stores) {
    throw error(400, `No stores found.`);
  }
  return new Response(JSON.stringify(stores));
}

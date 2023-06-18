import { error } from '@sveltejs/kit';
import type { Store } from '../../../../fauna/model';
import { GraphQLClient, gql } from 'graphql-request';
import { page } from '$app/stores';

const endpoint: string = "https://graphql.eu.fauna.com/graphql";
const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.FAUNA_SECRET}`,
  },
})

interface ResponseStoreByName {
  data: { 
     store: {
      data: Store[]
    }
  }
}

export async function GET() {
  console.log(page);
  
  //let id: string = page;
  const getStoreQuery = gql`
   query StoreByName {
   store(name: ''){
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

  let store: Store = response.data.store.data[0];
  console.log(store);
  return new Response(JSON.stringify(store));
}

import { error } from '@sveltejs/kit';
import type { RequestEvent } from '@sveltejs/kit';
import type { Store } from '../../../../fauna/model';
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

export async function GET( { params }: RequestEvent ) {
  console.log("PAGE PARAMS:", params);
  
  const { name } = params;
  const getStoreQuery = gql`
   query StoreByName {
   store(name: "${name}"){
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
  
  let store: Store = response.store.data[0];
  console.log("GET STORE RESPONSE:", store);
  
  return new Response(JSON.stringify(store));
}

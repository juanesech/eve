import { error } from '@sveltejs/kit';
import type { Product } from '../../fauna/model';
import type { PageServerLoad } from './$types';
import { GraphQLClient, gql } from 'graphql-request';

const endpoint: string = "https://graphql.eu.fauna.com/graphql";
const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.FAUNA_SECRET}`,
  },
})

const ProductsQuery = gql`
  query getProducts {
    allProducts {
      data {
        _id
        name
        stores {
            data {
                name
            }
        }
      }
    } 
  }
`

interface ResponseAllProducts {
  allProducts: { 
     data: Product[]
  }
}

export const load = (async () => {
  let response:ResponseAllProducts = await graphQLClient.request(ProductsQuery);
  
  if (!response) {
    throw error(400, `No stores found.`);
  }

  let products: Product[] = response.allProducts.data;
  console.log("STORES RESPONSE: ", products);
  return {products};
}) satisfies PageServerLoad;

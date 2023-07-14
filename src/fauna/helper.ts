import type { Product, Store, Bill } from './model';
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

const billsQuery = gql`
  query getBills {
    allBills {
      data {
        _id
        date
        products {
            data {
                _id
                name
            }
        }
        store {
          _id
          name
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

interface ResponseAllStores {
  allStores: { 
     data: Store[]
  }
}

interface ResponseAllBills {
  allBills: { 
     data: Bill[]
  }
}

export const getStores = (async () => {
  let storesResponse:ResponseAllStores = await graphQLClient.request(storesQuery);
  let stores: Store[] = storesResponse.allStores.data;
  return stores;
});

export const getProducts = (async () => {
  let productsResponse:ResponseAllProducts = await graphQLClient.request(ProductsQuery);
  let products: Product[] = productsResponse.allProducts.data;
  return products;
});

export const getBills= (async () => {
  let billsResponse:ResponseAllBills = await graphQLClient.request(billsQuery);
  let bills: Bill[] = billsResponse.allBills.data;
  return bills;
});
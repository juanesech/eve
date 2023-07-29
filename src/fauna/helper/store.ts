import type { Store } from "../model";
import { gql } from "graphql-request";
import Client from "./client";

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

export interface CreateStoreResponse {
  data: {
    createStore: {
      _id:string
    }
  }
}

export const getStores = (async () => {
  const storesResponse:ResponseAllStores = await Client.request(storesQuery);
  return storesResponse.allStores.data;
});

export const newStore = (async (name:string) => {
  const createStoreMutation = gql`
    mutation CreateStore {
        createStore(data: {
          name: ${name}
        }) { _id }
    }
  `
  const newStore:CreateStoreResponse = await Client.request(createStoreMutation);
  return newStore.data.createStore._id
});
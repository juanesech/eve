import type { Product } from "../model";
import { gql } from "graphql-request";
import Client from "./client";

const productsQuery = gql`
  query getProducts {
    allProducts {
      data {
        _id
        name
        price
        stores {
            data {
                name
            }
        }
      }
    } 
  }
`

export interface AllProductsResponse {
  allProducts: { 
     data: Product[]
  }
}

export interface CreateProductResponse {
  data: {
    createProduct: {
      _id:string
    }
  }
}

export const getProducts = (async () => {
  const productsResponse:AllProductsResponse = await Client.request(productsQuery);
  return productsResponse.allProducts.data;
});

export const newProduct = (async (product:Product, storeId:string) => {
  const createProductMutation = gql`
    createProduct(data: {
       name: ${product.name}
       price: ${product.price}
       stores: {
           connect: ${storeId}
       }
    }) { _id }
  `
  const newProduct:CreateProductResponse = await Client.request(createProductMutation);
  return newProduct.data.createProduct._id
});
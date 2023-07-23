import type { Product } from "../model";
import { gql } from "graphql-request";
import Client from "./client";

const productsQuery = gql`
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
  let productsResponse:AllProductsResponse = await Client.request(productsQuery);
  let products: Product[] = productsResponse.allProducts.data;
  return products;
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
  let newProduct:CreateProductResponse = await Client.request(createProductMutation);
  return newProduct.data.createProduct._id
});
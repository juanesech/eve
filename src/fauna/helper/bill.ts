import type { Bill, Product, Store } from "../model";
import { gql } from "graphql-request";
import Client from "./client";
import { newStore } from "./store";
import { newProduct } from "./product";

const billsQuery = gql`
  query getBills {
    allBills {
      data {
        _id
        date
        total
        products {
            data {
                _id
                name
                price
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
interface ResponseAllBills {
  allBills: { 
     data: Bill[]
  }
}

export interface NewBill {
  storeOnBill: Store,
  productsOnBill: Product[]
  date: Date
}

export const getBills = (async ():Promise<Bill[]> => {
  const billsResponse:ResponseAllBills = await Client.request(billsQuery);
  return billsResponse.allBills.data;
});

export const newBill = (async(bill:NewBill) => {
  let storeId:string|undefined;
  if (!bill.storeOnBill._id) {
    console.log("Creating store", bill.storeOnBill.name);
    storeId = await newStore(bill.storeOnBill.name);
  } else {
    storeId = bill.storeOnBill._id
  }

  const createProduct = async( name:string, price:number, storeId:string) => {
    return await newProduct(
      {
        name,
        price,
        stores: {
          data: [bill.storeOnBill]
        }
      }, storeId?storeId:""
    );
  }
  
  bill.productsOnBill.forEach( product => {
    if (!product._id) {
      createProduct(product.name, product.price, storeId?storeId:"").then( id => {product._id = id})
      console.log(product);
    }
  
  const total = bill.productsOnBill.reduce((acc, curr) => acc + curr.price, 0 );
  const productIds = Array.from(bill.productsOnBill, product => product._id);

  const createBill = gql`
      mutation CreateBill {
        createBill(data: {
            store: {
                connect: ${storeId}
            }
            date: ${bill.date}
            total: ${total}
            products: {
                connect: ${productIds}
            }
        }) { _id }
      }
  `
  console.log("QUERY:", createBill);

  });
});
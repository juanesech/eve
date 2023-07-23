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

const createBill = gql`
  mutation CreateBill {
    createBill(data: {
        store: {
            connect: "366873258984734924"
        }
        date: "2023-07-15"
        total: 4.2
        products: {
            create: [
                {
                    name: "Sal"
                    price: 1.5
                    stores: {
                        connect: ["366873258984734924"]
                    }
                },
                {
                    name: "Pimienta"
                    price: 0.5
                    stores: {
                        connect: ["366873258984734924"]
                    }
                },
                {
                    name: "Pimenton"
                    price: 1
                    stores: {
                        connect: ["366873258984734924"]
                    }
                },
                {
                    name: "Cebolla"
                    price: 1.2
                    stores: {
                        connect: ["366873258984734924"]
                    }
                }
            ]
        }
    }) { _id }
  }
`
interface NewBill {
  allStores: Store[],
  storeOnBill: Store,
  allProducts: Product[],
  productsOnBill: Product[]
  date: Date
}

export const getBills = (async () => {
  let billsResponse:ResponseAllBills = await Client.request(billsQuery);
  let bills: Bill[] = billsResponse.allBills.data;
  return bills;
});

export const newBill = (async(bill:NewBill) => {
  let storeId:string|undefined;
  if (!bill.storeOnBill._id) {
    console.log("Creating store", bill.storeOnBill.name);
    storeId = await newStore(bill.storeOnBill.name);
  } else {
    storeId = bill.allStores.find( store => store.name == bill.storeOnBill.name)?._id
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
    let productId:string|undefined;
    if (!product._id) {
      console.log("Creating product", product.name);

    } else {
      storeId = bill.allStores.find( store => store.name == bill.storeOnBill.name)?._id
    }
  })

});
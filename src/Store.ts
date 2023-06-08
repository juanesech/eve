import { writable } from "svelte/store";

export type Product = {
  name: String
  price: number
  store: String
}

export type Store = {
  name: String
  products: Product[]
}

export type Bill = {
  products: Partial<Product>[]
  store: String
  date: String
}
export const BillStore = writable(<Bill[]>[
  {
    date: "14/05/2023",
    store: "Lidle",
    products: [
      {name: "Queso philadelphia", price: 2.50},
      {name: "Pan tajado", price: 2.70},
      {name: "Brocoli", price: 1},
      {name: "Salsa BBQ", price: 1.25},
      {name: "Ensalada", price: 2.80}
    ]
  },
  {
    date: "10/05/2023",
    store: "Mercadona",
    products: [
      {name: "Queso feta", price: 2.80},
      {name: "Yogourt", price: 1.70},
      {name: "Banana", price: 1},
    ]
  }
]);

export const StoreStore = writable(<Store[]>[]);

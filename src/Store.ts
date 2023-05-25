import { writable } from "svelte/store";

export type Item = {
  name: String
  price: number
  store: String
}

export type Bill = {
  items: Partial<Item>[]
  market: String
  date: String
}
export const BillStore = writable(<Bill[]>[
  {
    date: "14/05/2023",
    market: "Lidle",
    items: [
      {name: "Queso philadelphia", price: 2.50},
      {name: "Pan tajado", price: 2.70},
      {name: "Brocoli", price: 1},
      {name: "Salsa BBQ", price: 1.25},
      {name: "Ensalada", price: 2.80}
    ]
  },
  {
    date: "10/05/2023",
    market: "Mercadona",
    items: [
      {name: "Queso feta", price: 2.80},
      {name: "Yogourt", price: 1.70},
      {name: "Banana", price: 1},
    ]
  }
]);

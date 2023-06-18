export type Product = {
  _id?: String
  name: String
  price: number
  store: Store
}

export type Store = {
  _id?: String
  name: String
  products: {
    data: Product[]
    count: number 
  }
}

export type Bill = {
  products: Partial<Product>[]
  store: String
  date: String
}

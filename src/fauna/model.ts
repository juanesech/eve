export type Product = {
  _id?: String
  name: String
  price: number
  stores: {
    data: Store[]
  }
}

export type Store = {
  _id?: string
  name: string
  products: {
    data: Product[]
    count: number 
  }
}

export type Bill = {
  _id: string
  products: Product[]
  store: Store
  date: Date
  total: Number
}

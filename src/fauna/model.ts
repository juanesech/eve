export type Product = {
  _id?: string
  name: string
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
  bills: {
    data: Bill[]
  }
}

export type Bill = {
  _id?: string
  products: {
    data: Product[]
  }
  store: Store
  date: Date
  total: Number
}

export type Product = {
  _id?: string
  name: string
  price: [ProductStore]
  stores: {
    data: Store[]
  }
}

export interface ProductStore {
  data: {
    price: Float32Array
    store: Store
    product: Product 
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
  total: Int32Array
}

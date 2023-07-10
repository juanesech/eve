import { writable } from "svelte/store";
import type { Store as StoreType, Product} from "./fauna/model";

export const store = writable(
  <StoreType>{
    name: "",
    products: {
      data: []
    }
});

export const products = writable(<Product[]>[]);
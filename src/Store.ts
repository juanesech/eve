import { writable } from "svelte/store";
import type { Store as StoreType} from "./fauna/model";

export const store = writable(
  <StoreType>{
    name: "",
    products: {
      data: []
    }
});

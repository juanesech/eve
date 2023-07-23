import { writable } from "svelte/store";
import type { Bill, Product, Store } from "../../fauna/model";

export const bill = writable(<Bill>{});
export const products = writable(<Product[]>[]);
export const stores = writable(<Store[]>[]);
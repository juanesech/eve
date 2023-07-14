import { writable } from "svelte/store";
import type { Bill, Product } from "../../fauna/model";

export const bills = writable(<Bill[]>[]);
export const products = writable(<Product[]>[]);
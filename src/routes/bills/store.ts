import { writable } from "svelte/store";
import type { Bill, Product } from "../../fauna/model";

export const bill = writable(<Bill>{});
// export const products = writable(<Product[]>[]);
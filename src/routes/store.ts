import { writable } from "svelte/store";
import type { IStore } from "../db/models/store";
import type { IProduct } from "../db/models/product";
import type { IBill } from "../db/models/bill";


export const bill = writable(<IBill>{});
export const products = writable(<IProduct[]>[]);
export const stores = writable(<IStore[]>[]);
